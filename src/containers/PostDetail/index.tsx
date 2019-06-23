import * as React from 'react';
import PostDetailView from '../../components/PostDetail';
import { connect } from 'react-redux';
import { Post } from '../../modules/post';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../../modules/index';

interface IProps extends RouteComponentProps<{ id: string }> {
  content?: Post;
}
interface IState {
  content: Post;
}

const fakeDataForStyling = {
  id: 0,
  value: ['## 404 Not Found', '주소를 확인해주세요 :)'],
  tags: ['404', 'Not', 'Found'],
  title: '검색된 데이터가 없습니다.',
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
    this.setState({
      content: this.props.content || fakeDataForStyling,
    });
  }
  render() {
    return <PostDetailView content={this.state.content} />;
  }
}

const mapStateToProps = (state: StoreState, props: IProps) => {
  return {
    content: state.post.posts.find(post => post.id === +props.match.params.id),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {},
  )(PostDetail),
);
