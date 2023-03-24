import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./helper/Header";
import Dropzone from "./Dropzone";
import DrawingToolbar from "./helper/DrawingToolbar";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0177BA',
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
            <Grid container direction='column' spacing={1}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Box sx={{ flexGrow: 1}}>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '90vh' }}
                    >
                        <Grid item xs={3}><DrawingToolbar/></Grid>
                        <Grid item xs={3}>
                            {!imageBase64 ? <Dropzone /> : imageBase64}
                        </Grid> 
                    </Grid>  
                </Box>
            </Grid>
        </ThemeProvider>
    );
};

export default Main;