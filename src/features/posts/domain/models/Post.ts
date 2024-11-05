export interface IPost {
  id: string;
  title: string;
  description: string;
  category: string;
  createAt: Date;
  updateAt: Date;
  user: {
    id: string;
    name: string;
  };
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
