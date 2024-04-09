import { Component } from "../vite-env";

type AllComponents = {
  [key: string]: Component[];
};

export const components: AllComponents = {
  start: [
    {
      id: "1",
      type: "componentExampleOne",
      content: {
        headingText: "Account Type",
        fields: [
          {
            heading: "Sole Account",
            desc: "Open a Sole Account",
            type: "sole",
          },
          {
            heading: "Joint Account",
            desc: "Open a Joint Account",
            type: "joint",
          },
        ],
      },
      uri: "start",
      nextUri: "step-one",
      showBackButton: false,
      completion: 0,
    },
  ],
  sole: [
    {
      id: "2",
      type: "componentExampleTwo",
      content: {
        headingText: "Sole Step 1",
        fields: [],
      },
      uri: "step-one",
      nextUri: "step-two",
      subUri: "sole",
      showBackButton: true,
      completion: 25,
    },
    {
      id: "4",
      type: "componentExampleFour",
      content: {
        headingText: "Sole Step 2",
        fields: [],
      },
      uri: "step-two",
      nextUri: "step-three",
      subUri: "sole",
      showBackButton: true,
      completion: 50,
    },
  ],
  joint: [
    {
      id: "3",
      type: "componentExampleThree",
      content: {
        headingText: "Joint Step 1",
        fields: [],
      },
      uri: "step-one",
      nextUri: "step-two",
      subUri: "joint",
      showBackButton: true,
      completion: 30,
    },

    {
      id: "5",
      type: "componentExampleFive",
      content: {
        headingText: "Joint Step 2",
        fields: [],
      },
      uri: "step-two",
      nextUri: "step-three",
      subUri: "joint",
      showBackButton: true,
      completion: 60,
    },
  ],
};

export const componentNotFound: Component = {
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
