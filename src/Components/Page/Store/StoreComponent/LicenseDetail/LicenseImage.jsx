import React, { useRef } from "react";
import { IoCloudUploadOutline } from "react-icons/io5"
import { FcAddImage } from "react-icons/fc"
import Button from '@mui/material/Button';

export default function LicenseImage({  SetStore, value }) {
    const LImage = useRef(null);


    const handle = (event) => {
           console.log(event.target.name)

        SetStore(prevState => ({
            ...prevState,
            [event.target.name]: event.target.files[0]
        }))

    };


    const resetFileInput = (e) => {
console.log(e)
        LImage.current.value = null;
        SetStore(prevState => ({
            ...prevState,
            "LicenseDoc": null
        }))

    };

    return (
        <div>
            <div className='col-12  signup_Display center'>
                <div className="col-sm-4 center pading">
                    <div className='col-4 name_style'>
                        <span className='icon'><FcAddImage></FcAddImage></span>
                        <span>License Doc</span>
                    </div>
                </div>

                <div className='col-sm-8  center'>
                    <div className="col-6 image_background center">
                        <div className="col-4   StoreAdd_Image   ">
                            <input type="file" name="LicenseDoc" id="filea" ref={LImage}  className="file" onChange={handle} />

                            {
                                value ? <div className="center"  >
                                    <img src={URL.createObjectURL(value)} alt="" className='center ' style={{ width: "90px", height: "81px", borderRadius: "1px" }} />
                                    <Button color='success' onClick={resetFileInput}>Cancell </Button>
                                </div> :
                                    <label htmlFor="filea"  >
                                        <IoCloudUploadOutline ></IoCloudUploadOutline>
                                    </label>
                            }
                            {/* <IoCloudUploadOutline></IoCloudUploadOutline> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}