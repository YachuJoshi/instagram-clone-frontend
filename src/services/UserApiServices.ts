import { api } from "../api";
import { User } from "@/types";

export const getUserByUsername = async (username: string): Promise<User> => {
  const user = await api.get(`/users/${username}`);
  return user.data;
};

export const getAllUsers = async (): Promise<User[]> => {
  const users = await api.get("/users");
  return users.data;
};
