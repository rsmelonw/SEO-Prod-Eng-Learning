import { createContext } from "react";

export const contextData = {
  data: [
    { id: 123, name: "Context person 1" },
    { id: 321, name: "Context person 2" },
    { id: 213, name: "Context person 3" },
    { id: 312, name: "Context person 5" },
    { id: 432, name: "Context person 6" },
    { id: 234, name: "Context person 7" },
    { id: 324, name: "Context person 8" },
  ]
};

export const NextContext = createContext();
