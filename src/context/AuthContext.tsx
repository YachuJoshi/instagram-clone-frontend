import { useState, useCallback, useContext, createContext } from "react";
import { AxiosBasicCredentials, AxiosError } from "axios";
import { useRouter } from "next/router";
import { User } from "../types";
import { parseJWT, notify } from "../utils";
import { login as loginUser } from "../services";

interface Props {
  children: React.ReactNode;
}

interface Context {
  user: User;
  loading: boolean;
  login: ({ username, password }: AxiosBasicCredentials) => Promise<void>;
}

const AuthContext = createContext({} as Context);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState({} as User);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = useCallback(
    async ({ username, password }: AxiosBasicCredentials) => {
      setLoading(true);
      try {
        const { data } = await loginUser({ username, password });
        setUser(parseJWT(data.accessToken));
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        router.push("/");
      } catch (e) {
        if (e instanceof AxiosError) {
          const responseError = e as AxiosError<string>;
          if (responseError?.response) {
            return notify("error", responseError.response.data);
          }
        }
      } finally {
        setLoading(false);
      }
    },
    [router]
  );

  return (
    <AuthContext.Provider value={{ user, loading, login }}>
      {children}
    </AuthContext.Provider>
  );
};
