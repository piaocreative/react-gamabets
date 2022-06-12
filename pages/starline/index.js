import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CasinoIcon from '@mui/icons-material/Casino';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import { PlayButton, BidTime, NameInfo, Dash, CommonHeaderNav, AppNavBar, BottomNavigationBar, GameCard, CommonDialog } from '../../components';
import styles from './starline.module.css'

const gamelist = [
    { title: 'Single Digits', icon: CasinoIcon , color:'blue'},
    { title: 'Single Pana', icon: PermIdentityOutlinedIcon, color:'purple' },
    { title: 'SP Motor', icon: CasinoIcon },
    { title: 'Sp, DP, TP' , icon: CasinoIcon},
    { title: 'Double Pana', icon: CasinoIcon, color:'green' },
    { title: 'Triple Pana', icon: CasinoIcon, color:'red'},
    { title: 'DP Motor' , icon: CasinoIcon},
    { title: 'Two Digit Panel (CP, SR)' , icon: CasinoIcon, color:'blue'},
]
const Starline = () => {
    return <div >
        <CommonHeaderNav title="Starline Games" />
        <div style={{ padding: '18px 18px 29px 17px' }}>
            <Grid container spacing={2}>
                {gamelist.map(indvGame => (
                    <Grid item xs={6} key={indvGame.title}>
                        <GameCard title={indvGame.title} CustomIcon={indvGame.icon} color={indvGame.color || 'orange'} />
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
};

export default Starline;