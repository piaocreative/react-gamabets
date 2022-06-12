import React from "react";
import Image from "next/image";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import Radio from '@mui/material/Radio';

import { colorMicIcon, colorPhoneIcon, colorDbIcon } from '../../src/customIcons';

import styles from './loginpermission.module.css'

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

const permissionList = []

const LoginPermission = () => {

    const handleAllowAccess = () => {
        console.log(" Handle Allow Access");
    }
    return <div >

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 30px 24px 30px',
        }}>
            <Box sx={{ mb: '59px', mt: '97px', textAlign: 'center' }}>
                <Typography
                    sx={{ fontSize: '20px', lineHeight: '30px', color: '#000', fontWeight: 'bold' }}
                >
                    Ok ! We Need Some Access
                </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'minmax(0,58px) minmax(0,195px) max-content', alignItems: 'center', mb: '59px' }}>
                <Box sx={{}}>
                    <SvgIcon className={styles.customIcon} component={() => colorMicIcon} inheritViewBox></SvgIcon>
                </Box>
                <Box sx={{ mr: '44px' }}>
                    <Typography
                        sx={{ fontSize: '17px', lineHeight: '26px', color: '#000', fontWeight: 'bold' }}
                    >
                        Record Permission
                    </Typography>
                    <Typography
                        sx={{ fontSize: '10px', lineHeight: '16px', color: '#000' }}
                    >
                        This permission is required for Sending Audio Messagesto Gama Bets Customer Support.
                    </Typography>
                </Box>
                <Box>
                    <Radio
                        size="small"
                        checked={true}
                        // onChange={handleChange}
                        value="a"
                        name="record-permission"
                        inputProps={{ 'aria-label': 'Record Permission' }}
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'minmax(0,58px) minmax(0,195px) auto', alignItems: 'center', mb: '59px' }}>
                <Box sx={{}}>
                    <SvgIcon className={styles.customIcon} component={() => colorPhoneIcon} inheritViewBox ></SvgIcon>
                </Box>
                <Box sx={{ mr: '44px' }}>
                    <Typography
                        sx={{ fontSize: '17px', lineHeight: '26px', color: '#000', fontWeight: 'bold' }}
                    >
                        Call Permission
                    </Typography>
                    <Typography
                        sx={{ fontSize: '10px', lineHeight: '16px', color: '#000' }}
                    >
                        This permission is required for Calling to Gama Bets Customer Support.
                    </Typography>
                </Box>
                <Box>
                    <Radio
                        size="small"
                        checked={true}
                        // onChange={handleChange}
                        value="a"
                        name="call-permission"
                        inputProps={{ 'aria-label': 'Call Permission' }}
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'minmax(0,58px) minmax(0,195px) auto', alignItems: 'center', mb: '110px' }}>
                <Box sx={{}}>
                    <SvgIcon className={styles.customIcon} component={() => colorDbIcon} inheritViewBox ></SvgIcon>
                </Box>
                <Box sx={{ mr: '44px' }}>
                    <Typography
                        sx={{ fontSize: '17px', lineHeight: '26px', color: '#000', fontWeight: 'bold' }}
                    >
                        Storage Permission
                    </Typography>
                    <Typography
                        sx={{ fontSize: '10px', lineHeight: '16px', color: '#000' }}
                    >
                        This permission is required to access Storage.
                    </Typography>
                </Box>
                <Box>
                    <Radio
                        size="small"
                        checked={true}
                        // onChange={handleChange}
                        value="a"
                        name="storage-permission"
                        inputProps={{ 'aria-label': 'Storage Permission' }}
                    />
                </Box>
            </Box>


            <Box sx={{ marginBottom: '100px' }}>
                <Button
                    variant="brand"
                    fullWidth
                    // startIcon={<ArrowForwardIcon />}
                    onClick={handleAllowAccess}
                // disabled={loggingUserIn}
                // onClick={handleBtnClick}
                // disabled={ }
                >
                    Allow All Access
                    {/* {btnLoading ? "Loading..." : btnTitle} */}
                    {/* {loggingUserIn ? "Loading..." : btnTitle} */}
                </Button>
            </Box>
        </Box>
    </div>
};

export default LoginPermission;