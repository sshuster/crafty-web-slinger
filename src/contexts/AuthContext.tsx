
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

// Define user types
export type UserRole = 'user' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  suspended?: boolean;
}

// Define the context type
interface AuthContextType {
  currentUser: User | null;
  users: User[];
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  suspendUser: (userId: string) => void;
  deleteUser: (userId: string) => void;
}

// Create the context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users data
const mockUsers: User[] = [
  {
    id: '1',
    email: 'muser@example.com',
    name: 'Mock User',
    role: 'user'
  },
  {
    id: '2',
    email: 'admin@example.com',
    name: 'Administrator',
    role: 'admin'
  }
];

// Create a provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check for saved user session on load
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem('currentUser');
      }
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let success = false;

    // Mock credentials check
    if (email === 'muser@example.com' && password === 'muser') {
      const user = users.find(u => u.id === '1');
      if (user && !user.suspended) {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        success = true;
      } else if (user?.suspended) {
        toast({
          title: "Account Suspended",
          description: "Your account has been suspended. Please contact support.",
          variant: "destructive",
        });
      }
    } else if (email === 'admin@example.com' && password === 'admin') {
      const adminUser = users.find(u => u.id === '2');
      if (adminUser) {
        setCurrentUser(adminUser);
        localStorage.setItem('currentUser', JSON.stringify(adminUser));
        success = true;
      }
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    }

    setIsLoading(false);
    
    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
    }
    
    return success;
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    navigate('/');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
  };

  // Admin functions
  const suspendUser = (userId: string) => {
    if (currentUser?.role !== 'admin') {
      toast({
        title: "Access Denied",
        description: "You don't have permission to perform this action",
        variant: "destructive",
      });
      return;
    }

    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId 
          ? { ...user, suspended: true } 
          : user
      )
    );

    toast({
      title: "User Suspended",
      description: "The user has been suspended",
    });
  };

  const deleteUser = (userId: string) => {
    if (currentUser?.role !== 'admin') {
      toast({
        title: "Access Denied",
        description: "You don't have permission to perform this action",
        variant: "destructive",
      });
      return;
    }

    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));

    toast({
      title: "User Deleted",
      description: "The user has been deleted",
    });
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      users, 
      isLoading, 
      login, 
      logout, 
      suspendUser, 
      deleteUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
