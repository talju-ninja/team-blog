import * as React from 'react';
import PostDetailView from '../../components/PostDetail';
import { connect } from 'react-redux';
import { Post } from '../../modules/post';
import { withRouter } from 'react-router-dom';
import { StoreState } from '../../modules/index';

interface IProps {
  content: Post;
  match: {
    params: {
      id: string;
    };
  };
}
interface IState {
  content: Post;
}

const fakeDataForStyling = {
  id: 0,
  value: ['안녕하세요', '저는 바보입니다.', '반갑습니다.'],
  tags: ['react', 'angular', 'vue'],
  title: '자기소개를 하겠습니다.',
  createAt: new Date().toLocaleDateString(),
};

class PostDetail extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      content: {
        id: 0,
        title: '',
        tags: [],
        value: [''],
        createAt: '',
      },
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({
      content: this.props.content || fakeDataForStyling,
    });
  }
  render() {
    return <PostDetailView content={this.state.content} />;
  }
}

const mapStateToProps = (state: StoreState, props: IProps) => ({
  content: state.post.posts.find(post => post.id === +props.match.params.id),
});

export default withRouter(
  connect(
    mapStateToProps,
    {},
  )(PostDetail),
);
