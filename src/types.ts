interface BaseEntity {
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface Media extends BaseEntity {
  id: number;
  url: string;
}

interface Post extends BaseEntity {
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
