const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

interface Post {
  id?: number;
  title: string;
  value: string;
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

const initialState: State = {
  posts: [],
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

export default function postReducer(
  state = initialState,
  action: Actions,
): PostState {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if (post.id === action.payload.id) {
            post = action.payload;
          }
          return post;
        }),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    default:
      return state;
  }
}
