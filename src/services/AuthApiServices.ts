import { api } from "../api";
import { AxiosResponse, AxiosBasicCredentials } from "axios";

export interface Response {
  accessToken: string;
  refreshToken: string;
}

export const login = async ({
  username,
  password,
}: AxiosBasicCredentials): Promise<AxiosResponse<Response>> => {
  return await api.post("/auth/login", {
    username,
    password,
  });
};
