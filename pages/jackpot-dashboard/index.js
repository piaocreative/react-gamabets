import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CasinoIcon from '@mui/icons-material/Casino';
import FormControlLabel from '@mui/material/FormControlLabel';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Switch from '@mui/material/Switch';

import { CommonHeaderNav, JackpotGameCard } from '../../components';
import styles from './jackpotdashboard.module.css'

const jackpotList = [
    { time: '10:00 AM', count: "92", closed: false },
    { time: '10:00 AM', count: "**", closed: true },
    { time: '10:00 AM', count: "92", closed: false },
    { time: '10:00 AM', count: "**", closed: true },
    { time: '10:00 AM', count: "92", closed: false },
    { time: '10:00 AM', count: "**", closed: true },
]
const JackpotDashboard = () => {
    return <div >
        <CommonHeaderNav title="Jackpot Dashboard" hasActions />
        <Box sx={{ display: 'flex', alignItems:'center', marginTop:'12px', marginBottom:'19px', paddingLeft: '16px', paddingRight: '17px', minHeight: '58px', backgroundColor: '#FFE8E1' }}>
            <Typography
                // component="subtitle2"
                sx={{ fontSize: '14px', color: '#000' }}
            // className={styles.titleSection}
            >
                Jodi:
            </Typography>
            <Typography
                color="primary"
                sx={{ fontSize: '14px', fontWeight: 'bold', marginLeft:'13px' }}
            // variant="h5"
            // className={styles.titleSection}
            >
                100
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '16px', marginRight: '17px' }}>
            <Typography
                sx={{ fontSize: '16px', lineHeight: '1', color: '#333', marginBottom: '6px' }}
            >
                Jackpot Games
            </Typography>
            <FormControlLabel
                value="start"
                control={<Switch defaultChecked color="switchGreen" />}
                label="Notifications"
                labelPlacement="start"
            />
        </Box>
        <div style={{ padding: '18px 17px 29px 16px' }}>
            <Grid container spacing={2}>
                {jackpotList.map(indvGame => (
                    <Grid item xs={6} key={indvGame.title}>
                        <JackpotGameCard timeValue={indvGame.time} countValue={indvGame.count} gameStatus={indvGame.closed} />
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
};

export default JackpotDashboard;