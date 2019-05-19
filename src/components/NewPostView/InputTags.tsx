import * as React from 'react';

// Metarial UI
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import { withStyles, createStyles } from '@material-ui/core/styles';

// Style load
import * as style from './style.scss';
import { primaryColor, secondColor } from '../index';

// Metarial UI component style
const styles = createStyles({
  tagInput: {
    '@media (max-width: 414px)': {
      padding: '0 5px',
      width: '100%',
      margin: '20px 0 5px',
      fontSize: '14px',
      '&::after': {
        borderBottom: `1px solid ${primaryColor}`,
      },
    },
  },
  tag: {
    backgroundColor: secondColor,
    color: '#fff',
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
