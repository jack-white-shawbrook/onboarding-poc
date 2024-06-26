import { useEffect } from "react";
import { Component } from "../../../vite-env";

type ExampleThreeProps = {
  component: Component;
  selectionCallback: (validation: boolean, selection: string) => void;
};

export const ExampleThree = ({
  component,
  selectionCallback,
}: ExampleThreeProps) => {
  useEffect(() => {
    selectionCallback(true, component.subUri ? component.subUri : "");
  }, []);

  return (
    <div className="example-container">
      <h1 className="example-heading">{component.content.headingText}</h1>
    </div>
  );
};
