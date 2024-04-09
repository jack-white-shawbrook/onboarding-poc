import { Fragment } from "react";
import { ExampleOne } from "../Screens/ExampleOne/ExampleOne";
import { ExampleTwo } from "../Screens/ExampleTwo/ExampleTwo";
import { ExampleThree } from "../Screens/ExampleThree/ExampleThree";
import { ExampleNotFound } from "../Screens/ExampleNotFound/ExampleNotFound";
import { ExampleFour } from "../Screens/ExampleFour/ExampleFour";
import { ExampleFive } from "../Screens/ExampleFive/ExampleFive";

import { Component } from "../../vite-env";

const COMPONENT_MAP = {
  componentExampleOne: ExampleOne,
  componentExampleTwo: ExampleTwo,
  componentExampleThree: ExampleThree,
  componentExampleFour: ExampleFour,
  componentExampleFive: ExampleFive,
  componentExampleNotFound: ExampleNotFound,
};

type ComponentMapKey = keyof typeof COMPONENT_MAP;

type ComponentRendererProps = {
  component: Component;
  selectionCallback: (validation: boolean, selection: string) => void;
};

export const ComponentsRenderer = ({
  component,
  selectionCallback,
}: ComponentRendererProps) => {
  const ComponentToRender = COMPONENT_MAP[component?.type as ComponentMapKey];

  if (ComponentToRender !== undefined) {
    return (
      <div className="components-renderer">
        <ComponentToRender
          selectionCallback={selectionCallback}
          component={component}
        />
      </div>
    );
  }

  return (
    <Fragment key="components-renderer">
      <p>ComponentNotFound</p>
    </Fragment>
  );
};
