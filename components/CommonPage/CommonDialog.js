import * as React from 'react';
import PropTypes from 'prop-types';

import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';

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
import SvgIcon from '@mui/material/SvgIcon';
import { closeIcon } from '../../src/customIcons';

export const CommonDialog = (props) => {
    const { open, handleClose, title="Select Game Type", children } = props;
    return (
        <div>

            <Dialog
                onClose={handleClose}
                aria-labelledby="game-custom-modal"
                open={open}
                PaperProps={{ sx: { borderRadius: '21px', padding: '20px 23px 53px 27px', margin: '14px' } }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center',marginBottom:'31px' }}>
                    <Typography
                        sx={{ fontSize: '20px', lineHeight: '27px', color: '#222222' }}
                    >
                        {title}
                    </Typography>
                    {handleClose ? (
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                padding: 0,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <SvgIcon component={() => closeIcon} inheritViewBox ></SvgIcon>
                        </IconButton>
                    ) : null}
                </Box>
                <DialogContent sx={{ p: 0 }} >
                    {children}
                </DialogContent>
                {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
            </Dialog>
        </div>
    );
}
