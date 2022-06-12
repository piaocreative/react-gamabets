import * as React from 'react';
import Image from "next/image";
import PropTypes from 'prop-types';
// import { styled, alpha } from '@mui/material/styles';

import { makeStyles } from '@mui/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Card from '@mui/material/Card';
import CasinoIcon from '@mui/icons-material/Casino';
import gamabetslogo from "../../public/assets/logo.png";
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';

import jackpotClosed from '../../public/assets/jackpot-closed.png';
import jackpotOpen from '../../public/assets/jackpot-open.png';

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const useStyles = makeStyles((theme,) => ({
    cardBgColor: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: (props) => props.gameStatus ? `${theme.palette.jackpot.open.light}` : `${theme.palette.jackpot.closed.light}`,
        borderRadius: '10px',
        width: '169px',
        height: '155px',
        paddingTop: '20px',
        paddingBottom: '17px'
    },
    iconBgColor: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '5px',
        borderLeft: '4px solid',
        borderColor: (props) => props.gameStatus ? `${theme.palette.jackpot.open.dark}` : `${theme.palette.jackpot.closed.dark}`,
    },
}));

export const JackpotGameCard = (props) => {
    console.log(props);
    const classes = useStyles(props);
    const { timeValue = '10:00 AM', countValue = "**", gameStatus = false } = props;
    return (
        <Card elevation={0} className={classes.cardBgColor}>
            <Box className={classes.iconBgColor}>
                <Image
                    quality={100}
                    src={gameStatus ? jackpotOpen : jackpotClosed}
                    loader={myLoader}
                    alt="Picture of Play Button"
                    width={gameStatus ? 14 : 20} //automatically provided
                    height={gameStatus ? 16 : 20} //automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
                <Typography
                    variant="subtitle1"
                    sx={{ fontSize: '15px', lineHeight: '22px', color: '#000', fontWeight: '300', marginLeft: '6px' }}
                >
                    {timeValue}
                </Typography>
            </Box>
            <Typography
                sx={{ fontSize: gameStatus ? '18px' : '16px', lineHeight: '1', color: '#333', fontWeight: 'bold', marginBottom: '6px' }}
            >
                {countValue}
            </Typography>
            <Typography
                sx={{ fontSize: '11px', lineHeight: '15px', color: gameStatus ? '#449E00' : '#FF0000', fontWeight: '300', marginBottom: '21px' }}
            >
                {gameStatus ? 'Running Now' : 'Closed for today'}
            </Typography>
            <Button
                variant="circular"
                onClick={() => { console.log(" handle Buytton Click") }}
                sx={{ backgroundColor: gameStatus ? '#449E00' : '#FF0000' }}
            >
                Play Now
            </Button>
        </Card>
    );
}
JackpotGameCard.defaultProps = {
    timeValue: '10:00 AM',
    countValue: "**",
    gameStatus: false
}

JackpotGameCard.propTypes = {
    timeValue: PropTypes.string,
    countValue: PropTypes.string,
    gameStatus: PropTypes.bool,
};