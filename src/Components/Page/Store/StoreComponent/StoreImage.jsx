import React  ,{useRef}from "react";
import { IoCloudUploadOutline } from "react-icons/io5"
import { FcAddImage } from "react-icons/fc"
import Button from '@mui/material/Button';

export default function StoreImage({Name,SetStore,value,Title, refernce}) {
    // const inputRef = useRef(null);
   
    const handleimage = (event) => {

        SetStore(prevState => ({
            ...prevState,
            [event.target.name]: event.target.files[0]
        }))
       
    };


    const resetFileInput = () => {
        refernce.current.value = null;
        SetStore(prevState => ({
            ...prevState,
            [Name]: null
        }))
    };

    return (
        <div>
            <div className='col-12  signup_Display center'>
                <div className="col-sm-4 center pading">
                    <div className='col-4 name_style'>
                        <span className='icon'><FcAddImage></FcAddImage></span>
                        <span>{Title}</span>
                    </div>
                </div>

                <div className='col-sm-8  center'>
                    <div className="col-6 image_background center">
                        <div className="col-4   StoreAdd_Image   ">
                            <input type="file"  name={Name} id="file" ref={refernce} className="file"onChange={handleimage} />

                            {
                                value ? <div className="center"  >
                                    <img src={URL.createObjectURL(value)} alt="" className='center ' style={{ width: "90px", height: "81px", borderRadius: "1px" }} />
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