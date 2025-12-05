import { getRoles } from "../services/HomeService";
import { createContext, useEffect, useState } from "react";


interface IHomeContext {
  handleRoles: () => Promise<void>;
  isAdmin: boolean;
}


export const HomeContext = createContext<IHomeContext>({
  handleRoles: async () => {},
  isAdmin: false
});

const HomeProvider = ({ children }: {children:React.ReactNode}) => {

  const [isAdmin, setIsAdmin] = useState(false);


  const handleRoles = async () => {
    try {

      const data = await getRoles();
      console.log(data)

      if (!data || !data.role) {
        throw new Error("Error al encontrar rol de usuario");
      }

      setIsAdmin(data.role === 'Administrador');
    }
    catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    handleRoles();
  }, []);

  return (
    <HomeContext.Provider value={{ isAdmin, handleRoles }}>
      {children}
    </HomeContext.Provider>
    );

}

export default HomeProvider;