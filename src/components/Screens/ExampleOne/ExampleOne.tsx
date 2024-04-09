import { useEffect, useState } from "react";
import { Component } from "../../../vite-env";

type ExampleOneProps = {
  component: Component;
  selectionCallback: (validation: boolean, selection: string) => void;
};

export const ExampleOne = ({
  component,
  selectionCallback,
}: ExampleOneProps) => {
  const [selectionType, setSelectionType] = useState<"sole" | "joint" | null>(
    null
  );
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectionHandler = (type: "sole" | "joint", index: number) => {
    setSelectedIndex(index);
    setSelectionType(type);
  };

  useEffect(() => {
    if (selectionType !== null) {
      selectionCallback(true, selectionType);
    }
  }, [selectionType]);

  return (
    <div className="example-container">
      <h1 className="example-heading">{component.content.headingText}</h1>
      <div className="all-cards">
        {component.content.fields?.map((field, index) => (
          <div
            className={`card-container ${
              selectedIndex === index && "selected"
            }`}
            onClick={() => selectionHandler(field.type, index)}
            key={index}
          >
            <h2 className="card-heading">{field.heading}</h2>
            <p>{field.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
