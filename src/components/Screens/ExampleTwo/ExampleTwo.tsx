import { useEffect } from "react";
import { Content } from "../../../vite-env";

type ExampleTwoProps = {
  content: Content;
  selectionCallback: (validation: boolean, selection: unknown) => void;
};

export const ExampleTwo = ({ content, selectionCallback }: ExampleTwoProps) => {
  useEffect(() => {
    selectionCallback(true, "selectionType");
  }, []);

  return (
    <div className="example-container">
      <h1 className="example-heading">{content.headingText}</h1>
    </div>
  );
};
