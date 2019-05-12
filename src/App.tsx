import * as React from 'react';
import * as styles from './App.scss';
import { Switch, Route } from 'react-router-dom';
import Test from './components/Test';

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route path="/" component={Test} />
      </Switch>
    );
  }
}

export default App;
