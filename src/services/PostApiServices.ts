import { api } from "../api";

export const createPost = (formData: FormData) => {
  return api.post("/posts/create", formData);
};
