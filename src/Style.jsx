// import { withStyles } from '@mui/styles';
import { createTheme } from "@mui/material/styles";
export const customTheme = () => {
  return createTheme( {
      overrides: {
          MuiButton: {
              // Button 
              root: {
                 '&.MuiButtonBase-root-MuiButton-root-MuiLoadingButton-root':{
                  backgroundColor:"green"
                 }
              },
            
          },
      },
  });
};
// const styles = {

//     transparentBar: {
//       backgroundColor: 'transparent !important',
//       boxShadow: 'none',
//       paddingTop: '25px',
//       color: '#FFFFFF'
//     },
//     profileBtn:{
//       backgroundColor:"#31B665 !important",
//       color:"#FFFFFF !important"
//     },
//     radiobtn:{
//       color:"#31B665 !important",
//     },
//     radio: {
//     '&$checked': {
//       color: '#4B8DF8'
//     }
//   },
//   checked: {}
//   };
  
//   export default styles