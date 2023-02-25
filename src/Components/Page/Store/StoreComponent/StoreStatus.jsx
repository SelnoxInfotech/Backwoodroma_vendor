import React from "react";
import { FormControlLabel, FormLabel, FormControl, FormHelperText, RadioGroup, Radio, } from "@material-ui/core";
export default function Status() {
    return (
        <>
            <div className="col-sm-4 center pading">
                <div className='col-4 name_style'>
                    <span className='icon'></span>
                    <span>Gender</span>
                </div>
            </div>

            <div className='col-sm-8 '>
                <FormControl

                >
                    <FormLabel>Choose Your Gender</FormLabel>
                    <RadioGroup row name="Gender">
                        <FormControlLabel
                            value="f"
                            control={
                                <Radio

                                />
                            }
                            label="Female"
                        />
                        <FormControlLabel
                            value="M"
                            control={
                                <Radio
                                />
                            }
                            label="Male"
                        />

                    </RadioGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
            </div>


        </>
    )
}