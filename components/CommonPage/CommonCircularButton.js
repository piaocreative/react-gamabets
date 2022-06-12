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
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

export const CommonCircularButton = (props) => {
    const { title, customIcon = false, onClick, isDisabled = false, customProps } = props;
    return (
        <Button
            {...customProps}
            variant="brandCircular"
            fullWidth
            disabled={isDisabled}
            startIcon={customIcon ? customIcon : <ArrowForwardSharpIcon />}
            onClick={onClick}>
            {title}
        </Button>
    );
}
