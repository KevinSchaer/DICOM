import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Dropzone from "../helper/Dropzone";

const Content = () => {
  const [imageBase64, setImageBase64] = useState(null);

  return (
    <Box
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 8rem)", // set min height to fill viewport minus header and footer heights
      }}
    >
      {!imageBase64 ? <Dropzone /> : imageBase64}{" "}
    </Box>
  );
};

export default Content;
