import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getValidUser } from "../services/loginService";

interface LoginData {
  email: string,
  password: string
}

interface IAuthContext {
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => void;
  loginData: LoginData;
  handleChange: (key: keyof LoginData, value: string) => void;
}

export const AuthContext = createContext<IAuthContext>({
  handleLogin: () => {},
  loginData: { email: '', password: '' },
  handleChange: () => {},
})

const AuthProvider = ({ children }: {children:React.ReactNode}) => {

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({ email: '', password: '' });

  const handleChange = (key: keyof LoginData, value: string) => {
    setLoginData(prev => ({
      ...prev,
      [key]: value
    }));
  };


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!loginData.email || !loginData.password) {
      alert("Por favor completar todos los campos");
      return;
    }

    try {
      const data = await getValidUser(loginData);

        sessionStorage.setItem('token', data.token);
        navigate(`/dashboard`);
      
    } catch (error:any) {
      alert(error.message || "Error al iniciar sesion");
    }
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