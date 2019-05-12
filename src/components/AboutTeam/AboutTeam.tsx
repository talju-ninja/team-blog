import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

interface Props {}

const useStyles = makeStyles({
  mobileTeamImage: {
    width: '100%',
  },
  mobileParagraph: {
    width: '100%',
    textAlign: 'center',
  },
  mobileMemberList: {
    width: '100%',
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
  },
  mobileAvatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
});

const AboutTeam: React.SFC<Props> = props => {
  const mobile = useMediaQuery('(max-width: 414px)');
  const classes = useStyles();

  return (
    <section>
      <CssBaseline />
      <div>
        <img
          className={mobile ? classes.mobileTeamImage : undefined}
          src="http://archeage.xlgames.com/board/attachments/8a948b81599022990159934faa31000a"
          alt="아카츠키"
        />
      </div>
      <Paper className={mobile ? classes.mobileParagraph : undefined}>
        여러분 이타치가 왜 강한지 아십니까? <br />
        탈주닌자이기 때문입니다!.... <br />
        하지만 저는 강하지 않습니다.... <br />
        그러기에 저와 함께 사이드 프로젝트로 강해지실 분을 모집합니다!
      </Paper>
      <div>
        <span>팀원</span>
        <ul className={mobile ? classes.mobileMemberList : undefined}>
          <li>
            <img
              alt="성중원"
              className={classes.mobileAvatar}
              src="http://mblogthumb4.phinf.naver.net/20130504_79/juble93_1367633853070eIAcN_PNG/3.png?type=w2"
            />
          </li>
          <li>
            <img
              alt="이강산"
              className={classes.mobileAvatar}
              src="http://mblogthumb4.phinf.naver.net/20130504_79/juble93_1367633853070eIAcN_PNG/3.png?type=w2"
            />
          </li>
          <li>
            <img
              alt="김지원"
              className={classes.mobileAvatar}
              src="http://mblogthumb4.phinf.naver.net/20130504_79/juble93_1367633853070eIAcN_PNG/3.png?type=w2"
            />
          </li>
          <li>
            <img
              alt="신창선"
              className={classes.mobileAvatar}
              src="http://mblogthumb4.phinf.naver.net/20130504_79/juble93_1367633853070eIAcN_PNG/3.png?type=w2"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutTeam;
