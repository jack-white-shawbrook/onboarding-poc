/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />
type Content = {
  headingText: string;
  fields?: Array<any>;
};

export type Component = {
  id: string;
  type: string;
  content: Content;
  uri: string;
  nextUri: string;
  showBackButton: boolean;
  completion: number;
};
