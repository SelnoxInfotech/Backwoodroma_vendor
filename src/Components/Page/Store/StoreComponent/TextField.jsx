import { TextField } from "@mui/material";
import React from "react";
export default function CommenTextFields({ register }) {
    // function Store(props.data) {
    // console.log(props.name)
    // }
    return (
        <div>
            <TextField
                variant="filled"
                fullWidth
                name={"name"}
                inputRef={register({
                    required: "Email is required*."
                })}
                ></TextField>
        </div>
    )
}