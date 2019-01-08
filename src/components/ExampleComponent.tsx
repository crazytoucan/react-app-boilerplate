import * as React from "react";
import { Button, Intent, Popover, Position } from "@blueprintjs/core";

export interface ExampleComponentProps {
  name: string;
}

export class ExampleComponent extends React.PureComponent<
  ExampleComponentProps,
  {}
> {
  render() {
    const popover = (
      <div style={{ padding: "10px 15px" }}>Consider yourself surprised.</div>
    );

    return (
      <div className="myapp--example-component">
        Hello <span className="name">{this.props.name}</span>{" "}
        <Popover content={popover} position={Position.BOTTOM}>
          <Button small={true} intent={Intent.PRIMARY} text="Surprise Me" />
        </Popover>
      </div>
    );
  }
}
