import * as React from 'react';
import NewPostView from '../../components/NewPostView';
import { connect } from 'react-redux';
import { createPost } from '../../modules/post';

interface IProps {
  createPost: Function;
}

function NewPost(props: IProps) {
  function handleRequestNewPost(
    title: string,
    value: string,
    tags: string[],
  ): void {
    // TODO: id 어떻게 할지
    const newPost = {
      title,
      value: value.split('\n'),
      tags,
      createAt: new Date().toLocaleDateString(),
    };
    console.log(newPost);
    props.createPost(newPost);
  }
  return <NewPostView handleRequestNewPost={handleRequestNewPost} />;
}

export default connect(
  null,
  { createPost },
)(NewPost);
