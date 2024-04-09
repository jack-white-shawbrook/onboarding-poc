import { Content } from "../../../vite-env";

type ExampleThreeProps = {
  content: Content;
};

export const ExampleThree = ({ content }: ExampleThreeProps) => {
  return (
    <div className="example-container">
      <h1 className="example-heading">{content.headingText}</h1>
    </div>
  );
};
