import React, { useContext, useEffect, useState } from "react";

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
// import moneyIcon from '../../public/assets/money.svg';
import { moneyIcon } from '../../src/customIcons';
import styles from './withdrawfunds.module.css'
import appsApi from "../../api/api";
import { useAuth } from "../../contexts/AuthContext";
import { getLS } from "../../lib/commons";


const WithDrawFunds = () => {

    const [withdrawInfo, setWithdrawInfo] = useState({})
    const [profileData, setProfileData] = useState({})
    const [withdrawAmount, setWithdrawAmount] = useState('')
    const [error, setError] = useState('')

    const userData = useAuth()

    const getWithdrawText = async () => {
        const res = await appsApi.withdrawText()
        if (res.status === 1) {
            setWithdrawInfo(res.data)
        }
    }

    const getUserProfile = async () => {
        const userId = getLS('USER_ID')
        const res = await appsApi.profileData({ id: userId })
        if (res.status === 1) {
            setProfileData(res.data)
        }
    }

    const checkIfValidAmount = (amount) => {
        const today = new Date()
        const hour = today.getHours();
        if (!amount) {
            setError('')
        } else if (userData.userWalletBalance > 100000) {
            if (amount > 100000) {
                setError('withdraw points should be max 100,000')
            }
        } else if (amount > userData.userWalletBalance) {
            setError('withdraw points suould not be greater than available balance')
        } else if (amount < 1000) {
            setError('withdraw points should be min 1,000')
        } else if (hour > 15 || hour < 10) {
            setError('withdrawal requesting time is 10:00am to 3:00pm only')
        } else {
            setError('');
            return true;
        }
        return false;
    }

    const handleSendRequest = async () => {
        const today = new Date();
        const date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const requestData = {
            user_id: profileData?.userId,
            fullname: profileData?.account_holder_name,
            username: profileData?.username,
            mobile: '+1',
            req_amount: withdrawAmount,
            req_date: date,
            req_time: time,
            withdrawalMode: 'Bank Transfer',
            accNumber: profileData.account_no,
            ifscCode: profileData.ifsc_code,
            bankName: profileData.bank_name,
            accName: profileData.account_holder_name
        }
        const res = await appsApi.requestWithdrawFund(requestData)
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
            <CommonHeaderNav title='Withdraw Funds' />
            <Box sx={{ padding: '15px' }}>
                <Grid container spacing={1} sx={{ marginBottom: '37px' }}>
                    <Grid item xs={12}>
                        <Card elevation={6} sx={{ borderRadius: '9px', padding: '18px 21px 21px 21px', display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFDFD4', justifyContent: 'center', borderRadius: '50%', height: '74px', width: '74px', marginRight: '17px' }}>
                                <AccountBalanceWalletOutlinedIcon sx={{ color: '#F64401', fontSize: '34px', lineHeight: 1 }} />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h5"
                                    color='primary'
                                    fontWeight='bold'
                                // sx={{ fontSize: '16px', lineHeight: '1', color: '#222222', fontWeight: '300' }}
                                >
                                    ₹ {userData && userData.userWalletBalance}
                                </Typography>
                                <Typography
                                    // variant="body2"
                                    color='textSecondary'
                                    sx={{ fontSize: '12px', lineHeight: '1' }}
                                >
                                    Total Available Balance
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card elevation={6} sx={{ borderRadius: '9px', padding: '12px 21px 33px 21px', display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                variant="body1"
                                sx={{ color: '#333333', lineHeight: '1', marginBottom: '13px', fontWeight: 300 }}
                            >
                                {withdrawInfo.textSecondry}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <WhatsAppIcon sx={{ color: '#4CAF50', fontSize: '32px', lineHeight: 1, marginRight: '16px' }} />
                                <Box>
                                    <Typography
                                        variant="h5"
                                        // color='primary'
                                        fontWeight='bold'
                                        sx={{ color: '#333333' }}
                                    >
                                        {withdrawInfo.Number}
                                    </Typography>
                                    <Typography
                                        // variant="body2"
                                        // color='textSecondary'
                                        sx={{ fontSize: '12px', lineHeight: '1', color: '#999999', fontWeight: 300 }}
                                    >
                                        {withdrawInfo.Timing}
                                    </Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
                <Typography
                    // variant="body2"
                    // color='textSecondary'
                    sx={{ fontSize: '16px', lineHeight: '1', color: '#222222' }}
                >
                    Enter withdraw points
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '32px', marginTop: '24px' }}>
                    {/* <PermIdentityOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                    <SvgIcon fontSize="large" viewBox="0 0 35 30" sx={{ width: '35px', height: '30px', marginRight: '22px' }}>{moneyIcon}</SvgIcon>
                    <TextField
                        fullWidth
                        id="first-name"
                        label="Enter points"
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

                <Typography
                    sx={{ fontSize: '12px', lineHeight: '16px', color: '#57758F', textAlign: 'center', marginBottom: '75px' }}
                >
                    {withdrawInfo.textMain}
                </Typography>
                <Typography sx={{ fontSize: '12px', color: '#EB3719', textAlign: 'center', marginBottom: '5px' }}>
                    {error}
                </Typography>

                <Box sx={{ paddingLeft: '15px', paddingRight: '15px' }}>
                    <CommonCircularButton isDisabled={error ? true : false || withdrawAmount ? false : true} onClick={handleSendRequest} title="Send Requests" />
                </Box>

            </Box>
        </Box>
    </Container >
};

export default WithDrawFunds;