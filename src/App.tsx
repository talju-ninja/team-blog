import * as React from "react";
import * as styles from "./App.scss";

interface Props {}

interface State {
    input: string;
}

class App extends React.Component<Props, State> {
    state = {
        input: "test"
    };
    test = async () => {
        await setTimeout(() => this.setState({ input: "test2" }), 1000);
    };
    render() {
        const { input } = this.state;
        console.log(input);
        return (
            <div className={styles.App}>
                {input} <button onClick={this.test}>업</button>
            </div>
        );
    }
}

export default App;
