import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
    customHoverFocus: {
      "&:hover, &.Mui-focusVisible": {   backgroundColor: '#f00' }
    }
  }));


  export default useStyles ;