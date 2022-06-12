import React from "react";
import Image from "next/image";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import mobilephone from "../../public/assets/mobile_phone.png";
import backdrop from "../../public/assets/auth_backdrop.png";
import styles from "./logintemplate.module.css";

const Item = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        // color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        // border: '1px solid',
        // borderColor: (theme) =>
        //   theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        // p: 1,
        // borderRadius: 2,
        // textAlign: 'center',
        // fontSize: '0.875rem',
        // fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
};

const AuthTemplate = ({
  title = "",
  btnTitle = "",
  children,
  imageSrc = mobilephone,
  btnOnClick,
  btnLoading = false,
  isContentCenter = true,
  handleBackArrowClick = () => ({}),
}) => {
  const handleBtnClick = (event) => {
    if (btnOnClick) btnOnClick(event);
  };
  return (
    <Container className={styles.container}>
      <Box className={styles.mainBox}>
        <Item className={styles.headerItem}>
          <Box className={styles.statusHeader} />
        </Item>
        <Item className={styles.navItem}>
          <ArrowBack
            className={styles.navSection}
            onClick={handleBackArrowClick}
          />
        </Item>
        <Item className={styles.titleItem}>
          <Typography
            component="h5"
            variant="h5"
            className={styles.titleSection}
          >
            {title}
          </Typography>
        </Item>
        <Item className={styles.inputContentItem}>
          <Paper className={styles.paperSection}>
            <Box
              className={styles.textCenter}
              sx={{
                height: "100%",
                display: "grid",
                gridTemplateAreas: `"imageSec" "inputSec"`,
                gridAutoRows: `minmax(0%,min-content) auto`,
              }}
            >
              <Box sx={{ gridArea: "imageSec" }}>
                <Image
                  src={imageSrc}
                  alt="Picture of mobile phone"
                  width={57} //automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
              </Box>
              <Box
                sx={{
                  gridArea: "inputSec",
                  alignSelf: `${isContentCenter ? "center" : "start"}`,
                }}
              >
                {children}
              </Box>
            </Box>
            <Button
              variant="brand"
              fullWidth
              startIcon={<ArrowForwardIcon />}
              onClick={handleBtnClick}
              disabled={btnLoading}
            >
              {btnLoading ? "Loading..." : btnTitle}
            </Button>
          </Paper>
        </Item>
      </Box>
    </Container>
  );
};

export { AuthTemplate };
