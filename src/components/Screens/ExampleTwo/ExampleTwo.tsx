import { useEffect } from "react";
import { Component } from "../../../vite-env";

type ExampleTwoProps = {
  component: Component;
  selectionCallback: (validation: boolean, selection: string) => void;
};

export const ExampleTwo = ({
  component,
  selectionCallback,
}: ExampleTwoProps) => {
  useEffect(() => {
    selectionCallback(true, component.subUri ? component.subUri : "");
  }, []);

  console.log("component: ", component);

  return (
    <div className="example-container">
      <h1 className="example-heading">{component.content.headingText}</h1>
    </div>
  );
};
