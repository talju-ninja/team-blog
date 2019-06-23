import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    margin: '50px 0',
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
};

interface Props {
  classes: {
    card: string;
    link: string;
  };
}

const PostItem: React.FC<Props> = props => {
  const { classes } = props;

  return (
    <Link to="/abc" className={classes.link}>
      <Card className={classes.card}>
        <CardHeader
          title="블로그 제목"
          subheader={new Date().toLocaleTimeString()}
        />
        <CardContent>
          <Typography component="p" noWrap>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like. This impressive paella is a perfect party
            dish and a fun meal to cook together with your guests. Add 1 cup of
            frozen peas along with the mussels, if you like. This impressive
            paella is a perfect party dish and a fun meal to cook together with
            your guests. Add 1 cup of frozen peas along with the mussels, if you
            like. This impressive paella is a perfect party dish and a fun meal
            to cook together with your guests. Add 1 cup of frozen peas along
            with the mussels, if you like. This impressive paella is a perfect
            party dish and a fun meal to cook together with your guests. Add 1
            cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default withStyles(styles)(PostItem);
