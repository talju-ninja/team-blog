import { fakeData, IArticle } from '../api';
import { StoreState } from '.';
import { Post } from './post';

const FETCH_SEARCH_LIST = 'team-blog/search/request';

export interface IsearchListAction {
  type: string;
  keyword: string;
  posts: Post[];
}

export const fetchSearchList = (keyword: string, posts: Post[]) => ({
  type: FETCH_SEARCH_LIST,
  keyword,
  posts,
});

// reducer
const search = (state: Post[] = [], action: IsearchListAction) => {
  switch (action.type) {
    case FETCH_SEARCH_LIST:
      return action.posts.filter(data => data.tags.includes(action.keyword));
    default:
      return state;
  }
};

export default search;

export function getSearchResult(state: StoreState): Post[] {
  return state.search;
}
