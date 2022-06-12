import React, { useContext, useEffect, useState } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CasinoIcon from '@mui/icons-material/Casino';
import Card from '@mui/material/Card';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SvgIcon from '@mui/material/SvgIcon';

import { CommonHeaderNav, CommonCircularButton } from '../../components';
// import moneyIcon from '../../public/assets/money.svg';
import { mobilePhoneIcon, lockIcon, moneyIcon } from '../../src/customIcons';
import styles from './generatempin.module.css'
import appsApi from "../../api/api";
import { useAuth } from "../../contexts/AuthContext";
import { getLS } from "../../lib/commons";


const GenerateMPIN = () => {

    const [withdrawInfo, setWithdrawInfo] = useState({})
    const [profileData, setProfileData] = useState({})
    const [withdrawAmount, setWithdrawAmount] = useState('')
    const [error, setError] = useState('')

    const userData = useAuth()

    const getWithdrawText = async () => {
        console.log(" getWithdrawText");
    }

    const getUserProfile = async () => {
        console.log(" getUserProfile");
    }

    const checkIfValidAmount = (amount) => {
        console.log(" checkIfValidAmount");

    }

    const handleSendRequest = async () => {
       console.log(" handle send Request");
    }

    useEffect(() => {
        getWithdrawText()
        getUserProfile()
    }, [])

    return <Container
        className={styles.container}
    >
        <Box
            className={styles.mainBox}
        >
            <CommonHeaderNav title='Generate MPIN' />
            
            <Box sx={{ padding: '35px 30px 30px' }}>
            <Typography
                sx={{ fontSize: '16px', lineHeight: '24px', color: '#57758F', textAlign:'center' }}
            >
                Please Provide a 4 digit numeric
                MPIN to protect your account against
                unauthorised access
            </Typography>
                <Box sx={{mb:'56px'}}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '14px', marginTop: '31px' }}>
                        <Box
                            sx={{
                                marginRight: '24px'
                            }}
                        >
                            <SvgIcon component={() => mobilePhoneIcon} inheritViewBox ></SvgIcon>
                        </Box>
                        <TextField
                            fullWidth
                            id="enter-mobile-number"
                            label="Enter mobile number"
                            variant="standard"
                            InputLabelProps={{ className: styles.label }}
                            InputProps={{ classes: { input: styles.input } }}
                        // value={withdrawAmount}
                        // onChange={handleMpinChange}
                        />
                    </Box>
                    <Button
                            disableFocusRipple
                            disableRipple
                            fullWidth
                            variant="onlyText"
                            sx={{
                                color: theme => theme.palette.primary.main,
                                padding: 0,
                                fontSize:'14px',
                                lineHeight:'19px'
                            }}
                        >
                            Request OTP
                        </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '25px', marginTop: '24px' }}>
                    <Box
                        sx={{
                            marginRight: '24px'
                        }}
                    >
                        <SvgIcon component={() => lockIcon} inheritViewBox ></SvgIcon>
                    </Box>
                    <TextField
                        fullWidth
                        id="enter-mpin"
                        label="Enter MPIN"
                        variant="standard"
                        type="text"
                        value={withdrawAmount}
                        onChange={(e) => {
                            if (/^(\s*|\d+)$/.test(e.target.value)) {
                                setWithdrawAmount(e.target.value);
                                checkIfValidAmount(e.target.value);
                            }
                        }}
                        InputLabelProps={{ className: styles.label }}
                        InputProps={{ classes: { input: styles.input } }} />

                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '107px' }}>
                    <Box
                        sx={{
                            marginRight: '24px'
                        }}
                    >
                        <SvgIcon component={() => lockIcon} inheritViewBox ></SvgIcon>
                    </Box>

                    <TextField
                        fullWidth
                        id="confirm-mpin"
                        label="confirm MPIN"
                        variant="standard"
                        type="text"
                        value={withdrawAmount}
                        onChange={(e) => {
                            if (/^(\s*|\d+)$/.test(e.target.value)) {
                                setWithdrawAmount(e.target.value);
                                checkIfValidAmount(e.target.value);
                            }
                        }}
                        InputLabelProps={{ className: styles.label }}
                        InputProps={{ classes: { input: styles.input } }} />

                </Box>
                <Box sx={{ paddingLeft: '15px', paddingRight: '15px' }}>
                    <CommonCircularButton isDisabled={error ? true : false || withdrawAmount ? false : true} onClick={handleSendRequest} title="Generate MPIN" />
                </Box>

            </Box>
        </Box>
    </Container >
};

export default GenerateMPIN;