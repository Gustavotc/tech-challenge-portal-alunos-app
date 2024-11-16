export interface IPost {
  id: string;
  title: string;
  description: string;
  date: Date;
  author: string;
  category: string;
}

export interface IPostJson {
  id: string;
  title: string;
  description: string;
  category: string;
  createAt: string;
  updateAt: string;
  user: {
    id: string;
    name: string;
  };
}

export interface IPostBody {
  title: string;
  description: string;
  category: string;
  user_id: string;
}

export interface ICreatePost {
  title: string;
  description: string;
  category: string;
  userId: string;
}

export interface IEditPost {
  post_id: string;
  user_id: string;
  title: string;
  description: string;
  category: string;
}
