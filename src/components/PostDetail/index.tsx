import * as React from 'react';
import Viewer from 'tui-editor/dist/tui-editor-Viewer';
import * as style from './style.scss';
import Layout from '../../layout/Layout';

const { useState, useEffect } = React;

interface IProp {
  content: string[];
}

function usePost(content: string[]) {
  const [viewer, setViewer] = useState<Viewer | null>(null);
  useEffect(() => {
    if (!viewer && content[0]) {
      setViewer(
        new Viewer({
          el: document.querySelector('#viewerSection') as Element,
          initialValue: content.join('\n'),
        }),
      );
    }
  });
  return [viewer];
}

export default function index(props: IProp) {
  const [viewer] = usePost(props.content);
  return (
    <Layout>
      <main className={style.main}>
        <div className={style.viewerSection} id="viewerSection" />
      </main>
    </Layout>
  );
}
