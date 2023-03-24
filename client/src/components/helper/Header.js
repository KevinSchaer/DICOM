import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import LogoDicom from './DICOM.png'

const Header = () => {
    return (
        <AppBar position='static' style={{ background: '#F5F5F5' }}>
            <Toolbar>
                <Box
                    component='img'
                    sx={{ 
                        height: 48, 
                        mr: 2, 
                        ml : 1
                    }}
                    alt='Dicom Logo'
                    src={LogoDicom}
                />
                <Typography variant='h6' component='div' color='primary' sx={{ flexGrow: 1 }}>
                    DICOM Viewer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;