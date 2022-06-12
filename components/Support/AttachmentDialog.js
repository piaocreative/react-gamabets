import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';

import SvgIcon from '@mui/material/SvgIcon';

import { closeIcon } from '../../src/customIcons';

export const AttachmentDialog = (props) => {
    const { closeAttachment, open, leftTitle, rightTitle, leftIcon, rightIcon } = props;

    const handleClose = (event, reason) => {
        if (!reason) {
            closeAttachment();
        }
    };
    return (
        <Dialog
            disableEscapeKeyDown
            onClose={handleClose}
            aria-labelledby="attachment-modal"
            open={open}
            PaperProps={{ sx: { borderRadius: '20px', margin: '22px' } }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {handleClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            padding: 0,
                            marginTop: '17px',
                            marginRight: '27px',
                            marginBottom: '37px',
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <SvgIcon component={() => closeIcon} inheritViewBox ></SvgIcon>
                    </IconButton>
                ) : null}
            </Box>
            <Box sx={{ display: 'flex', marginBottom: '65px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '164px', paddingTop:'13px' }}>
                    <SvgIcon component={() => leftIcon} inheritViewBox ></SvgIcon>
                    <Typography
                        sx={{ color: '#000', lineHeight: '19px', fontSize: '14px', textAlign: 'center', marginTop: '17px', marginBottom: '15px' }}
                    >
                        {leftTitle}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '164px', borderLeft: '1px solid #999999', paddingTop:'13px' }}>
                    <SvgIcon component={() => rightIcon} inheritViewBox></SvgIcon>
                    <Typography
                        sx={{ color: '#000', lineHeight: '19px', fontSize: '14px', textAlign: 'center', marginTop: '17px', marginBottom: '15px' }}
                    >
                        {rightTitle}
                    </Typography>
                </Box>
            </Box>
        </Dialog>
    );
}
