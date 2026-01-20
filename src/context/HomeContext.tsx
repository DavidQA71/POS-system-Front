import { getRoles } from "../services/HomeService";
import { createContext, useEffect, useState } from "react";


interface IHomeContext {
  handleRoles: () => Promise<void>;
  isAdmin: boolean;
  nameUser: string | null;
}


export const HomeContext = createContext<IHomeContext>({
  handleRoles: async () => {},
  isAdmin: false,
  nameUser: null
});

const HomeProvider = ({ children }: {children:React.ReactNode}) => {

  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [nameUser, setNameUser] = useState<string | null>(null);


  const handleRoles = async (): Promise<void> => {
    try {

      const data = await getRoles();

      setIsAdmin(data.role === 'Administrador');
      setNameUser(data.name);
    }
    catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
    } else {
        alert('Ocurrió un error inesperado');
  }
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