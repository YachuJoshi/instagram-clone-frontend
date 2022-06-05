import {
  useState,
  useEffect,
  useCallback,
  useContext,
  createContext,
} from "react";
import { useRouter } from "next/router";
import { AxiosBasicCredentials, AxiosError } from "axios";
import { User } from "../types";
import { api } from "../api";
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

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    try {
      const decodedUser = parseJWT(accessToken);
      setUser(decodedUser);
    } catch (e) {
      return;
    }
  }, []);

  useEffect(() => {
    api.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem("accessToken") || "";
      if (config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });
  }, [user]);

  const login = useCallback(
    async ({ username, password }: AxiosBasicCredentials) => {
      setLoading(true);
      try {
        const { data } = await loginUser({ username, password });
        setUser(parseJWT(data.accessToken));
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        notify("success", "Login Successful!");
        void router.push("/");
      } catch (e) {
        console.log(e);
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
