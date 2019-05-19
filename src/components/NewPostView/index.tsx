import * as React from 'react';
import Editor from 'tui-editor';

// Metarial UI
import { withStyles, createStyles } from '@material-ui/core/styles';
import InputTages from './InputTags';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

// Tui Editor load
import 'codemirror/lib/codemirror.css'; // codemirror
import 'tui-editor/dist/tui-editor.css'; // editor ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor content
import 'highlight.js/styles/github.css'; // code block highlight

// Style load
import * as style from './style.scss';
import { primaryColor } from '../index';

// Metarial UI Component style
const styles = createStyles({
  title: {
    display: 'block',
    flexWrap: 'wrap',
    width: '500px',
    margin: '20px auto',
    fontSize: '18px',

    '@media (max-width: 414px)': {
      width: '100%',
      padding: '0 10px',
      '&::after': {
        borderBottom: `1px solid ${primaryColor}`,
      },
    },
  },
  button: {
    '@media (max-width: 414px)': {
      marginTop: '10px',
      backgroundColor: primaryColor,
      color: '#fff',
      width: '100%',
      '&:hover': {
        backgroundColor: primaryColor,
      },
    },
  },
});

// Component props
interface Props {
  classes: {
    title: string;
    button: string;
  };
  'data-onRequestNewPost': (value: string) => void;
}

const { useState, useEffect } = React;

// Editor intialize
function useEditor(): tuiEditor.Editor | null {
  const [editor, setEditor] = useState<tuiEditor.Editor | null>(null);
  useEffect(() => {
    if (editor === null) {
      setEditor(
        new Editor({
          el: document.querySelector('#editSection') as Element,
          initialEditType: 'markdown',
          previewStyle: window.innerWidth <= 414 ? 'tab' : 'vertical',
          height: (window.innerWidth * 0.75).toString() + 'px',
        }),
      );
    }
  }, [editor]);
  return editor;
}

type HandleTitle = (e: React.ChangeEvent<HTMLInputElement>) => void;

function useTitle() {
  const [title, setTitle] = useState<string>('');
  useEffect(() => {}, [title]);
  const handleTitle: HandleTitle = e => {
    const value: string = e.target.value;
    setTitle(value);
    console.log(title);
  };
  return [title, handleTitle] as [string, HandleTitle];
}

const NewPostView: React.FC<Props> = function(props) {
  // Loading state, effect
  const editor: tuiEditor.Editor | null = useEditor();
  const [title, handleTitle] = useTitle();

  // return JSX Element
  return (
    <main className={style.main}>
      <h2 className={style.hidden}>새로운 포스트 작성</h2>
      <Input
        placeholder="Title"
        className={props.classes.title}
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTitle(e)}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <section id="editSection" />
      <InputTages />
      <Button
        onClick={e =>
          props['data-onRequestNewPost'](editor ? editor.getValue() : '')
        }
        className={props.classes.button}
      >
        전송
      </Button>
    </main>
  );
};

export default withStyles(styles)(NewPostView);
