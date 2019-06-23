import * as React from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import { withRouter, Redirect } from 'react-router-dom';

import Search from '../components/Search/Search';
import {
  fetchSearchList,
  getSearchResult,
  IsearchListAction,
} from '../modules/search';

import { StoreState } from '../modules';
import { Post } from '../modules/post';
import { Location } from 'history';

interface Props {
  location: Location;
  result: Post[];
  posts: Post[];
  fetchSearch: (keyword: string) => void;
}
interface State {
  input: string;
  isSubmit: boolean;
}

class SearchContainer extends React.Component<Props, State> {
  state: State = {
    input: '',
    isSubmit: false,
  };

  componentDidMount() {
    const {
      location: { search },
      fetchSearch,
      posts,
    } = this.props;
    console.log(search);
    if (search) {
      const query = qs.parse(search).query;
      fetchSearch(query, posts);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location: { search },
      fetchSearch,
      posts,
    } = this.props;
    if (
      prevProps.location.search !== this.props.location.search &&
      this.state.isSubmit
    ) {
      this.setState({
        isSubmit: false;
      })
      const query = qs.parse(search).query;
      fetchSearch(query, posts);
    }
  }
  handleInput = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    this.setState({
      input: target.value,
    });
  };

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    this.setState({
      isSubmit: true,
    });
    // const { input } = this.state;
    // const { fetchSearch, posts } = this.props;
    // fetchSearch(input, posts);
  };

  render() {
    const { result } = this.props;
    const { input, isSubmit } = this.state;
    return (
      <>
        {isSubmit && <Redirect to={`/search?query=${input}`} />}
        <Search
          {...this.state}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          searchResult={result}
        />
      </>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  result: getSearchResult(state),
  posts: state.post.posts,
});

const mapDispatchToProps = (dispatch: React.Dispatch<IsearchListAction>) => ({
  fetchSearch: (keyword: string, posts: Post[]) => {
    dispatch(fetchSearchList(keyword, posts));
  },
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SearchContainer),
);
