import * as React from "react";

export interface ExampleComponentProps {
  name: string;
}

export class ExampleComponent extends React.PureComponent<ExampleComponentProps, {}> {
  render() {
    return (
      <div className="myapp--example-component">
        <span className="name">
          Hello {this.props.name}
        </span>
      </div>
    );
  }
}
