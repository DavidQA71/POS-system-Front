import { getRoles } from "../services/HomeService";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

interface IUserInfo {
  userName: string;
  isAdmin: boolean;
}

interface IHomeContext {
  /* handleRoles: () => Promise<void>; */
  userInfo: IUserInfo
}

const ADMIN_ROLE = 'Administrador';
const defaultUserInfo: IUserInfo = {
  userName: '',
  isAdmin: false
}

export const HomeContext = createContext<IHomeContext>({
  /* handleRoles: async () => {}, */
  userInfo: defaultUserInfo
});

const HomeProvider = ({ children }: {children:React.ReactNode}) => {
  
  const { handleLogout } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState<IUserInfo>(defaultUserInfo);


  const handleRoles = async (): Promise<void> => {
    try {

      const data = await getRoles();

      setUserInfo({
        userName: data.name,
        isAdmin: data.role === ADMIN_ROLE
      })
    }
    catch (error) {
      handleLogout();
    }
  }

  useEffect(() => {
    handleRoles();
  }, []);

  return (
    <HomeContext.Provider value={{ userInfo }}>
      {children}
    </HomeContext.Provider>
    );

}

export default HomeProvider;