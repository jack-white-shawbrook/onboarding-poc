import { Component } from "../vite-env";

export const getCurrentComponent = (
  components: Component[],
  stepId: string
) => {
  const componentNotFound = {
    id: "1",
    type: "componentExampleNotFound",
    content: {
      headingText: "Page Not Found",
      fields: [],
    },
    uri: "undefined",
    nextUri: "undefined",
    showBackButton: false,
    completion: 0,
  };

  const foundComponent = components.find(
    (component) => component.uri === stepId
  );

  return foundComponent !== undefined ? foundComponent : componentNotFound;
};
