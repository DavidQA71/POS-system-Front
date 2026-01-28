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
  handleLogout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  handleLogin: () => {},
  loginData: { email: '', password: '' },
  handleChange: () => {},
  handleLogout: () => {}
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

/*TODO: Cambiar alert actual por sweet alerts, una libreria */
    if(!loginData.email || !loginData.password) {
      alert("Por favor completar todos los campos");
      return;
    }

    try {
      const data = await getValidUser(loginData);
      
      if (!data || !data.token) {
        throw new Error("Error al iniciar sesión");
      }

        localStorage.setItem('token', data.token);
        navigate(`/HomePage`);
      
    } catch (error:any) {
      alert(error);
    }
  }


  const handleLogout = (): void => {
    localStorage.removeItem('token');
    setLoginData({ email: '', password: ''});
    navigate('/', { replace: true});
  }

  const defaultValue = {
    handleLogin,
    handleChange,
    handleLogout,
    loginData
  };


  return (
    <AuthContext.Provider value={defaultValue}>
      {children}
    </AuthContext.Provider>
  )

};

export default AuthProvider;