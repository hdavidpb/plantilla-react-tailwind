import React from "react";

import { Button } from "@material-tailwind/react";

const SCButton = ({ children, bg, ...rest }) => {
  return (
    <Button
      style={{
        boxShadow: "none",
        backgroundColor: `${bg ? bg : "rgb(255, 119, 175 )"}`,
        color: "white",
      }}
      size="sm"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SCButton;
