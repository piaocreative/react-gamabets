import React, { useState } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CasinoIcon from '@mui/icons-material/Casino';
import FormControlLabel from '@mui/material/FormControlLabel';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Switch from '@mui/material/Switch';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { CommonHeaderNav, CommonDialog, SinglePanaSubmission, SinglePanaGameList, GameDetail } from '../../components';
import { calendarIcon, downIcon } from '../../src/customIcons';
import styles from './morningsinglepana.module.css'

const singlePanaGameList = [
    { digit: '6', point: "22", gameType: true, action: () => console.log("action here") },
    { digit: '10', point: "18", gameType: false, action: () => console.log("action here") },
    { digit: '6', point: "22", gameType: true, action: () => console.log("action here") },
    { digit: '10', point: "18", gameType: false, action: () => console.log("action here") },
];

const gameDetailList = [
    { digit: '6', point: "22", gameType: true, },
    { digit: '10', point: "18", gameType: false, },
    { digit: '6', point: "22", gameType: true, },
    { digit: '10', point: "18", gameType: false, },
    { digit: '6', point: "22", gameType: true, },
    { digit: '10', point: "18", gameType: false, },
    { digit: '6', point: "22", gameType: true, },
    { digit: '10', point: "18", gameType: false, },
];

const gameTypeList = [
    { title: 'Morning Gamabet Open', action: () => console.log("handle Click game type select") },
    { title: 'Morning Gamabet Close', action: () => console.log("handle Click game type select") },
];

const gameDateList = [
    { dateValue: '30 July 2021', dayValue: 'Friday', action: () => console.log("handle Click game type select"), openStatus: false },
    { dateValue: '10 Aug 2021', dayValue: 'Tuesday', action: () => console.log("handle Click game type select"), openStatus: true },
    { dateValue: '12 Aug 2021', dayValue: 'Thursday', action: () => console.log("handle Click game type select"), openStatus: true },
    { dateValue: '13 Aug 2021', dayValue: 'Friday', action: () => console.log("handle Click game type select"), openStatus: true },
];

