import { IArticle } from '../api';

const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

export interface Post {
  id?: number;
  title: string;
  value: string[];
  tags: string[];
  createAt: string;
}

export const createPost = (payload: Post) => ({
  type: CREATE_POST,
  payload,
});

export const updatePost = (payload: Post) => ({
  type: UPDATE_POST,
  payload,
});

export const deletePost = (id: number) => ({
  type: DELETE_POST,
  payload: id,
});

const fakeDate = [
  {
    id: 1,
    title: '테스트',
    value: ['테스트', '테스트2'],
    tags: ['테스트', '타입스크립트'],
    createAt: '2019.06.23',
  },
  {
    id: 2,
    title: '타입스크립트',
    value: ['타입스크립트', '타입스크립트2'],
    tags: ['테스트', '타입스크립트'],
    createAt: '2019.06.23',
  },
  {
    id: 3,
    title: '리액트',
    value: ['리액트', '리액트2'],
    tags: ['리액트', '타입스크립트'],
    createAt: '2019.06.23',
  },
  {
    id: 4,
    title: '리덕스',
    value: ['리덕스', '리덕스2'],
    tags: ['리덕스', '타입스크립트'],
    createAt: '2019.06.23',
  },
];

const initialState: PostState = {
  posts: fakeDate,
};

interface CreatePostAction {
  type: typeof CREATE_POST;
  payload: Post;
}

interface UpdatePostAction {
  type: typeof UPDATE_POST;
  payload: Post;
}
interface DeletePostAction {
  type: typeof DELETE_POST;
  payload: number;
}

type Actions = CreatePostAction | UpdatePostAction | DeletePostAction;

export interface PostState {
  posts: Post[];
}

let id = fakeDate.length;

export default function postReducer(
  state = initialState,
  action: Actions,
): PostState {
  switch (action.type) {
    case CREATE_POST:
      id++;
      return {
        ...state,
        posts: state.posts.concat({ ...action.payload, id }),
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post: Post) => {
          if (post.id === action.payload.id) {
            post = action.payload;
          }
          return post;
        }),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post.id !== action.payload),
      };
    default:
      return state;
  }
}
