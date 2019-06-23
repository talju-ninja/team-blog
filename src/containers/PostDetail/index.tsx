import * as React from 'react';
import PostDetailView from '../../components/PostDetail';
import { connect } from 'react-redux';
import { getPosts } from '../../modules/post';
import { IPosts } from '../../modules/post/post.interface';
import { withRouter } from 'react-router-dom';

interface IProps {}

class PostDetail extends React.Component<IProps> {
  constructor(props) {
    super(props);
    this.state = {
      content: {
        id: 0,
        title: '',
        tags: [],
        value: [''],
        createdAt: '',
      },
    };
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({
      content: this.props.content,
    });
  }
  render() {
    return <PostDetailView content={this.state.content.value} />;
  }
}

const mapStateToProps = (state, props) => ({
  content: state.posts.find(post => post.id == props.match.params.id);
});

export default withRouter(
  connect(
    mapStateToProps,
    { getPosts },
  )(PostDetail),
);
