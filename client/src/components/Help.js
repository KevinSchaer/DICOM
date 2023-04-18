import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./architecture/Header";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0177BA',
        },
    },
});

const Help = () => {

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='column' spacing={1}>
                <Grid item xs={12}>
                    <Header routes={{ help: { link: '/', name: 'Startseite'}}} />
                </Grid>
                <Box sx={{ flexGrow: 1}}>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '100vh' }}
                    >
                        Hilfe
                    </Grid>  
                </Box>
            </Grid>
        </ThemeProvider>
    );
};

export default Help;