import * as React from 'react';
import NewPostView from '../../components/NewPostView';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../modules/post';
import { StoreState } from '../../modules/index';

interface IProps extends RouteComponentProps {
  id?: number;
  createPost: Function;
}

class NewPost extends React.Component<IProps> {
  state = {
    id: null,
  };

  componentDidMount() {
    this.setState({
      id: this.props.id,
    });
  }

  componentWillReceiveProps(nextProps: IProps) {
    this.props.history.replace('/post/' + nextProps.id);
  }

  handleRequestNewPost = (title: string, value: string, tags: string[]) => {
    const newPost = {
      title,
      value: value.split('\n'),
      tags,
      createAt: new Date().toLocaleDateString(),
    };
    this.props.createPost(newPost);
  };

  render() {
    return <NewPostView handleRequestNewPost={this.handleRequestNewPost} />;
  }
}

const mapStateToProps = (state: StoreState) => ({
  id: state.post.posts.length
    ? state.post.posts[state.post.posts.length - 1].id
    : 0,
});

export default withRouter(
  connect(
    mapStateToProps,
    { createPost },
  )(NewPost),
);
