import { getRoles } from "../services/HomeService";
import { createContext, useEffect, useState } from "react";


interface IHomeContext {
  handleRoles: () => Promise<void>;
  isAdmin: boolean;
  nameUser: string;
}


export const HomeContext = createContext<IHomeContext>({
  handleRoles: async () => {},
  isAdmin: false,
  nameUser: ''
});

const HomeProvider = ({ children }: {children:React.ReactNode}) => {

  const [isAdmin, setIsAdmin] = useState(false);
  const [nameUser, setNameUser] = useState('');


  const handleRoles = async () => {
    try {

      const data = await getRoles();
      console.log(data)
      if (!data || !data.role || !data.name) {
        throw new Error("Error al encontrar rol de usuario o nombre");
      }

      setIsAdmin(data.role === 'Administrador');
      setNameUser(data.name);
    }
    catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    handleRoles();
  }, []);

  return (
    <HomeContext.Provider value={{ isAdmin, handleRoles, nameUser }}>
      {children}
    </HomeContext.Provider>
    );

}

export default HomeProvider;