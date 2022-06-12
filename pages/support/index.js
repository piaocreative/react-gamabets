import React, { useState } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CasinoIcon from '@mui/icons-material/Casino';
import Card from '@mui/material/Card';
import Container from "@mui/material/Container";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Fab from '@mui/material/Fab';

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import { SupportAppBar, ReceivedMessage, SentMessage, MessageTime, AttachmentDialog } from '../../components';
import { galleryIcon, cameraIcon, attachIcon, micIcon } from '../../src/customIcons';

import styles from './support.module.css'

const Support = () => {
    const [openAttachment, setOpenAttachment] = useState(false);

    const handleOpenAttachment = () => {
        setOpenAttachment(true);
    }

    const handleCloseAttachment = () => {
        setOpenAttachment(false);
    }

    return <Container
        className={styles.container}
    >
        <AttachmentDialog
            open={openAttachment}
            closeAttachment={handleCloseAttachment}
            leftIcon={cameraIcon}
            rightIcon={galleryIcon}
            leftTitle="Camera"
            rightTitle="Gallery" />
        <Box
            className={styles.mainBox}
        >
            <SupportAppBar title='Gamabet Support' subTitle="Online" />

            <Box sx={{ padding: '27px 25px 15px 18px' }}>
                <ReceivedMessage message="Sed ut perspiciatis omnis." avatarSrc="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c" />
                <SentMessage message="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt." />

                <MessageTime
                    timeValue=" Monday, 10:40 am"
                />
                <SentMessage message='Lorem ipsum dolor sit amet, consectetur.' />
                <ReceivedMessage message="Excepteur sint occaecat" avatarSrc="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c" />
                <SentMessage message="Lorem ipsum dolor sit amet, consectetur." />
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'minmax(0,100%) min-content', position: 'fixed', bottom: '14px', left: 0, right: 0, marginLeft: '12px', marginRight: '12px' }}>
                <TextField
                    // fullWidth
                    id="message-input"
                    // label=""
                    placeholder="Type a message"
                    InputProps={{
                        sx: { borderRadius: '28px', borderColor: '#DDDDDD', paddingRight:'10px' },
                        endAdornment: (
                            <InputAdornment position="end" >
                                <IconButton
                                    aria-label="toggle attachment modal visibility"
                                    onClick={handleOpenAttachment}
                                    //   onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    sx={{marginRight:0}}
                                >
                                    <SvgIcon fontSize="large" viewBox="0 0 19 19" sx={{ color: '#A3ACB6', width: '17px', height: '17px', }}>{attachIcon}</SvgIcon>
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    inputProps={{ style: { padding: '18px 18px 19px 22px', fontSize: '12px', lineHeight: '16px', height: '100%' } }}
                />
                <Box sx={{ marginLeft: '4px', bgcolor: '#F64401', height: '53px', width: '53px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <SvgIcon fontSize="large" viewBox="0 0 15 20" sx={{ color: '#A3ACB6', width: '14px', height: '20px', }}>{micIcon}</SvgIcon>
                </Box>
            </Box>
        </Box>
    </Container >
};

export default Support;