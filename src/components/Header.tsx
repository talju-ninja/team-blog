import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { primaryColor } from '../assets';
import Menu from './Menu';
import { WithStyles } from '@material-ui/core';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

interface Props extends WithStyles<string>, RouteComponentProps {
  classes: {
    root: string;
    appBar: string;
    menuButton: string;
    grow: string;
    search: string;
    searchIcon: string;
    inputRoot: string;
    inputInput: string;
  };
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: primaryColor,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    grow: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '200px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 6,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 6,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  });

const Header = (props: Props) => {
  const { classes } = props;
  const [isDrawerOpen, toggleDrawer] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const { match } = props;
  const isMatch = match.path !== '/search';
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <ToolBar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Menu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <Typography variant="h6" color="inherit" noWrap>
            Talju-ninja
          </Typography>
          <div className={classes.grow} />
          {isMatch && (
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="태그 검색"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    const { history } = props;
                    history.push(`/search?query=${search}`);
                  }
                }}
              />
            </div>
          )}
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(withRouter(Header));
