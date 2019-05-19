import * as React from 'react';
import * as style from './style.scss';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = createStyles({
  tagInput: {},
  tag: {
    backgroundColor: '#6F93B7',
    color: '#fff',
  },
  '@media (max-width: 414px)': {
    tagInput: {
      width: '100%',
      margin: '20px 0 10px',
      fontSize: '14px',
      '&::after': {
        borderBottom: '1px solid tomato',
      },
    },
  },
});

interface Props {
  classes: {
    tagInput: string;
    tag: string;
  };
}

const tags: string[] = ['React', 'Front-end', 'UI'];

const InputTags: React.FC<Props> = props => {
  return (
    <section>
      <Input
        placeholder="Input tag"
        className={props.classes.tagInput}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <ul>
        {tags.map(tag => (
          <li key={tag} className={style.tagContainer}>
            <Chip className={props.classes.tag} label={`# ${tag}`} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default withStyles(styles)(InputTags);
