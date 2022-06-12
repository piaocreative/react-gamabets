import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CasinoIcon from '@mui/icons-material/Casino';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import { CommonHeaderNav, GameCard } from '../../components';
import styles from './morninggamabet.module.css'

const morningGamabetList = [
    { title: 'Single Digit', icon: CasinoIcon , color:'orange'},
    { title: 'Odd Even', icon: PermIdentityOutlinedIcon, color:'blue' },
    { title: 'Single Pana', icon: CasinoIcon, color:'purple' },
    { title: 'Double Pana', icon: CasinoIcon, color:'green' },
    { title: 'SP Motor' , icon: CasinoIcon, color:'lightBlue'},
    { title: 'DP Motor' , icon: CasinoIcon, color:'pink'},
    { title: 'Jodi Digits' , icon: CasinoIcon, color:'red'},
    { title: 'Group Jodi' , icon: CasinoIcon, color:'lightOrange'},
    { title: 'Sp, DP, TP' , icon: CasinoIcon, color:'orange'},
    { title: 'Red Bracket' , icon: CasinoIcon, color:'blue'},
    { title: 'Digit Based Jodi' , icon: CasinoIcon, color:'purple'},
    { title: 'Choice Pana SPDP' , icon: CasinoIcon, color:'green'},
    { title: 'Panel Group' , icon: CasinoIcon, color:'lightBlue'},
    { title: 'Two Digit Panel (CP, SR)' , icon: CasinoIcon, color:'pink'},
    { title: 'Triple Pana', icon: CasinoIcon, color:'red' },
    { title: 'Half Sangam Digits', icon: CasinoIcon, color:'lightOrange' },
    { title: 'Full Sangam Digits', icon: CasinoIcon, color:'brownYellow' },
]
const MorningGamabet = () => {
    return <div >
        <CommonHeaderNav title="Morning Gamabet Dashboard" />
        <div style={{ padding: '18px 18px 29px 17px' }}>
            <Grid container spacing={2}>
                {morningGamabetList.map(indvGame => (
                    <Grid item xs={6} key={indvGame.title}>
                        <GameCard title={indvGame.title} CustomIcon={indvGame.icon} color={indvGame.color} />
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
};

export default MorningGamabet;