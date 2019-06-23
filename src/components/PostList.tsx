import * as React from 'react';
import PostItem from './PostItem';
import Layout from '../layout/Layout';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/icons/Create';
import { withStyles } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Post } from './../modules/post';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '20px 20px 0 20px',
  },
  fab: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: '50%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 60,
    padding: '0 30px',
  },
};

interface Props extends WithStyles<string> {
  classes: {
    root: string;
    fab: string;
  };
  posts: Post[];
}

const PostList = ({ classes, posts }: Props) => {
  return (
    <Layout>
      <>
        <div className={classes.root}>
          <Link to="/new-post">
            <Fab aria-label="Edit" className={classes.fab}>
              <Icon />
            </Fab>
          </Link>
        </div>
        {posts.map((post: Post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </>
    </Layout>
  );
};

export default withStyles(styles)(PostList);
