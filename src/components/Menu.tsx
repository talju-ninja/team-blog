import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BookIcon from '@material-ui/icons/Book';
import FaceIcon from '@material-ui/icons/Face';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Link } from 'react-router-dom';

const styles = (theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: 250,
  },
  link: {
    textDecoration: 'none',
  },
});

interface Props {
  isDrawerOpen: boolean;
  toggleDrawer: Function;
  classes: Classes;
}

interface Classes {
  root: string;
  list: string;
  link: string;
}

const sideList = (classes: Classes) => (
  <div className={classes.list}>
    <List
      component="nav"
      subheader={
        <ListSubheader component="div">FrontEnd developer blog</ListSubheader>
      }
      className={classes.root}
    >
      <Link to="/" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="블로그" />
        </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary="닌자 소개" />
      </ListItem>
    </List>
    <Divider />
  </div>
);

const Menu = (props: Props) => {
  const { isDrawerOpen, toggleDrawer } = props;
  const toggle = (flag: boolean) => () => toggleDrawer(flag);
  return (
    <div>
      <Drawer open={isDrawerOpen} onClose={toggle(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggle(false)}
          onKeyDown={toggle(false)}
        >
          {sideList(props.classes)}
        </div>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(Menu);
