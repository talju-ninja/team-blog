import * as React from 'react';
import { withStyles, createStyles } from '@material-ui/styles';
import { WithStyles } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import ListItem from '../ListItem/ListItem';
import { Post } from '../../modules/post';
import Layout from '../../layout/Layout';

const styles = () =>
  createStyles({
    section: {
      width: '70%',
      '@media (max-width: 414px)': {
        width: '100%',
      },
      margin: '0 auto',
      padding: '0 5%',
    },
    fieldset: {
      border: 0,
    },
    legend: {
      position: 'absolute',
      width: 1,
      height: 1,
      margin: 1,
      overflow: 'hidden',
      clip: 'rect(0,0,0,0)',
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      margin: '0 auto 30px auto',
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
  });

interface Props extends WithStyles<string> {
  input: string;
  searchResult: Post[];
  handleInput: (e: React.SyntheticEvent) => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
}

const Search: React.SFC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { classes, input, handleInput, handleSubmit, searchResult } = props;
  return (
    <Layout>
      <section className={classes.section}>
        <form onSubmit={handleSubmit}>
          <fieldset className={classes.fieldset}>
            <legend className={classes.legend}>검색</legend>
            <Paper className={classes.root}>
              <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
              </IconButton>
              <InputBase
                className={classes.input}
                placeholder="검색"
                inputProps={{ 'aria-label': '검색' }}
                value={input}
                onInput={handleInput}
              />
              <Divider className={classes.divider} />
            </Paper>
          </fieldset>
        </form>
        <ul className={classes.ul}>
          {searchResult.map((item: Post) => (
            <ListItem key={item.id} data={item} />
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default withStyles(styles)(Search);
