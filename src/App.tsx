import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AboutTeamPage from './pages/AboutTeamPage';

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Router>
        <Route path="/about/team" component={AboutTeamPage} />
      </Router>
    );
  }
}

export default App;
