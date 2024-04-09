import { useEffect } from "react";
import { Component } from "../../../vite-env";

type ExampleFiveProps = {
  component: Component;
  selectionCallback: (validation: boolean, selection: string) => void;
};

export const ExampleFive = ({
  component,
  selectionCallback,
}: ExampleFiveProps) => {
  useEffect(() => {
    selectionCallback(true, "selectionType");
  }, []);

  return (
    <div className="example-container">
      <h1 className="example-heading">{component.content.headingText}</h1>
    </div>
  );
};
