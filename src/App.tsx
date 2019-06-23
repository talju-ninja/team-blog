import * as React from 'react';

import { Switch, Route } from 'react-router-dom';
import NewPostPage from './pages/NewPostPage';
import PostDetailPage from './pages/PostDetailPage';
import AboutTeamPage from './pages/AboutTeamPage';
import SearchContainer from './containers/SearchContainer';
import PostListContainer from './containers/PostListContainer';

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route path="/new-post" component={NewPostPage} />
        <Route path="/post/:id" component={PostDetailPage} />
        <Route path="/about/team" component={AboutTeamPage} />
        <Route path="/search" component={SearchContainer} />
        <Route path="/" component={PostListContainer} />
      </Switch>
    );
  }
}

export default App;
