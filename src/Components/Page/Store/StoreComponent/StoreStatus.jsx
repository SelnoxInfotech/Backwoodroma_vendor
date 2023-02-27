import React from "react";
import { FormControlLabel, FormLabel, FormControl, FormHelperText, RadioGroup, Radio, } from "@material-ui/core";
export default function Status() {
    return (
        <>
            <div className="col-sm-4 center pading">
                <div className='col-4 name_style'>
                    <span className='icon'></span>
                    <span>Status</span>
                </div>
            </div>

            <div className='col-sm-8 '>
                <FormControl

                >
                    <FormLabel>Choose Your Status</FormLabel>
                    <RadioGroup row name="Status">
                        <FormControlLabel
                            value="Active"
                            control={
                                <Radio

                                />
                            }
                            label="Active"
                        />
                        <FormControlLabel
                            value="Inactive"
                            control={
                                <Radio
                                />
                            }
                            label="Inactive"
                        />

                    </RadioGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
            </div>


        </>
    )
}