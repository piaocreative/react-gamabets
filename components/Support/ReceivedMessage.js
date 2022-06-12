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
import Avatar from "@mui/material/Avatar";

import { makeStyles } from '@mui/styles';

import avatarImage from '../../public/assets/vishy_anand_jpg.png'

const useStyles = makeStyles((theme,) => ({
    messageBox: {
        position: "relative",
        marginLeft: "20px",
        // marginBottom: "10px",
        padding: "25px 26px 20px 24px",
        maxWidth: "240px",
        //height: "50px",
        textAlign: "left",
        // font: "400 .9em 'Open Sans', sans-serif",
        // border: "1px solid #97C6E3",
        borderRadius: "9px",
        // "&:after": {
        //   content: "''",
        //   position: "absolute",
        //   width: "0",
        //   height: "0",
        //   borderTop: "15px solid #A8DDFD",
        //   borderLeft: "15px solid transparent",
        //   borderRight: "15px solid transparent",
        //   top: "0",
        //   left: "-15px"
        // },
        "&:before": {
            content: "''",
            position: "absolute",
            width: "0",
            height: "0",
            borderTop: "7px solid transparent",
            borderLeft: "none",
            borderRight: "11px solid white",
            borderBottom: "7px solid transparent",
            top: "18px",
            left: "-11px"
        }
    },
    avatar: {
        marginTop: '5px',
        boxShadow: theme.shadows[6],
        border: '2px solid white'
    }
}));


export const ReceivedMessage = (props) => {
    const {message, avatarSrc}= props;
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    return (
        <Box sx={{ display: 'flex', marginBottom:'21px' }}>

            <Avatar
                alt='Test Avatar'
                className={classes.avatar}
                src={avatarSrc}
                sx={{width:'40px', height:'40px'}}
                // sx={{ width: 24, height: 24 }}
            />
            <Paper className={classes.messageBox} sx={{ position: 'relative', borderRadius: '9px', padding: '25px 26px 20px 24px' }} elevation={6}>
                <Typography
                    // component="h5"
                    // variant="h5"
                    // className={styles.titleSection}
                    sx={{ color: '#333', lineHeight: '18px', fontSize: '12px' }}
                >
                   {message}
                </Typography>
            </Paper>
        </Box>
    );
}
