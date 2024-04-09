import { Component } from "../vite-env";
import { componentNotFound } from "./componentData";

export const getCurrentComponent = (
  components: { [key: string]: Component[] },
  stepId: string,
  accountType?: string
) => {
  let matchedComponent = null;

  if (accountType) {
    matchedComponent = components[accountType].find(
      (component) => component.uri === stepId
    );
  } else {
    matchedComponent = components[stepId][0];
  }

  return matchedComponent !== undefined ? matchedComponent : componentNotFound;
};
