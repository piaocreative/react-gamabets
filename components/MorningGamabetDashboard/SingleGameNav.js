import React from "react";
import Image from "next/image";

import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import Button from "@mui/material/Button";

import userImage from "../../public/assets/user-img.png";
import gamabetslogo from "../../public/assets/logo.png";

import { menuIcon, editIcon, bellIcon, whatsAppIcon } from '../../src/customIcons';

const useStyles = makeStyles((theme) => ({
    profile: {
        borderRadius: '50%',
        border: `2px solid ${theme.palette.primary.main} !important`
    },
}));

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const SingleGameNav = ({ }) => {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Card elevation={0} sx={{ borderRadius: '0 0 35px 35px', backgroundColor: '#FFDFD4', paddingBottom: '21px' }}>
            <Box sx={{ flexGrow: 1, marginBottom: '24px' }}>
                <AppBar position="static" color='transparent' elevation={0} >
                    <Toolbar sx={{ paddingLeft: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#fff', padding: '12px 15px 11px 25px', borderRadius: '0 20px 20px 0', boxShadow: '0px 3px 8px #0000001F', marginRight: '8px', lineHeight: '11px' }}>
                                <SvgIcon component={() => menuIcon} inheritViewBox ></SvgIcon>
                            </div>
                            <Image
                                quality={100}
                                src={gamabetslogo}
                                loader={myLoader}
                                alt="Picture of Play Button"
                                width={149} //automatically provided
                                height={30} //automatically provided
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                            />
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                            {/* <Box sx={{ marginRight: '16px' }}>
                                <SvgIcon component={() => editIcon} inheritViewBox ></SvgIcon>
                            </Box> */}

                            <Fab size="small" aria-label="bellz-icon" sx={{ backgroundColor: 'white' }}>
                                <Badge badgeContent="5" color="primary" variant="string"
                                // sx={{ minWidth: '13px', height: '13px', fontSize: '6px', lineHeight: '6px' }} // implement in anchorposition
                                >
                                    <SvgIcon component={() => bellIcon()} inheritViewBox ></SvgIcon>
                                </Badge>
                            </Fab>

                        </Box>

                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {/* <Box sx={{ marginBottom: '10px' }}>
                    <Image
                        quality={100}
                        src={userImage}
                        loader={myLoader}
                        alt="Picture of User Icon"
                        width={66} //automatically provided
                        height={66} //automatically provided
                        // blurDataURL="data:..." automatically provided
                        // placeholder="blur" // Optional blur-up while loading
                        className={classes.profile}

                    />
                </Box> */}
                {/* <Typography
                    sx={{ color: '#222', fontSize: '18px', lineHeight: '24px', fontWeight: 300 }}
                >
                    John Doe
                </Typography> */}
                <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // marginLeft: "22px",
            // marginRight: "21px",
            marginBottom: "13px",
          }}
        >
          <Button
            variant="circular"
            // onClick={(e) => handleSubmit(e)}
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              boxShadow:3,
              width: "135px",
              height: "41px",
              fontSize: "10px",
              lineHeight: "14px",
              marginRight:'15px',
              '&:hover':{
                  boxShadow:0
              }
            }}
            // disabled={btnLoading}
          >
            Gamebet Starline
          </Button>
          <Button
            variant="circular"
            // onClick={() => handleClose()}
            sx={{
              border: "1px solid",
              borderColor: (theme) => theme.palette.primary.main,
              backgroundColor:'white',
              color: (theme) => theme.palette.primary.main,
              width: "135px",
              height: "41px",
              fontSize: "10px",
              lineHeight: "14px",
              '&:hover':{
                color:'white'
            }
            }}
          >
           Gamebet Jeckpot
          </Button>
        </Box>
                <Box sx={{display:'flex'}}>
                    <SvgIcon component={()=>whatsAppIcon} inheritViewBox ></SvgIcon>
                    <Typography
                        sx={{ color: '#000', fontSize: '14px', lineHeight: '19px', fontWeight: 300, marginLeft:'7px' }}
                    >
                        9000190001
                    </Typography>
                </Box>

            </Box>
        </Card>
    );
};

export { SingleGameNav };
