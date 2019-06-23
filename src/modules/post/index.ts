import {
  IPost,
  IPosts,
  IRequestGetPost,
  IRequestNewPost,
  IPostActions,
} from './post.interface';

// Actions
export const REQUEST_NEW_POST = 'post/REQUEST_NEW_POST';
export const REQUEST_GET_POST = 'post/REQUEST_GET_POST';
// export const SUCCESS_POST_NEW_POST = 'post/SUCCESS_POST_NEW_POST';
// export const FAILURE_POST_NEW_POST = 'post/FAILURE_POST_NEW_POST';
// export const SUCCESS_GET_POST = 'post/SUCCESS_GET_POST';
// export const FAILURE_GET_POST = 'post/FAILURE_GET_POST';

// State
const initialState: IPosts[] = [
  {
    id: 1,
    title: 'typescript',
    // author: 'shin',
    value: [
      'lorem ipsum',
      'lorem ipsum',
      'lorem ipsum',
      'lorem ipsum',
      'lorem ipsum',
    ],
    createdAt: new Date().toLocaleDateString(),
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: 2,
    title: 'react',
    // author: 'kim',
    value: ['lorem ipsum'],
    createdAt: new Date().toLocaleDateString(),
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    id: 3,
    title: 'redux',
    // author: 'seong',
    value: ['lorem ipsum'],
    createdAt: new Date().toLocaleDateString(),
    tags: ['tag1', 'tag2', 'tag3'],
  },
];

const generateId = function(state: IPosts[]): number {
  return state.length ? Math.max(...state.map(post => post.id)) + 1 : 1;
};

// Action
export const addNewPost = (post: IPost) => {
  return {
    type: REQUEST_NEW_POST,
    payload: post,
  };
};

export const getPosts = (id: number) => {
  return {
    type: REQUEST_GET_POST,
    id,
  };
};

export const postReducer = function(
  state: IPosts[] = initialState,
  action: IPostActions,
) {
  switch (action.type) {
    case REQUEST_NEW_POST:
      const newPost: IPosts = {
        id: generateId(state),
        ...action.payload,
      };
      const newState = [newPost, ...state];
      console.log(newState);
      return newState;
    case REQUEST_GET_POST:
      return state;
    default:
      return state;
  }
};
