import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'react-router-dom';
import { WithStyles } from '@material-ui/core';
import { Post } from './../modules/post';

const styles = {
  card: {
    margin: '50px 0',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
};

interface Props extends WithStyles<string> {
  classes: {
    card: string;
    link: string;
  };
  post: Post;
}

const PostItem: React.FC<Props> = props => {
  const { classes, post } = props;

  return (
    <Link to={`/post/${post.id}`} className={classes.link}>
      <Card className={classes.card}>
        <CardHeader title={post.title} subheader={post.createAt} />
        <CardContent>
          <Typography component="p" noWrap>
            {post.value}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(PostItem);
