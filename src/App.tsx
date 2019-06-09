import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AboutTeamPage from './pages/AboutTeamPage';
import SearchContainer from './containers/SearchContainer';
import Test from './components/Test';

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about/team" component={AboutTeamPage} />
          <Route path="/search" component={SearchContainer} />
          <Route path="/" component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default App;
