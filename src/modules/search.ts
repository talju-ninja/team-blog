import { fakeData, IArticle } from '../api';
import { StoreState } from '.';

const FETCH_SEARCH_LIST = 'team-blog/search/request';

export interface IsearchListAction {
  type: string;
  keyword: string;
}

export const fetchSearchList = (keyword: string) => ({
  type: FETCH_SEARCH_LIST,
  keyword,
});

// reducer
const search = (state: IArticle[] = [], action: IsearchListAction) => {
  switch (action.type) {
    case FETCH_SEARCH_LIST:
      return fakeData.filter(data => data.tags.includes(action.keyword));
    default:
      return state;
  }
};

export default search;

export function getSearchResult(state: StoreState): IArticle[] {
  return state.search;
}
