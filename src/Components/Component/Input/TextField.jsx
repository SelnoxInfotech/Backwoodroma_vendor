import React from 'react'
import { TextField } from "@material-ui/core";




export default function textField(props) {

 const width=parseInt(props.width)

  return (
    <div>
          <TextField
           type={props.type}
           variant="filled"
           
        //    style={{ minWidth:width }}
           />
    </div>
  )
}
