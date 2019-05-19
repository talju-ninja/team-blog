import * as React from 'react';
import NewPostView from '../../components/NewPostView';

function handleRequestNewPost(value: string): void {
  if (!value) {
    alert('포스트를 입력해주세요.');
  }
  const text: string[] = value.split('\n');
  console.log(text);
}

export default function NewPost() {
  return <NewPostView data-onRequestNewPost={handleRequestNewPost} />;
}
