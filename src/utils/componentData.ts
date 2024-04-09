import { Component } from "../vite-env";

export const components: Component[] = [
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
    uri: "step-one",
    nextUri: "step-two",
    showBackButton: false,
    completion: 0,
  },

  {
    id: "2",
    type: "componentExampleTwo",
    content: {
      headingText: "Information",
      fields: [],
    },
    uri: "step-two",
    nextUri: "step-three",
    showBackButton: true,
    completion: 25,
  },
  {
    id: "3",
    type: "componentExampleThree",
    content: {
      headingText: "Getting Started",
      fields: [],
    },
    uri: "step-three",
    nextUri: "step-undefined",
    showBackButton: true,
    completion: 50,
  },
];
