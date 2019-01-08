import * as React from "react";
import { hot } from "react-hot-loader";
import { ExampleComponent } from "./ExampleComponent";

export interface AppProps {
  name: string;
}

class AppInternal extends React.PureComponent<AppProps, {}> {
  render() {
    return <ExampleComponent name={this.props.name} />;
  }
}

export const App: React.ComponentClass<AppProps> = hot(module)(AppInternal);
