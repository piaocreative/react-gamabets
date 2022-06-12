import React from "react";
import Image from "next/image";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';

import { MultipleGameNav, BottomNavigationBar, LeftGameCard } from '../../components';
import { numberIcon, bankIcon, codeIcon, avatarIcon } from '../../src/customIcons';

import paytmImage from '../../public/assets/paytm-512.png';

import styles from './morninggamabetdashboardsliders.module.css'

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const gameList = [{ gameTitle: 'Morning Gamabet', gameNumber: '366-57-160', gameStatus: true, openTime: '11:10Am', closeTime: '12:30Am' },
{ gameTitle: 'Morning Gamabet', gameNumber: '366-57-160', gameStatus: true, openTime: '11:10Am', closeTime: '12:30Am' },
{ gameTitle: 'Morning Gamabet', gameNumber: '366-57-160', gameStatus: true, openTime: '11:10Am', closeTime: '12:30Am' },
{ gameTitle: 'Morning Gamabet', gameNumber: '366-57-160', gameStatus: true, openTime: '11:10Am', closeTime: '12:30Am' }]

const MorningGamabetDashboardSliders = () => {

const handlePlayClick=()=>{
console.log(" Handle Play Click");
};
    return <div >
        <MultipleGameNav />
        <Box sx={{padding:'15px'}}>
        <Grid container spacing={1}>
            {gameList.map((indvGame, index) => {
                console.log("For Reach: ", indvGame);
                return (
                    <Grid item xs={12} key={indvGame.gameTitle + index} >
                        <LeftGameCard gameDetails={indvGame} handlePlayClick={handlePlayClick} />
                    </Grid>
                )
            })
            }
        </Grid>
        </Box>
        
        <BottomNavigationBar />
    </div>
};

export default MorningGamabetDashboardSliders;