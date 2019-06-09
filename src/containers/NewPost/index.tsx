import * as React from 'react';
import NewPostView from '../../components/NewPostView';

function handleRequestNewPost(value: string): void {
  if (!value) {
    alert('포스트를 입력해주세요.');
  }
  console.log(value);
}

export default function NewPost() {
  return <NewPostView data-onRequestNewPost={handleRequestNewPost} />;
}
