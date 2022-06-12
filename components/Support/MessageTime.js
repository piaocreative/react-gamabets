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
import Typography from "@mui/material/Typography";

export const MessageTime = (props) => {
    const { timeValue, } = props;

    return (
        <Typography
            // component="h5"
            // variant="h5"
            // className={styles.titleSection}
            sx={{ color: '#333', lineHeight: '16px', fontSize: '12px', textAlign: 'center', marginTop:'11px', marginBottom:'20px' }}
        >
            {timeValue}
        </Typography>
    );
}
