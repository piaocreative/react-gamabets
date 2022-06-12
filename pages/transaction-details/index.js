import React from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import AddCircleIcon from '@mui/icons-material/AddCircle';

import { FundCard, FundNavbar, BottomNavigationBar } from '../../components';

import styles from './transactiondetails.module.css'

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const fundList = [
    { title: 'Withdraw Funds', img: "new_singledigit.png", color: "#F64401" },
    { title: 'Fund Request History', img: "new_singlepana.png", color: "#004AC9" },
];

const TransactionDetails = () => {
    return <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <FundNavbar title="Funds" />
        {/* <div style={{ padding: '16px' }}> */}
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 30px 24px 16px',
            justifyContent: 'space-between',
            height: '100%'
        }}>

            <Grid container spacing={2}>
                {fundList.map(indvFund => (
                    <Grid item xs={6} key={indvFund.title}>
                        <FundCard title={indvFund.title} iconUrl={`/imgs/${indvFund.img}`} color={indvFund.color} />
                    </Grid>
                ))}
            </Grid>

            {/* <GameCard title={indvJodiJackpot.title} CustomIcon={indvJodiJackpot.icon} color={indvJodiJackpot.color}/> */}
            <Box sx={{ marginBottom: '145px' }}>
                <Button
                    fullWidth
                    variant="circular"
                    color="primary"
                    startIcon={<AddCircleIcon sx={{ height: '24px', width: '24px' }} />}
                    onClick={() => { console.log(" handle Buytton Click") }}
                    sx={{
                        justifyContent: 'center', backgroundColor: theme => theme.palette.primary.main, height: '60px', padding: '18px 5px 21px 8px', fontSize: '16px', lineHeight: '21px', '& .MuiButton-startIcon': {
                            marginRight: '10px'
                        },
                    }}
                >
                    Add Fund
                </Button>
            </Box>
        </Box>
        <BottomNavigationBar />
    </Box>
};

export default TransactionDetails;