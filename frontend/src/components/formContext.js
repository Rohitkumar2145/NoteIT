import React from "react";

const form = React.createContext({
  isUpdate: false,
  toggle: () => {},
});

export default form;
