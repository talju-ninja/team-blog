import { combineReducers } from 'redux';
import { TodoState, todoReducer as todos } from './todos';
import search from './search';
import { IArticle } from '../api';

export interface StoreState {
  todos: TodoState;
  search: IArticle[];
}

export default combineReducers<StoreState>({
  todos,
  search,
});
