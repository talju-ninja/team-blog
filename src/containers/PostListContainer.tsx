import * as React from 'react';
import { connect } from 'react-redux';
import { StoreState } from './../modules/index';
import { Post } from './../modules/post';
import PostList from '../components/PostList';

interface Props {
  posts: Post[];
}

class PostListContainer extends React.Component<Props> {
  render() {
    return <PostList posts={this.props.posts} />;
  }
}

const mapStateToProps = (state: StoreState) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps)(PostListContainer);
