import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
    customHoverFocus: {
      "&:hover, &.Mui-focusVisible": {   backgroundColor: '#f00' }
    },
<<<<<<< HEAD
    papers:{
      "&.MuiPaper-root ":{
        height: "70%",
       
       
      }
    },
    textFieldCss:{
      "& .MuiInputBase-input":{
        fontSize: '.7rem',
    
=======
    loading: {
      ".MuiLoadingButton" :{
        color: '#f00'
>>>>>>> a6bf795 (chnage)
      }
    },
    loadingBtnText:{
      "& .MuiButton-text":{
        fontSize: ".7rem",
        color: "white",
     
      }
    }
  }));


  export default useStyles ;

