import * as React from 'react';
import Header from '../components/Header';
import { withStyles, createStyles } from '@material-ui/core/styles';

interface Props {
  children: JSX.Element | JSX.Element[];
  classes: {
    root: string;
  };
}

const styles = createStyles({
  root: {
    margin: '0 auto',
    width: '1024px',
    '@media (max-width: 415px)': {
      width: '100%',
    },
  },
});

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <div className={props.classes.root}>{props.children}</div>
    </div>
  );
};

export default withStyles(styles)(Layout);
