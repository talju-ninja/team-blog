import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
  '@media (max-width: 414px)': {
    readableHidden: {
      width: '1px',
      height: '1px',
      margin: '-1px',
      clip: 'rect(0,0,0,0)',
    },
    teamImage: {
      width: '100%',
    },
    teamIntroduce: {
      textAlign: 'center',
      padding: '10px',
      margin: '10px 10px 0 10px',
    },
    memberList: {
      width: '100%',
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      margin: '15px 0',
    },
    avatar: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      margin: '10px 0',
    },
    wrapper: {
      width: '100%',
      height: 'auto',
      padding: '0 10px',
      margin: '20px 0 0 0',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    projectList: {
      margin: '15px 0',
    },
    projectItem: {
      padding: '15px 10px',
      margin: '0 0 15px 0',
      fontSize: '1rem',
    },
  },
};

interface Props {
  classes: any;
}

const AboutTeam: React.SFC<Props> = (props: React.PropsWithChildren<Props>) => {
  const { classes } = props;

  return (
    <section>
      <CssBaseline />
      <h2 className={classes.readableHidden}>탈주닌자 팀 소개</h2>
      <div>
        <img
          className={classes.teamImage}
          src="http://archeage.xlgames.com/board/attachments/8a948b81599022990159934faa31000a"
          alt="아카츠키"
        />
      </div>
      <Paper className={classes.teamIntroduce}>
        여러분 이타치가 왜 강한지 아십니까? <br />
        탈주닌자이기 때문입니다!.... <br />
        하지만 저는 강하지 않습니다.... <br />
        그러기에 저와 함께 사이드 프로젝트로 강해지실 분을 모집합니다!
      </Paper>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>팀원</h3>
        <ul className={classes.memberList}>
          <li>
            <img
              alt="성중원"
              className={classes.avatar}
              src="http://mblogthumb4.phinf.naver.net/20130504_79/juble93_1367633853070eIAcN_PNG/3.png?type=w2"
            />
          </li>
          <li>
            <img
              alt="이강산"
              className={classes.avatar}
              src="http://mblogthumb4.phinf.naver.net/20130504_79/juble93_1367633853070eIAcN_PNG/3.png?type=w2"
            />
          </li>
          <li>
            <img
              alt="김지원"
              className={classes.avatar}
              src="http://mblogthumb4.phinf.naver.net/20130504_79/juble93_1367633853070eIAcN_PNG/3.png?type=w2"
            />
          </li>
          <li>
            <img
              alt="신창선"
              className={classes.avatar}
              src="http://mblogthumb4.phinf.naver.net/20130504_79/juble93_1367633853070eIAcN_PNG/3.png?type=w2"
            />
          </li>
        </ul>
      </div>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>프로젝트</h3>
        <ul className={classes.projectList}>
          <li>
            <Paper className={classes.projectItem}>프로젝트 1</Paper>
            <Paper className={classes.projectItem}>프로젝트 2</Paper>
            <Paper className={classes.projectItem}>프로젝트 3</Paper>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default withStyles(styles)(AboutTeam);
