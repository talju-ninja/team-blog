import { combineReducers } from 'redux';
import postReducer, { PostState } from './post';
<<<<<<< HEAD
import { TodoState, todoReducer as todos } from './todos';
import search from './search';
import { IArticle } from '../api';

export interface StoreState {
  post: PostState;
  search: IArticle[];
}

export default combineReducers<StoreState>({
  post: postReducer,
  search,
});
