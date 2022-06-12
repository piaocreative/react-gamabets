import React from "react";
import Image from "next/image";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {  AccountNav, BottomNavigationBar } from '../../components';
import { numberIcon, bankIcon, codeIcon, avatarIcon } from '../../src/customIcons';

import paytmImage from '../../public/assets/paytm-512.png';

import styles from './myaccount.module.css'

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const MyAccount = () => {
    return <div >
        <AccountNav />
        {/* <div style={{ padding: '16px' }}> */}
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 30px 24px 16px',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '32px'
            }}>
                <Typography
                    sx={{ fontSize: '16px', lineHeight: '21px', color: '#222' }}
                >
                    Bank Details
                </Typography>

                <Button color="primary" startIcon={<AddIcon fontSize="large" />} sx={{ textTransform: 'none', fontSize: '14px', lineHeight: '19px', padding: 0 }}>Add New</Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
                <Box sx={{ mr: 2 }}>
                    <SvgIcon component={() => codeIcon} inheritViewBox></SvgIcon>
                </Box>
                <TextField
                    fullWidth
                    id="ifsc-code"
                    label="IFSC Code"
                    variant="standard"
                    value="123"
                    InputLabelProps={{ className: styles.label }}
                    InputProps={{ classes: { input: styles.input } }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
                <Box sx={{ mr: 2 }}>
                    <SvgIcon component={() => numberIcon} inheritViewBox></SvgIcon>
                </Box>
                <TextField
                    fullWidth
                    id="account-number"
                    label="Account Number"
                    variant="standard"
                    value="123"
                    InputLabelProps={{ className: styles.label }}
                    InputProps={{ classes: { input: styles.input } }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
                <Box sx={{ mr: 2 }}>
                    <SvgIcon component={() => numberIcon} inheritViewBox></SvgIcon>
                </Box>
                <TextField
                    fullWidth
                    id="confirm-account-number"
                    label="Confirm Account Number"
                    variant="standard"
                    value="123"
                    InputLabelProps={{ className: styles.label }}
                    InputProps={{ classes: { input: styles.input } }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
                <Box sx={{ mr: 2 }}>
                    <SvgIcon className={styles.customIcon} component={cprops => bankIcon(cprops)} inheritViewBox sx={{color:'#96ADC2'}} ></SvgIcon>
                </Box>
                <TextField
                    fullWidth
                    id="bank-name"
                    label="Bank Name"
                    variant="standard"
                    value="123"
                    InputLabelProps={{ className: styles.label }}
                    InputProps={{ classes: { input: styles.input } }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '36px' }}>
                <Box sx={{ mr: 2 }}>
                    <SvgIcon className={styles.customIcon} component={cprops => avatarIcon(cprops)} inheritViewBox sx={{color:'#96ADC2'}}></SvgIcon>
                </Box>
                <TextField
                    fullWidth
                    id="account-holder-name"
                    label="Account holder name"
                    variant="standard"
                    value="123"
                    InputLabelProps={{ className: styles.label }}
                    InputProps={{ classes: { input: styles.input } }} />
            </Box>
            <Box sx={{marginBottom:'35px'}}>
                <Button
                    fullWidth
                    variant="circular"
                    color="primary"
                    startIcon={<ArrowForwardIcon viewPort="0 0 100 100" sx={{ height: '24px', width: '24px' }} />}
                    onClick={() => { console.log(" handle Buytton Click") }}
                    sx={{
                        justifyContent: 'center', backgroundColor: theme => theme.palette.primary.main, height: '60px', padding: '18px 5px 21px 8px', fontSize: '16px', lineHeight: '21px', '& .MuiButton-startIcon': {
                            marginRight: '10px'
                        },
                    }}
                >
                    Submit
                </Button>
            </Box>
            <Box sx={{
                // display: 'flex',
                // justifyContent: 'space-between',
                marginBottom: '15px'
            }}>
                <Typography
                    sx={{ fontSize: '16px', lineHeight: '21px', color: '#222' }}
                >
                    Add Paytm
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '37px' }}>
                <Box sx={{ mr: 2 }}>
                    <Image
                        loader={myLoader}
                        src={paytmImage}
                        alt='Paytm Image'
                        width={49} //automatically provided
                        height={49} //automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                </Box>
                <TextField
                    fullWidth
                    id="enter-paytm-number"
                    label="Enter paytm number"
                    variant="standard"
                    value="123"
                    InputLabelProps={{ className: styles.label }}
                    InputProps={{ classes: { input: styles.input } }} />
            </Box>
            <Box sx={{marginBottom:'100px'}}>
                <Button
                    fullWidth
                    variant="circular"
                    color="primary"
                    startIcon={<ArrowForwardIcon viewPort="0 0 100 100" sx={{ height: '24px', width: '24px' }} />}
                    onClick={() => { console.log(" handle Buytton Click") }}
                    sx={{
                        justifyContent: 'center', backgroundColor: theme => theme.palette.primary.main, height: '60px', padding: '18px 5px 21px 8px', fontSize: '16px', lineHeight: '21px', '& .MuiButton-startIcon': {
                            marginRight: '10px'
                        },
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>

        {/* <Dash /> */}

        {/* </div> */}
        <BottomNavigationBar />
    </div>
};

export default MyAccount;