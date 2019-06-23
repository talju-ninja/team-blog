import { combineReducers } from 'redux';
import postReducer, { PostState } from './post';

export interface StoreState {
  post: PostState;
}

export default combineReducers<StoreState>({
  post: postReducer,
});
