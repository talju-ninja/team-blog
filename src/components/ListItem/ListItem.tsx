import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/styles';
import { WithStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import { IArticle } from '../../api';

const styles = () =>
  createStyles({
    li: {
      padding: '2% 3%',
      border: '1px solid #ccc',
      marginBottom: '15px',
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

interface Props extends WithStyles<string> {
  data: IArticle;
}

const ListItem: React.SFC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { classes, data } = props;
  return (
    <>
      <CssBaseline />
      <li className={classes.li}>
        <dl className={classes.dl}>
          <dt className={classes.dt}>{data.title}</dt>
          <dd className={classes.dd}>{data.content}</dd>
          <dd className={classes.dd}>{data.createdAt}</dd>
        </dl>
      </li>
    </>
  );
};

export default withStyles(styles)(ListItem);
