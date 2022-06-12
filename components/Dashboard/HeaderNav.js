import React from "react";
import Image from "next/image";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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

import {AppNavBar} from './AppNavBar';
import gamabetslogo from "../../public/assets/logo.png";

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const HeaderNav = ({ }) => {
    const theme = useTheme();
    return (
        <Card elevation={6} sx={{ borderRadius: '0 0 38px 38px' }}>
            {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', paddingLeft:0 }}> */}
                {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{padding:'12px 15px 11px 25px', borderRadius:'0 20px 20px 0'}}>
                    <MenuIcon color="primary" />

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
                </Box> */}
                {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Badge badgeContent="+" color="primary" variant="string" anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }} 
                        // sx={{ minWidth: '13px', height: '13px', fontSize: '6px', lineHeight: '6px' }} // implement in anchorposition
                        >
                            <AccountBalanceWalletIcon />
                        </Badge>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontSize: '9px', lineHeight: '9px', color: '#000', fontWeight: 'bold' }}
                        >
                            ₹ 98765.0
                        </Typography>
                    </Box>

                    <Badge badgeContent="5" color="primary" variant="string" 
                    // sx={{ minWidth: '13px', height: '13px', fontSize: '6px', lineHeight: '6px' }} // implement in anchorposition
                    >
                        <NotificationsNoneIcon />
                    </Badge>
                </Box> */}
            {/* </Box> */}
            <AppNavBar/>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '34px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontSize: '15px', lineHeight: '1', color: '#333', fontStyle: 'italic' }}
                        >
                            Vishwas ka <span style={{ color: '#F64401' }}>Dhanda</span> Vishwas ke <span style={{ color: '#F64401' }}>Sath</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ backgroundColor: '#F64300', borderRadius: '8px', border: '1px solid #F64300', position: 'relative', overflow: 'visible' }}>
                            <CardContent sx={{ paddingTop: '20px', paddingBottom: '22px', textAlign: 'center' }} >
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontSize: '15px', lineHeight: '1', color: '#fff' }}
                                >
                                    Gama Starline
                                </Typography>
                            </CardContent>
                            {/* <CardActions sx={{color:'#F64401', justifyContent:'center', backgroundColor:'#fff', borderRadius:'2px', border:'1px solid #FF0005', paddingTop:'3px', paddingBottom:'2px'}}>
                            PLAY NOW
                        </CardActions> */}
                            <div style={{ position: 'absolute', zIndex: 5, bottom: '-6px', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', width: '67px' }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ color: '#F64401', textAlign: 'center', fontSize: '8px', lineHeight: '8px', width: '67px', height: '16px', backgroundColor: '#fff', borderRadius: '2px', border: '1px solid #FF0005', paddingTop: '3px', paddingBottom: '2px' }}
                                >
                                    PLAY NOW
                                </Typography>
                            </div>

                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card sx={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #F64300', position: 'relative', overflow: 'visible' }}>
                            <CardContent sx={{ paddingTop: '20px', paddingBottom: '22px', textAlign: 'center' }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontSize: '15px', lineHeight: '1', color: '#F64300' }}
                                >
                                    Gama Jackpot
                                </Typography>
                            </CardContent>
                            <div style={{ position: 'absolute', zIndex: 5, bottom: '-6px', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', width: '67px' }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ color: '#F64401', textAlign: 'center', fontSize: '8px', lineHeight: '8px', width: '67px', height: '16px', backgroundColor: '#fff', borderRadius: '2px', border: '1px solid #FF0005', paddingTop: '3px', paddingBottom: '2px' }}
                                >
                                    PLAY NOW
                                </Typography>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </Card>
    );
};

export { HeaderNav };
