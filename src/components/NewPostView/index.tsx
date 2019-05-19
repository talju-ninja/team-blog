import * as React from 'react';
import Editor from 'tui-editor';
import InputTages from './InputTags';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// style load
import * as style from './style.scss';
import 'codemirror/lib/codemirror.css'; // codemirror
import 'tui-editor/dist/tui-editor.css'; // editor ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor content
import 'highlight.js/styles/github.css'; // code block highlight

const { useState, useEffect } = React;

const styles = createStyles({
  title: {
    display: 'block',
    flexWrap: 'wrap',
    width: '500px',
    margin: '20px auto',
    fontSize: '20px',
  },
  button: {
    backgroundColor: 'tomato',
    color: '#fff',
  },
  '@media (max-width: 414px)': {
    title: {
      width: '100%',
      padding: '0 10px',
      '&::after': {
        borderBottom: '1px solid tomato',
      },
    },
    button: {
      backgroundColor: 'tomato',
      color: '#fff',
    },
  },
});

interface Props {
  classes: {
    title: string;
    button: string;
  };
}

const NewPostView: React.FC<Props> = function(props) {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (loading) {
      new Editor({
        el: document.querySelector('#editSection') as Element,
        initialEditType: 'markdown',
        previewStyle: window.innerWidth <= 414 ? 'tab' : 'vertical',
        height: window.innerWidth * 0.75,
      });
    }
    setLoading(false);
  }, [loading]);

  return (
    <main className={style.main}>
      <h2 className={style.hidden}>새로운 포스트 작성</h2>
      <Input
        placeholder="Title"
        className={props.classes.title}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <section id="editSection" />
      <InputTages />
      <Button className={props.classes.button}>전송</Button>
    </main>
  );
};

export default withStyles(styles)(NewPostView);
