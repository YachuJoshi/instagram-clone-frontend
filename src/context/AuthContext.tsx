import { useState, useCallback, useContext, createContext } from "react";
import { login as loginUser } from "../services";
import { parseJWT, notify } from "../utils";
import { User } from "../types";
import { AxiosBasicCredentials, AxiosResponse, AxiosError } from "axios";

interface Props {
  children: React.ReactNode;
}

interface Context {
  user: User;
  login: ({ username, password }: AxiosBasicCredentials) => Promise<void>;
}

const AuthContext = createContext({} as Context);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState({} as User);

  const login = useCallback(
    async ({ username, password }: AxiosBasicCredentials) => {
      try {
        const { data } = await loginUser({ username, password });
        setUser(parseJWT(data.accessToken));
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      } catch (e) {
        if (e instanceof AxiosError) {
          const { data: message } = e.response as AxiosResponse<string, any>;
          return notify("error", message);
        }
      }
    },
    []
  );

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
