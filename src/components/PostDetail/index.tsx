import * as React from 'react';
import Viewer from 'tui-editor/dist/tui-editor-Viewer';
import * as style from './style.scss';
import Layout from '../../layout/Layout';
import { IPosts } from '../../modules/post/post.interface';

const { useState, useEffect } = React;

interface IProp {
  content: IPosts;
}

function usePost(content: IPosts) {
  const [viewer, setViewer] = useState<Viewer | null>(null);
  useEffect(() => {
    if (!viewer && content.value[0]) {
      setViewer(
        new Viewer({
          el: document.querySelector('#viewerSection') as Element,
          initialValue: content.value.join('\n'),
        }),
      );
    }
  });
  return;
}

export default function index(props: IProp) {
  usePost(props.content);
  return (
    <Layout>
      <main className={style.main}>
        <h2>{props.content.title}</h2>
        <p>{props.content.createdAt}</p>
        <div className={style.viewerSection} id="viewerSection" />
        <p>
          {props.content.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </p>
      </main>
    </Layout>
  );
}
