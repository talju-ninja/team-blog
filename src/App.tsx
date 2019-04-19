import * as React from "react";
import * as styles from "./App.scss";

interface Props {}

interface State {}

class App extends React.Component<Props, State> {
    render() {
        console.log(styles);
        return <div className={styles.App}>Hello world</div>;
    }
}

export default App;
