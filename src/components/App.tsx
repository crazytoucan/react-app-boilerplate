import * as React from "react";
import { ExampleComponent } from "./ExampleComponent";

export interface AppProps {
  name: string;
}

export class App extends React.PureComponent<AppProps, {}> {
  render() {
    return (
      <ExampleComponent
        name={this.props.name}
      />
    );
  }
}
