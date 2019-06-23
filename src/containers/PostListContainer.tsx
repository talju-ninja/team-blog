import * as React from 'react';
import PostItem from '../components/PostItem';
import { connect } from 'react-redux';

class PostListContainer extends React.Component {
  render() {
    return <PostItem />;
  }
}

export default connect()(PostListContainer);
