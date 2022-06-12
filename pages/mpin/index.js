import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CasinoIcon from '@mui/icons-material/Casino';
import Card from '@mui/material/Card';
import Container from "@mui/material/Container";

import { CommonHeaderNav } from '../../components';
import styles from './mpin.module.css'

const MPIN = () => {
    return <Container
        className={styles.container}
    >
        <Box
            className={styles.mainBox}
        >
            <CommonHeaderNav title='MPIN' />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center', marginBottom: '88px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFDFD4', justifyContent: 'center', borderRadius: '50%', height: '94px', width: '94px', marginBottom: '21px' }}>
                        <CasinoIcon sx={{ color: '#F64401', fontSize:'40px', lineHeight:1 }} />
                    </Box>
                    <Box>

                        <Typography
                            variant="subtitle1"
                            sx={{ fontSize: '16px', lineHeight: '1', color: '#222222', fontWeight: '300' }}
                        >
                            Generate MPIN
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#CCDBF4', justifyContent: 'center', borderRadius: '50%', height: '94px', width: '94px', marginBottom: '21px' }}>
                        <CasinoIcon sx={{ color: '#004AC9', fontSize:'40px', lineHeight:1 }} />
                    </Box>
                    <Box>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontSize: '16px', lineHeight: '1', color: '#222222', fontWeight: '300' }}
                        >
                            Forget MPIN
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Container>
};

export default MPIN;