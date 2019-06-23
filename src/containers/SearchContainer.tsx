import * as React from 'react';

import Search from '../components/Search/Search';

interface Props {}
interface State {
  input: string;
}

export default class SearchContainer extends React.Component<Props, State> {
  state: State = {
    input: '',
  };

  handleInput = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    this.setState({
      input: target.value,
    });
  };

  render() {
    return <Search {...this.state} handleInput={this.handleInput} />;
  }
}
