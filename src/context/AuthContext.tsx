import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginData {
  user: string,
  password: string
}

interface IAuthContext {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  loginData: LoginData;
  handleChange: (key: keyof LoginData, value: string) => void;
}

export const AuthContext = createContext<IAuthContext>({
  handleLogin: () => {},
  loginData: { user: '', password: '' },
  handleChange: () => {},
})

const AuthProvider = ({ children }: {children:React.ReactNode}) => {

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({ user: '', password: '' });

  const handleChange = (key: keyof LoginData, value: string) => {
    setLoginData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('authToken','mock-token');
    navigate(`/dashboard`);
  }


  const defaultValue = {
    handleLogin,
    handleChange, 
    loginData
  };


  return (
    <AuthContext.Provider value={defaultValue}>
      {children}
    </AuthContext.Provider>
  )

};

export default AuthProvider;