import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const BottomNavigationBar = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, borderRadius: '25px 25px 0 0' }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    borderRadius: '25px 25px 0 0'
                }}
            >
                <BottomNavigationAction label="My Account" icon={<RestoreIcon />} sx={{ color: '#A6BCD0', fontSize: '9px' }} />
                <BottomNavigationAction label="Passbook" icon={<FavoriteIcon />} sx={{ color: '#A6BCD0', fontSize: '9px' }} />
                <BottomNavigationAction label="" icon={<Fab color="primary" aria-label="Home" sx={{
                    position: 'absolute',
                    zIndex: 1,
                    top: -30,
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                }}>
                    <HomeOutlinedIcon />
                </Fab>} sx={{ color: '#A6BCD0', label: { fontSize: '9px' } }} />
                <BottomNavigationAction label="Funds" icon={<LocationOnIcon />} sx={{ color: '#A6BCD0', fontSize: '9px' }} />
                <BottomNavigationAction label="Chat Support" icon={<LocationOnIcon />} sx={{ color: '#A6BCD0', fontSize: '9px' }} />
            </BottomNavigation>
        </Paper>
    );
}
