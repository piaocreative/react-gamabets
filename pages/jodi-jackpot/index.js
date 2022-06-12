import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CasinoIcon from '@mui/icons-material/Casino';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import { CommonHeaderNav, GameCard } from '../../components';
import styles from './jodijackpot.module.css'

const jodiJackpotlist = [
    { title: 'Jodi Jackpot', icon: CasinoIcon , color:'orange'},
    { title: 'Red Bracket Jackpot', icon: PermIdentityOutlinedIcon, color:'blue' },
    { title: 'Digit Based Jackpot', icon: CasinoIcon, color:'purple' },
    { title: 'Group Jackpot' , icon: CasinoIcon, color:'green'},
]
const JodiJackpot = () => {
    return <div >
        <CommonHeaderNav title="Jodi Jackpot" />
        <div style={{ padding: '18px 18px 29px 17px' }}>
            <Grid container spacing={2}>
                {jodiJackpotlist.map(indvJodiJackpot => (
                    <Grid item xs={6} key={indvJodiJackpot.title}>
                        <GameCard title={indvJodiJackpot.title} CustomIcon={indvJodiJackpot.icon} color={indvJodiJackpot.color}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
};

export default JodiJackpot;