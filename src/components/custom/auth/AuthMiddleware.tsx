import { supabase } from "@/lib/supabase";
import React, { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
/**
 * Props for AuthMiddleware component.
 * @property {ReactNode} children - The child components to be rendered if the user is authenticated.
 */
interface AuthMiddlewareProps {
  children: ReactNode;
}

/**
 * AuthMiddleware is a higher-order component (HOC) that checks if a user is authenticated.
 * It renders the children components if the user is authenticated, otherwise it redirects to the login page.
 *
 * @param {AuthMiddlewareProps} props - The props object containing child components.
 * @returns {JSX.Element} - The children components if authenticated, otherwise a redirect to the login page.
 */
const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loading state while checking auth
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AuthMiddleware;