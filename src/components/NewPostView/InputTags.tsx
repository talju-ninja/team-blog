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
}

const { useState, useEffect } = React;

// tags 상태와 tags 추가, 제거하는 이벤트 핸들러를 반환하는 함수
// TODO: Chip 컴포넌트에 제거하는 이벤트 핸들러 달기, EventTarget interface에 value가 없다고 나오는 ts오류 잡기
function useTags() {
  const [tags, setTags] = useState<string[]>([]);
  useEffect(() => {}, [tags]);
  function handleTags(
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (e.keyCode === 13) {
      // TODO: e.target.value가 EventTarget 속성에 없다고 표기됨.
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  }
  return [tags, handleTags] as [
    string[],
    (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  ];
}

const InputTags: React.FC<Props> = props => {
  // tags 상태와 tags상태를 핸들링하는 함수
  // TODO: tags에 직접 접근할 수 없게 하기.
  const [tags, handleTags] = useTags();
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
