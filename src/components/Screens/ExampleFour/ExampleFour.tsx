import { useEffect } from "react";
import { Component } from "../../../vite-env";

type ExampleFourProps = {
  component: Component;
  selectionCallback: (validation: boolean, selection: string) => void;
};

export const ExampleFour = ({
  component,
  selectionCallback,
}: ExampleFourProps) => {
  useEffect(() => {
    selectionCallback(true, "selectionType");
  }, []);

  return (
    <div className="example-container">
      <h1 className="example-heading">{component.content.headingText}</h1>
    </div>
  );
};
