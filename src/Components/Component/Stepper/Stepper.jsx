import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Store Add Successfull', 'Under proccess','Approval Store'];

export default function HorizontalStepperWithError() {
    const isStepFailed = (step) => {
        return step === 1;
    };

    return (
        <div className='container'>
            <div className='row '>
                <div className='col-12 center d-flex align-items-center justify-content-center ' style={{height: "500px"}}>
                    <Box sx={{ width: '50%' }} >
                        <Stepper activeStep={1}>
                            {steps.map((label, index) => {
                                const labelProps = {};
                                if (isStepFailed(index)) {
                                    labelProps.optional = (
                                        <Typography variant="caption" color="error">
                                           Contact Admin
                                        </Typography>
                                    );

                                    labelProps.error = true;
                                }

                                return (
                                    <Step key={label}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </Box>
                </div>
            </div>

        </div>
    );
}