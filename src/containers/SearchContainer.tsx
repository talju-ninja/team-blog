import * as React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search/Search';
import {
  fetchSearchList,
  getSearchResult,
  IsearchListAction,
} from '../modules/search';

import { IArticle } from '../api/index';
import { StoreState } from '../modules';

interface Props {
  result: IArticle[];
  fetchSearch: (keyword: string) => void;
}
interface State {
  input: string;
}

class SearchContainer extends React.Component<Props, State> {
  state: State = {
    input: '',
  };

  handleInput = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    this.setState({
      input: target.value,
    });
  };

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const { input } = this.state;
    const { fetchSearch } = this.props;
    fetchSearch(input);
  };

  render() {
    const { result } = this.props;
    return (
      <Search
        {...this.state}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        searchResult={result}
      />
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  result: getSearchResult(state),
});

const mapDispatchToProps = (dispatch: React.Dispatch<IsearchListAction>) => ({
  fetchSearch: (keyword: string) => {
    dispatch(fetchSearchList(keyword));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchContainer);
