import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import SvgIcon from '@mui/material/SvgIcon';

import { CommonHeaderNav} from '../../components';
import { cardIcon, bankIcon, checkedIcon } from '../../src/customIcons';

import styles from './fundrequesthistory.module.css'

const fundRequestList = [
    { dateTime: 'Mon, 02 Aug 2021, 09:15 am', amount: '15000', fundId: '5efd2sds52dsdsadre5e9', requestType: 'Debit', withDrawalMode: 'Bank', response: true },


]
const FundRequestHistory = () => {
    return <div >
        <CommonHeaderNav title='Fund request history' />
        <Box sx={{ padding: '15px' }}>
            <Grid container spacing={1}>
                {fundRequestList.map((indvFundReq, index) => (
                    <Grid item xs={12} key={indvFundReq.dateTime + index}>
                        <Card elevation={6} sx={{ borderRadius: '9px', padding: '15px 19px 20px 19px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                                <Typography
                                    // component="subtitle2"
                                    fontWeight='bold'
                                    color='primary'
                                    sx={{ fontSize: '14px' }}
                                // className={styles.titleSection}
                                >
                                    {indvFundReq.dateTime}
                                </Typography>
                                <Typography
                                    color='primary'
                                    fontWeight='bold'
                                    sx={{ fontSize: '16px' }}
                                // variant="h5"
                                // className={styles.titleSection}
                                >
                                    ₹  {indvFundReq.amount}
                                </Typography>
                            </Box>
                            <Box sx={{marginBottom:'16px'}}>
                                <Typography
                                    // component="subtitle2"
                                    sx={{ fontSize: '13px', color: '#222222' }}
                                // className={styles.titleSection}
                                >
                                    Fund ID:
                                </Typography>
                                <Typography
                                    sx={{ fontSize: '13px', color: '#888888' }}
                                // variant="h5"
                                // className={styles.titleSection}
                                >
                                    {indvFundReq.fundId}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <SvgIcon fontSize="large" viewBox="0 0 30 20" sx={{ width: '30px', height: '20px', marginRight: '12px' }}>{cardIcon}</SvgIcon>
                                    <Box>
                                        <Typography
                                            sx={{ fontSize: '13px', color: '#888888' }}
                                        >
                                            Request type
                                        </Typography>
                                        <Typography
                                            // variant="body2"
                                            // color='textSecondary'
                                            sx={{ fontSize: '12px', lineHeight: '1', color: '#222222', fontWeight: 300 }}
                                        >
                                            {indvFundReq.requestType}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <SvgIcon fontSize="large" viewBox="0 0 24 24" sx={{ width: '24px', height: '24px', marginRight: '12px' }}>{bankIcon}</SvgIcon>
                                    <Box>
                                        <Typography
                                            sx={{ fontSize: '13px', color: '#888888' }}
                                        >
                                            Withdrawal Mode
                                        </Typography>
                                        <Typography
                                            // variant="body2"
                                            // color='textSecondary'
                                            sx={{ fontSize: '13px', lineHeight: '1', color: '#222222', fontWeight: 300 }}
                                        >
                                            {indvFundReq.withDrawalMode}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <CardActions sx={{ justifyContent: 'center',borderTop:'1px solid #CCCCCC', paddingTop:'13px' }}>
                                {indvFundReq.response ? <Typography
                                    sx={{ display:'flex', justifyContent:'center', fontSize: '13px', lineHeight:'19px', color: '#059E00' }}
                                // variant="h5"
                                // className={styles.titleSection}
                                >
                                    <SvgIcon fontSize="large" viewBox="0 0 19 19" sx={{ color: '#059E00', width: '17px', height: '17px', marginRight: '9px' }}>{checkedIcon}</SvgIcon>
                                    Request sent successfully
                                </Typography> : 'Request failed'}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    </div>
};

export default FundRequestHistory;