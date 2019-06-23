import { combineReducers } from 'redux';
import { TodoState, todoReducer as todos } from './todos';
import { postReducer as posts } from './post';
import { IPosts } from './post/post.interface';

export interface StoreState {
  todos: TodoState;
  posts: IPosts[];
}

export default combineReducers<StoreState>({
  todos,
  posts,
});
