import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LogoDicom from './DICOM.png'
import React from "react";
import { useNavigate} from "react-router-dom";

const Header = (props) => {

    const [anchorElProfile, setAnchorElProfile] = React.useState(null);
    const navigate = useNavigate();

    function handleProfileMenu(event) {
        setAnchorElProfile(event.currentTarget);
      };
      
    const handleClose = (link) => {
    //<Link to= {link} >Gehe zur Startseite</Link>
    setAnchorElProfile(null);
    if (typeof link === "string"){
        navigate(link);
    };
    }; 

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
                <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleProfileMenu}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-profilebar"
                    anchorEl={anchorElProfile}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorElProfile)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => handleClose(props.routes.help.link)}>{props.routes.help.name}</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;