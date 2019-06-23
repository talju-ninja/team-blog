export interface IPost {
  title: string;
  value: string[];
  tags: string[];
  createdAt: string;
}

export interface IPosts extends IPost {
  id: number;
}

// Action Creator
export interface IRequestNewPost {
  type: 'post/REQUEST_NEW_POST';
  payload: IPost;
}

export interface IRequestGetPost {
  type: 'post/REQUEST_GET_POST';
  id: number;
}

export type IPostActions = IRequestNewPost | IRequestGetPost;
