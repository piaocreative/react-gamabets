import React from "react";
import Image from "next/image";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CasinoIcon from '@mui/icons-material/Casino';
import Card from '@mui/material/Card';
import Container from "@mui/material/Container";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SvgIcon from '@mui/material/SvgIcon';

import { CommonHeaderNav, CommonCircularButton } from '../../components';
import addFund from '../../public/assets/add_fund.png';
import { moneyIcon } from '../../src/customIcons';
import styles from './addfund.module.css'

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const AddFund = () => {
    return <Container
        className={styles.container}
    >
        <Box
            className={styles.mainBox}
        >
            <CommonHeaderNav title='Add Fund' />
            <Box sx={{ padding: '15px' }}>
                <Box sx={{ display: 'flex', justifyContent:'center', marginTop:'66px' }}>
                    <Image
                        quality={100}
                        src={addFund}
                        loader={myLoader}
                        alt="Picture of Add fund"
                        width={223} //automatically provided
                        height={137} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '153px', marginTop: '95px' }}>
                    {/* <PermIdentityOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                    <SvgIcon fontSize="large" viewBox="0 0 35 30" sx={{ width: '35px', height: '30px', marginRight: '22px' }}>{moneyIcon}</SvgIcon>
                    <TextField
                        fullWidth
                        id="first-name"
                        label="Enter points"
                        variant="standard"
                        InputLabelProps={{ className: styles.label }}
                        InputProps={{ classes: { input: styles.input } }} />
                </Box>
                <Box sx={{ paddingLeft: '15px', paddingRight: '15px' }}>
                    <CommonCircularButton title="Send Requests" />
                </Box>

            </Box>
        </Box>
    </Container >
};

export default AddFund;