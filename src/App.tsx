import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostList from './components/PostList';

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route path="/" component={PostList} />
      </Switch>
    );
  }
}

export default App;
