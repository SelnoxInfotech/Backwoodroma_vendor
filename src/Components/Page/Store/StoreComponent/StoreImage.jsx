import React  ,{useRef}from "react";
import { IoCloudUploadOutline } from "react-icons/io5"
import { FcAddImage } from "react-icons/fc"
import Button from '@mui/material/Button';

export default function StoreImage({name,SetStore,value}) {
    const inputRef = useRef(null);
   
    const handleimage = (event) => {
        SetStore(prevState => ({
            ...prevState,
            [name]: event.target.files[0]
        }))
    };


    const resetFileInput = () => {
        inputRef.current.value = null;
        SetStore(prevState => ({
            ...prevState,
            [name]: null
        }))
    };

    return (
        <div>
            <div className='col-12  signup_Display center'>
                <div className="col-sm-4 center pading">
                    <div className='col-4 name_style'>
                        <span className='icon'><FcAddImage></FcAddImage></span>
                        <span>Store Image</span>
                    </div>
                </div>

                <div className='col-sm-8  center'>
                    <div className="col-6 image_background center">
                        <div className="col-4   StoreAdd_Image   ">
                            <input type="file" placeholder='Add Store Image:'  name={name} id="file" ref={inputRef} className="file" variant="outlined" style={{ minWidth: 190, fontSize: 15 }}
                                onChange={handleimage} />

                            {
                                value ? <div className="center"  >
                                    <img src={URL.createObjectURL(value)} alt="" className='center ' style={{ width: "90px", height: "81px", borderRadius: "10px" }} />
                                    <Button color='success' onClick={resetFileInput}>Cancell </Button>
                                </div> :
                                     <label htmlFor="file"  >
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