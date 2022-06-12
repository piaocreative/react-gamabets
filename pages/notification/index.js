import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';


import {  CommonHeaderNav } from '../../components';
import styles from './notification.module.css'

const messageList = [
    { message: 'Hello user, Please give us a 5 star rating and comment on play store. #1 lucky winner will get Rs.10000/- Thank you.', dateTime: '5 Jun, 2021 11:30am' },
    { message: 'Hello user, Please give us a 5 star rating and comment on play store. #1 lucky winner will get Rs.10000/- Thank you.', dateTime: '5 Jun, 2021 11:30am' },
    { message: 'Hello user, Please give us a 5 star rating and comment on play store. #1 lucky winner will get Rs.10000/- Thank you.', dateTime: '5 Jun, 2021 11:30am' },
    { message: 'Hello user, Please give us a 5 star rating and comment on play store. #1 lucky winner will get Rs.10000/- Thank you.', dateTime: '5 Jun, 2021 11:30am' },
    { message: 'Hello user, Please give us a 5 star rating and comment on play store. #1 lucky winner will get Rs.10000/- Thank you.', dateTime: '5 Jun, 2021 11:30am' },
    { message: 'Hello user, Please give us a 5 star rating and comment on play store. #1 lucky winner will get Rs.10000/- Thank you.', dateTime: '5 Jun, 2021 11:30am' },
    { message: 'Hello user, Please give us a 5 star rating and comment on play store. #1 lucky winner will get Rs.10000/- Thank you.', dateTime: '5 Jun, 2021 11:30am' },
    { message: 'Hello user, Please give us a 5 star rating and comment on play store. #1 lucky winner will get Rs.10000/- Thank you.', dateTime: '5 Jun, 2021 11:30am' },
    { message: 'Hello user, Please give us a 5 star rating and comment on play store. #1 lucky winner will get Rs.10000/- Thank you.', dateTime: '5 Jun, 2021 11:30am' },

]
const Notification = () => {
    return <div >
        <CommonHeaderNav title='Notifications' />
        <Box sx={{ padding: '15px' }}>
            <Grid container spacing={1}>
                {messageList.map((indvMessage, index) => (
                    <Grid item xs={12} key={indvMessage.dateTime + index}>
                        <Card elevation={6} sx={{ borderRadius: '9px', padding: '14px 18px 15px 15px' }}>
                            <Typography
                                // component="subtitle2"
                                variant="body2"
                                color={!index ? 'textPrimary' : 'textSecondary'}
                                sx={{ fontSize: '10px', marginBottom:'6px' }}
                            // className={styles.titleSection}
                            >
                                {indvMessage.message}
                            </Typography>
                            <Typography
                                variant="body2"
                                color='textSecondary'
                                sx={{ fontSize: '9px' }}
                            // variant="h5"
                            // className={styles.titleSection}
                            >
                                {indvMessage.dateTime}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    </div>
};

export default Notification;