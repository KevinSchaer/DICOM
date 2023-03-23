import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Main = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
      axios.get("./api")
        .then(res => setData(res.data.message));
    }, []);

    return (
        <div>
            <Box sx={{ flexGrow: 1, mt: '3rem' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center">
                            {!data ? "Loading..." : data}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Main;