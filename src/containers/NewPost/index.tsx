import * as React from 'react';
import NewPostView from '../../components/NewPostView';
import { connect } from 'react-redux';
import { addNewPost } from '../../modules/post';

interface IProps {
  addNewPost: Function;
}

function NewPost(props: IProps) {
  function handleRequestNewPost(
    title: string,
    value: string,
    tags: string[],
  ): void {
    const newPost = {
      title,
      value: value.split('\n'),
      tags,
      createdAt: new Date().toLocaleDateString(),
    };
    props.addNewPost(newPost);
  }
  return <NewPostView handleRequestNewPost={handleRequestNewPost} />;
}

export default connect(
  null,
  { addNewPost },
)(NewPost);
