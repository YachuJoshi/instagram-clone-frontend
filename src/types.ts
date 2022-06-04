interface BaseEntity {
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Media extends BaseEntity {
  id: number;
  url: string;
  height: string;
  width: string;
}

export interface Post extends BaseEntity {
  id: number;
  caption: string;
  medias: Media[];
}

export interface User extends BaseEntity {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  bio: string;
  posts: Post[];
}
