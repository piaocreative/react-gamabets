import * as React from 'react';
import Image from "next/image";

import { styled, alpha } from '@mui/material/styles';
import Card from '@mui/material/Card'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Avatar from '@mui/material/Avatar';

import gamabetslogo from "../../public/assets/logo.png";

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

export const SupportAppBar = (props) => {
    const { title, hasActions = false, subTitle = '' } = props
    return (
        <Card elevation={0} sx={{ borderRadius: '0 0 35px 35px' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='primary' elevation={0} >
                    <Toolbar sx={{ paddingTop: '4px', paddingBottom: '16px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* <div style={{ padding: '12px 15px 11px 25px', borderRadius: '0 20px 20px 0',boxShadow:'0px 3px 8px #0000001F', marginRight:'8px',lineHeight:'11px' }}> */}
                            <ChevronLeftIcon sx={{ color: '#fff' }} />
                            {/* </div> */}

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar sx={{ marginRight: '5px', width: 42, height: 42, bgcolor: 'white', color: '#F64401', fontWeight: 'bold', fontSize: '14px' }}>GS</Avatar>

                                <Box >
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontSize: '18px', lineHeight: '30px', color: '#fff' }}
                                    >
                                        {title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontSize: '13px', lineHeight: '18px', color: 'rgba(255,255,255,0.6)' }}
                                    >
                                        {subTitle}
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {hasActions && (<Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AccountBalanceWalletIcon />
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontSize: '12px', lineHeight: '12px', color: '#fff' }}
                                >
                                    98765.0
                                </Typography>
                            </Box>)}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Card>
    );
}