const JackpotDashboard = () => {
    const [openGameSelect, setOpenGameSelect] = useState(false);
    const [openDateSelect, setOpenDateSelect] = useState(false);
    const [openSubmission, setOpenSubmission] = useState(false);
    const [openGameDetail, setOpenGameDetail] = useState(false);

    const handleOpenGameSelect = () => {
        setOpenGameSelect(true);
    };

    const handlCloseGameSelect = () => {
        setOpenGameSelect(false);
    };

    const handleOpenDateSelect = () => {
        setOpenDateSelect(true);
    };

    const handlCloseDateSelect = () => {
        setOpenDateSelect(false);
    };

    const handleOpenSubmission = () => {
        setOpenSubmission(true);
    };

    const handlCloseSubmission = () => {
        setOpenSubmission(false);
    };

    const handleSubmit=()=>{
        setOpenSubmission(true);
    };

    const handleOpenGameDetail = () => {
        setOpenGameDetail(true);
    };

    const handlCloseGameDetail = () => {
        setOpenGameDetail(false);
    };


    return (<div >
        <CommonHeaderNav title="Morning-Single Pana" hasActions />
        <SinglePanaSubmission status={false} open={openSubmission} handleClose={handlCloseSubmission} />
        <CommonDialog title="Select Game Type" open={openGameSelect} handleClose={handlCloseGameSelect} >
            <Grid container spacing={2}>
                {gameTypeList.map(indvGame => (
                    <Grid item xs={12} key={indvGame.title}>
                        <Button
                            variant="modalBrandButton"
                            fullWidth
                            endIcon={<ChevronRightIcon />}
                            onClick={indvGame.action}
                        >
                            {indvGame.title}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </CommonDialog>
        <CommonDialog title="Select Game Date" open={openDateSelect} handleClose={handlCloseDateSelect} >
            <Grid container spacing={2}>
                {gameDateList.map(indvGame => (
                    <Grid item xs={12} key={indvGame.dateValue}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 7px 7px 12px', border: '1px solid black', borderRadius: '8px', borderColor: theme => indvGame.openStatus ? theme.palette.singlePana.open.main : theme.palette.singlePana.close.main }}>
                            <Box>
                                <Typography
                                    sx={{ fontSize: '16px', lineHeight: '21px', color: '#222', marginBottom: '2px' }}
                                >
                                    {indvGame.dateValue}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: '14px', lineHeight: '19px', color: '#999', marginBottom: '8px' }}
                                >
                                    {indvGame.dayValue}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{ fontSize: '16px', lineHeight: '21px', color: '#222', marginRight: '19px', color: theme => indvGame.openStatus ? theme.palette.singlePana.open.main : theme.palette.singlePana.close.main }}
                                >
                                    {indvGame.openStatus ? 'Open' : 'Close'}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </CommonDialog>
        <GameDetail title="Morning Gamebet 09/02/2020" gameDetailData={gameDetailList} open={openGameDetail} handleClose={handlCloseGameDetail}/>
        <Box sx={{ padding: '16px' }}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="pickup-date"
                        // label=""
                        placeholder="Pickup Date"
                        onClick={handleOpenDateSelect}
                        InputProps={{
                            sx: { borderRadius: '17px', borderColor: '#DDDDDD', paddingRight: '10px' },
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="toggle pickup date"
                                        // onClick={handleOpenAttachment}
                                        //   onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        sx={{ marginRight: 0 }}
                                    >
                                        <SvgIcon component={() => calendarIcon} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        inputProps={{ style: { padding: '9px 14px 9px 13px', color: '#000', fontSize: '10px', lineHeight: '16px', height: '100%' } }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        fullWidth
                        id="select-game-type"
                        // label=""
                        placeholder="Select game type"
                        onClick={handleOpenGameSelect}
                        InputProps={{
                            sx: { borderRadius: '17px', borderColor: '#DDDDDD', paddingRight: '10px' },
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="toggle pickup date"
                                        // onClick={handleOpenAttachment}
                                        //   onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        sx={{ marginRight: 0 }}
                                    >
                                        <SvgIcon component={() => downIcon} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        inputProps={{ style: { padding: '9px 14px 9px 13px', color: '#000', fontSize: '10px', lineHeight: '16px', height: '100%' } }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        sx={{ fontSize: '12px', lineHeight: '16px', color: '#222', marginBottom: '10px' }}
                    >
                        Single Digit
                    </Typography>
                    <TextField
                        fullWidth
                        id="enter-digit"
                        // label=""
                        placeholder="Enter Digit"
                        onClick={handleOpenGameDetail}

                        InputProps={{
                            sx: { borderRadius: '17px', borderColor: '#DDDDDD', paddingRight: '10px' },
                            // endAdornment: (
                            //     <InputAdornment position="end" >
                            //         <IconButton
                            //             aria-label="toggle pickup date"
                            //             // onClick={handleOpenAttachment}
                            //             //   onMouseDown={handleMouseDownPassword}
                            //             edge="end"
                            //             sx={{ marginRight: 0 }}
                            //         >
                            //             <SvgIcon component={() => calendarIcon} />
                            //         </IconButton>
                            //     </InputAdornment>
                            // ),
                        }}
                        inputProps={{ style: { padding: '9px 14px 9px 13px', color: '#000', fontSize: '10px', lineHeight: '16px', height: '100%' } }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        sx={{ fontSize: '12px', lineHeight: '16px', color: '#222', marginBottom: '10px' }}
                    >
                        Points
                    </Typography>
                    <TextField
                        fullWidth
                        id="enter-points"
                        // label=""
                        placeholder="Enter points"
                        InputProps={{
                            sx: { borderRadius: '17px', borderColor: '#DDDDDD', paddingRight: '10px' },
                            // endAdornment: (
                            //     <InputAdornment position="end" >
                            //         <IconButton
                            //             aria-label="toggle pickup date"z
                            //             // onClick={handleOpenAttachment}
                            //             //   onMouseDown={handleMouseDownPassword}
                            //             edge="end"
                            //             sx={{ marginRight: 0 }}
                            //         >
                            //             <SvgIcon component={() => calendarIcon} />
                            //         </IconButton>
                            //     </InputAdornment>
                            // ),
                        }}
                        inputProps={{ style: { padding: '9px 14px 9px 13px', color: '#000', fontSize: '10px', lineHeight: '16px', height: '100%' } }}
                    />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <Button
                    variant="circular"
                    color="primary"
                    startIcon={<AddCircleIcon viewPort="0 0 100 100" sx={{ height: '24px', width: '24px' }} />}
                    onClick={() => { console.log(" handle Buytton Click") }}
                    sx={{
                        justifyContent: 'flex-start', backgroundColor: '#F64401', padding: '3px 5px 3px 8px', width: '93px', fontSize: '9px', lineHeight: '12px', '& .MuiButton-startIcon': {
                            marginRight: '4px'
                        },
                    }}
                >
                    Add More
                </Button>
            </Box>
            <SinglePanaGameList gameList={singlePanaGameList} />
        </Box>
        <Paper sx={{ position: 'fixed', display: 'flex', alignItems:'center',justifyContent:'space-between', bottom: 0, left: 0, right: 0, borderRadius: '31px 31px 0 0', padding: '12px 24px 10px 15px' }} elevation={3}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography
                        sx={{ fontSize: '18px', lineHeight: '20px', color: '#222' }}
                    >
                        Bids:
                    </Typography> <Typography
                        sx={{ fontSize: '18px', lineHeight: '20px', color: theme => theme.palette.primary.main, marginLeft:'4px' }}
                    >
                        04
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', marginLeft:'20px' }}>
                    <Typography
                        sx={{ fontSize: '18px', lineHeight: '20px', color: '#222' }}
                    >
                        Points:
                    </Typography> <Typography
                        sx={{ fontSize: '18px', lineHeight: '20px', color: theme => theme.palette.primary.main,  marginLeft:'4px' }}
                    >
                        150
                    </Typography>
                </Box>
            </Box>
            <Button
                variant="circular"
                onClick={handleSubmit}
                sx={{ backgroundColor: theme => theme.palette.primary.main, width: '120px', height: '39px', fontSize: '12px', lineHeight: '16px' }}
            >
                Submit
            </Button>
        </Paper>
    </div>)
};

export default JackpotDashboard;