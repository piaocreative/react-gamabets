import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#F64401',
    },
    secondary: {
      main: '#19857b',
    },
    switchGreen: {
      main: '#449E00',
    },
    error: {
      main: red.A400,
    },
    jackpot: {
      open: {
        dark: '#449E00',
        light: 'rgba(68,158,0,0.15)'
      },
      closed: {
        dark: '#FF0005',
        light: 'rgba(255,0,5,0.15)'
      }
    },
    singlePana:{
      open:{
        main:'#059E00'
      },
      close:{
        main:'#FF0000'
      }
    },
    gameCard: {
      red: {
        main: '#FF2C30',
        opacity30: 'rgba(255, 44, 48, 0.30)',
        opacity15: 'rgba(255, 44, 48, 0.15)'
      },
      orange: {
        main: '#F64401',
        opacity30: 'rgba(246, 68, 1, 0.30)',
        opacity15: 'rgba(246, 68, 1, 0.15)'
      },
      lightOrange: {
        main: '#FF7700',
        opacity30: 'rgba(255, 119, 0, 0.30)',
        opacity15: 'rgba(255, 119, 0, 0.15)'
      },
      brownYellow: {
        main: '#DBB005',
        opacity30: 'rgba(219, 176, 5, 0.30)',
        opacity15: 'rgba(219, 176, 5, 0.15)'
      },
      blue: {
        main: '#004AC9',
        opacity30: 'rgba(51, 109, 212, 0.30)',
        opacity15: 'rgba(51, 109, 212, 0.15)'
      },
      lightBlue: {
        main: '#01B1B1',
        opacity30: 'rgba(1, 177, 177, 0.30)',
        opacity15: 'rgba(1, 177, 177, 0.15)'
      },
      purple: {
        main: '#8212D6',
        opacity30: 'rgba(130, 18, 214, 0.30)',
        opacity15: 'rgba(130, 18, 214, 0.15)'
      },
      green: {
        main: '#059E00',
        opacity30: 'rgba(5, 158, 0, 0.30)',
        opacity15: 'rgba(5, 158, 0, 0.15)'
      },
      pink: {
        main: '#F300C3',
        opacity30: 'rgba(243, 0, 195, 0.30)',
        opacity15: 'rgba(243, 0, 195, 0.15)'
      },
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'brand' },
          style: {
            textTransform: 'none',
            backgroundColor: '#F64401',
            borderRadius: 8,
            color: '#fff',
            padding: 17.75,
            '&:hover': {
              backgroundColor: '#F64401'
            }
          },
        },
        {
          props: { variant: 'brandCircular' },
          style: {
            textTransform: 'none',
            backgroundColor: '#F64401',
            borderRadius: '30px',
            color: '#fff',
            paddingTop: '18px',
            paddingBottom: '21px',
            lineHeight: '21px',
            fontSize: '16px',
            '&:hover': {
              backgroundColor: '#F64401'
            }
          },
        },
        {
          props: { variant: 'circular' },
          style: {
            textTransform: 'none',
            borderRadius: '30px',
            color: '#fff',
            padding: '7px 19px 7px 19px',
            lineHeight: '16px',
            fontSize: '12px',
            fontWeight: '300',
            '&:hover': {
              backgroundColor: '#F64401'
            }
          },
        },
        {
          props: { variant: 'modalBrandButton' },
          style: {
            textTransform: 'none',
            // backgroundColor: '#F64401',
            justifyContent: 'space-between',
            fontSize: '16px',
            fontWeight: 'normal',
            borderRadius: 9,
            border: '1px solid #F64401',
            color: '#010101',
            lineHeight: 1,
            padding: '20px 18px 23px 22px',
            '&:hover': {
              backgroundColor: '#F64401',
              color: '#fff'
            },
            '& .MuiButton-endIcon': {
              color: '#F64401',
            },
            '&:hover .MuiButton-endIcon': {
              color: '#fff',
            },
          },
        },
        {
          props: { variant: 'onlyText' },
          style: {
            textTransform: 'none',
            paddingRight: 0,
            justifyContent: 'end',
            fontSize: 16,
            fontWeight: 'normal',
            color: '#000',
            '&:hover': {
              backgroundColor: 'transparent'
            }

          },
        },
      ],
    },
    MuiToggleButton: {
      variants: [
        {
          props: { variant: 'brand' },
          style: {
            textTransform: 'none',
            backgroundColor: '#F64401',
            border: '1px solid green',
            borderRadius: 24,
            color: '#fff',
            padding: 17.75

          },
        },
      ],
    }
  },
});

export default theme;
