import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/styles';
import { WithStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import defaultImage from '../../../assets/images/default-image.png';

const styles = () =>
  createStyles({
    li: {
      padding: '2% 3%',
      border: '1px solid red',
    },
    dl: {
      width: '100%',
      '@media (max-width: 414px)': {
        width: '100%',
      },
      margin: '0 auto',
    },
    dt: {
      fontSize: 30,
      '@media (max-width: 414px)': {
        fontSize: 24,
      },
      fontWeight: 600,
    },
    dd: {
      margin: 0,
      fontSize: 18,
      '@media (max-width: 414px)': {
        fontSize: 14,
      },
    },
  });

interface Props extends WithStyles<string> {}

const ListItem: React.SFC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { classes } = props;
  return (
    <>
      <CssBaseline />
      <li className={classes.li}>
        <dl className={classes.dl}>
          <dt className={classes.dt}>여기에 글 제목이 와야됩니다.</dt>
          <dd className={classes.dd}>
            여기에 글 내용이 와야됩니다. 블라블라블라...
          </dd>
          <dd className={classes.dd}>2019.06.09</dd>
          <dd className={classes.dd}>나루토</dd>
        </dl>
      </li>
    </>
  );
};

export default withStyles(styles)(ListItem);
