import React from "react";

import Box from '@mui/material/Box'; 
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";

import CasinoIcon from '@mui/icons-material/Casino';
import FormControlLabel from '@mui/material/FormControlLabel';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Switch from '@mui/material/Switch';

import { CommonHeaderNav, StarlineDashGameCard } from '../../components';
import styles from './starlinedashboard.module.css'

const starlineList = [
    { time: '10:00 AM', message: 'closed for today', gameCount: "92", status: false },
    { time: '10:00 AM', message: 'status for today', gameCount: "**", status: true },
    { time: '10:00 AM', message: 'status for today', gameCount: "92", status: false },
    { time: '10:00 AM', message: 'status for today', gameCount: "**", status: true },
    { time: '10:00 AM', message: 'status for today', gameCount: "92", status: false },
    { time: '10:00 AM', message: 'status for today', gameCount: "**", closed: true },
]
const StarlineDashboard = () => {
    return <div >
        <CommonHeaderNav title="Jackpot Dashboard" hasActions />
        <Card elevation={3} sx={{ mt: '18px', mb: '17px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'space-around', padding: '10px 16px 16px 16px ' }}>
                <Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns:'minmax(0,91px) minmax(0,66px)', alignItems: 'center' }}>
                        <Typography
                            // component="subtitle2"
                            sx={{ fontSize: '14px', lineHeight: '29px', color: '#222' }}
                        // className={styles.titleSection}
                        >
                            Single Pana:
                        </Typography>
                        <Typography
                            color="primary"
                            sx={{ fontSize: '14px', lineHeight: '19px', fontWeight: 'bold' }}
                        // variant="h5"
                        // className={styles.titleSection}
                        >
                            1-160
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns:'minmax(0,91px) minmax(0,66px)', alignItems: 'center' }}>
                        <Typography
                            // component="subtitle2"
                            sx={{ fontSize: '14px', lineHeight: '29px', color: '#222' }}
                        // className={styles.titleSection}
                        >
                            Triple Pana:
                        </Typography>
                        <Typography
                            color="primary"
                            sx={{ fontSize: '14px', lineHeight: '19px', fontWeight: 'bold' }}
                        // variant="h5"
                        // className={styles.titleSection}
                        >
                            1-1000
                        </Typography>
                    </Box>
                </Box>
                <Divider
                    orientation="vertical"
                    variant="middle"
                    light
                    sx={{ height: "43px", borderColor: '#FF9F7E', ml:'20px', mr:'20px' }}
                />
                <Box sx={{ }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns:'minmax(0,91px) minmax(0,66px)', alignItems: 'center' }}>
                        <Typography
                            // component="subtitle2"
                            sx={{ fontSize: '14px', lineHeight: '29px', color: '#222' }}
                        // className={styles.titleSection}
                        >
                            Double Pana:
                        </Typography>
                        <Typography
                            color="primary"
                            sx={{ fontSize: '14px', lineHeight: '19px', fontWeight: 'bold' }}
                        // variant="h5"
                        // className={styles.titleSection}
                        >
                            1-320
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateColumns:'minmax(0,91px) minmax(0,66px)', alignItems: 'center' }}>
                        <Typography
                            // component="subtitle2"
                            sx={{ fontSize: '14px', lineHeight: '29px', color: '#222' }}
                        // className={styles.titleSection}
                        >
                            Triple Pana:
                        </Typography>
                        <Typography
                            color="primary"
                            sx={{ fontSize: '14px', lineHeight: '19px', fontWeight: 'bold' }}
                        // variant="h5"
                        // className={styles.titleSection}
                        >
                            1-10
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Card>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '16px', marginRight: '17px' }}>
            <Typography
                sx={{ fontSize: '15px', lineHeight: '19px', color: '#000', marginBottom: '6px' }}
            >
                Starline Games
            </Typography>
            <FormControlLabel
                value="start"
                control={<Switch defaultChecked color="switchGreen" />}
                label="Notifications"
                labelPlacement="start"
            />
        </Box>
        <div style={{ padding: '18px 17px 29px 16px' }}>
            <Grid container spacing={1}>
                {starlineList.map(indvGame => (
                    <Grid item xs={12} key={indvGame.title}>
                        <StarlineDashGameCard gameTime={indvGame.time} message={indvGame.message} gameStatus={indvGame.status} gameCount={indvGame.gameCount} />
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
};

export default StarlineDashboard;