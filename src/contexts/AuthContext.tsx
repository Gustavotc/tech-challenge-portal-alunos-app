import { getStorageData, storeData } from '@/config/storage/Storage';
import { CONSTANTS } from '@/constants/Constants';
import { IUser } from '@/features/login/domain/models/IUser';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

type IAuthContext = {
  user: IUser | null;
  loadingInitialData: boolean;
  updateUser: (user: IUser | null) => Promise<void>;
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loadingInitialData, setLoadingInitialData] = useState(true);

  const updateUser = async (newUser: IUser | null) => {
    setUser(newUser);
    storeData(CONSTANTS.STORAGE_USER, newUser);
  };

  const readInitialValues = async () => {
    const userData = await getStorageData<IUser>(CONSTANTS.STORAGE_USER);
    setUser(userData);
    setLoadingInitialData(false);
  };

  useEffect(() => {
    readInitialValues();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loadingInitialData, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
