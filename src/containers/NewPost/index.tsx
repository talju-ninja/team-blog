import * as React from 'react';
import NewPostView from '../../components/NewPostView';

function handleRequestNewPost(title: string, value: any, tags: string[]): void {
  console.log(title, value, tags);
}

export default function NewPost() {
  return <NewPostView handleRequestNewPost={handleRequestNewPost} />;
}
