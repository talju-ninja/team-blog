import * as React from 'react';
import Viewer from 'tui-editor/dist/tui-editor-Viewer';
import * as style from './style.scss';
import Layout from '../../layout/Layout';
import { Post } from '../../modules/post';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { secondColor } from '../index';
import Chip from '@material-ui/core/Chip';

const { useState, useEffect } = React;

const styles = createStyles({
  tag: {
    backgroundColor: secondColor,
    color: '#fff',
  },
});

interface IProp {
  content: Post;
  classes: {
    tag: string;
  };
}

function usePost(content: Post) {
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

function PostDetailView(props: IProp) {
  usePost(props.content);
  return (
    <Layout>
      <main className={style.main}>
        <h2 className={style.title}>{props.content.title}</h2>
        <p className={style.createAt}>{props.content.createAt}</p>
        <div className={style.viewerSection} id="viewerSection" />
        <p>
          {props.content.tags.map((tag: string, index: number) => (
            <li className={style.tagContainer}>
              <Chip
                key={index}
                className={props.classes.tag}
                label={`# ${tag}`}
              >
                {tag}
              </Chip>
            </li>
          ))}
        </p>
      </main>
    </Layout>
  );
}

export default withStyles(styles)(PostDetailView);
