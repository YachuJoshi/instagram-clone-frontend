export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  bio: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
