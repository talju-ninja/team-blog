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
    fontSize: '16px',
    padding: '3px 5px',
    width: '100%',
    margin: '20px 0 5px',
    '@media (max-width: 1023px)': {
      padding: '0 5px',
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
  tags: string[];
  handleTags: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  removeTags: (index: number) => void;
}

const InputTags: React.FC<Props> = props => {
  // tags 상태와 tags상태를 핸들링하는 함수
  // TODO: tags에 직접 접근할 수 없게 하기.
  const { tags, handleTags, removeTags } = props;
  return (
    <section className={style.section}>
      <Input
        placeholder="Input tag"
        className={props.classes.tagInput}
        inputProps={{
          'aria-label': 'Description',
        }}
        onKeyDown={e => handleTags(e)}
      />
      <ul className={style.tagsContainer}>
        {tags.map((tag, index) => (
          <li
            onClick={e => removeTags(index)}
            key={index}
            className={style.tagContainer}
          >
            <Chip
              className={props.classes.tag}
              onClick={e => removeTags(index)}
              label={`# ${tag}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default withStyles(styles)(InputTags);
