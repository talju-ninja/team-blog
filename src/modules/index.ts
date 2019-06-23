import { combineReducers } from 'redux';
import postReducer, { PostState, Post } from './post';
import search from './search';

export interface StoreState {
  post: PostState;
  search: Post[];
}

export default combineReducers<StoreState>({
  post: postReducer,
  search,
});
