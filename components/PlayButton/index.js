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

import playButton from "../../public/assets/play_button.png";

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  
const PlayButton = ({

}) => {

    return (
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Image
            quality={100}
                src={playButton}
                loader={myLoader}
                alt="Picture of Play Button"
                width={40} //automatically provided
                height={40} //automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
            <Typography
                variant="caption"
                sx={{fontSize:'8px', lineHeight:'8px'}}
            // className={styles.titleSection}
            >
                Play Game
            </Typography>
        </Box>
    );
};

export { PlayButton };
