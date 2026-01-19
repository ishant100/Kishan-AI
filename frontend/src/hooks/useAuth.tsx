import { useState, useEffect, useCallback } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const updateAuthStatus = useCallback(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    updateAuthStatus();
    window.addEventListener('authChange', updateAuthStatus);
    return () => {
      window.removeEventListener('authChange', updateAuthStatus);
    };
  }, [updateAuthStatus]);

  return isAuthenticated;
};

export default useAuth;
