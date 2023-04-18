import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./architecture/Header";
import Content from "./architecture/Content";
import Footer from "./architecture/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0177BA",
    },
  },
});

const Main = () => {
  const [imageBase64, setImageBase64] = useState(null);

  /*
    useEffect(() => {
      axios.get("./api")
        .then(res => setData(res.data.message));
    }, []);
    */

  return (
    <ThemeProvider theme={theme}>
      <Header routes={{ help: { link: "/hilfe", name: "Hilfe" } }} />
      <Content />
      <Footer />
    </ThemeProvider>
  );
};

export default Main;
