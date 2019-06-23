import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AboutTeamPage from './pages/AboutTeamPage';
import SearchContainer from './containers/SearchContainer';
import PostListContainer from './containers/PostListContainer';

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about/team" component={AboutTeamPage} />
          <Route path="/search" component={SearchContainer} />
          <Route path="/" component={PostListContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
