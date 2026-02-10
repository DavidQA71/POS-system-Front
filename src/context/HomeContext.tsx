import { getRoles } from "../services/HomeService";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import type { Role } from "../types/roles";

interface IUserInfo {
  userName: string;
  role: Role;
}

interface IHomeContext {
  userInfo: IUserInfo
}

const defaultUserInfo: IUserInfo = {
  userName: '',
  role: 'Cajero'
}

export const HomeContext = createContext<IHomeContext>({
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
        role: data.role
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