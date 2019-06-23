import * as React from 'react';

// state, handler
import { useEditor, useTags, useTitle } from './new-post.hooks';

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

interface Props {
  classes: {
    title: string;
    button: string;
  };
  handleRequestNewPost: (title: string, value: string, tags: string[]) => void;
}

// Metarial UI Component style
const styles = createStyles({
  title: {
    display: 'block',
    flexWrap: 'wrap',
    width: '100%',
    fontSize: '24px',
    margin: '20px 0',
    padding: '5px 10px',

    '@media (max-width: 1023px)': {
      padding: '0 10px',
      '&::after': {
        borderBottom: `1px solid ${primaryColor}`,
      },
    },
  },
  button: {
    display: 'inline-block',
    backgroundColor: primaryColor,
    fontSize: '16px',
    color: '#fff',
    width: '100%',
    marginTop: '10px',
    '&:hover': {
      backgroundColor: primaryColor,
    },
    '@media (max-width: 1023px)': {
      width: '100%',
    },
  },
});

const NewPostView: React.FC<Props> = function(props) {
  // Loading state, effect
  const editor: tuiEditor.Editor | null = useEditor();
  const [title, handleTitle] = useTitle();
  const [tags, handleTags, removeTags] = useTags();

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
      <section className={style.editSection} id="editSection" />
      <InputTages tags={tags} handleTags={handleTags} removeTags={removeTags} />
      <Button
        onClick={e =>
          props.handleRequestNewPost(
            title,
            editor ? editor.getValue() : '',
            tags,
          )
        }
        className={props.classes.button}
      >
        전송
      </Button>
    </main>
  );
};

export default withStyles(styles)(NewPostView);
