import { Fragment } from "react";
import { ExampleOne } from "../Screens/ExampleOne/ExampleOne";
import { ExampleTwo } from "../Screens/ExampleTwo/ExampleTwo";
import { ExampleThree } from "../Screens/ExampleThree/ExampleThree";
import { ExampleNotFound } from "../Screens/ExampleNotFound/ExampleNotFound";

import { Component } from "../../vite-env";

const COMPONENT_MAP = {
  componentExampleOne: ExampleOne,
  componentExampleTwo: ExampleTwo,
  componentExampleThree: ExampleThree,
  componentExampleNotFound: ExampleNotFound,
};

type ComponentMapKey = keyof typeof COMPONENT_MAP;

type ComponentRendererProps = {
  component: Component;
  spacing?: { desktop: string; mobile: string };
  selectionCallback: (validation: boolean, selection: unknown) => void;
};

export const ComponentsRenderer = ({
  component,
  ...rest
}: ComponentRendererProps) => {
  const ComponentToRender = COMPONENT_MAP[component?.type as ComponentMapKey];

  if (ComponentToRender !== undefined) {
    return (
      <div className="components-renderer">
        <ComponentToRender {...rest} content={component.content} />
      </div>
    );
  }

  return (
    <Fragment key="components-renderer">
      <p>ComponentNotFound</p>
    </Fragment>
  );
};
