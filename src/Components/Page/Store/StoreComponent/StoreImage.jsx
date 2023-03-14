import React  ,{useRef}from "react";
import { FiUpload } from "react-icons/fi"
import { FcAddImage } from "react-icons/fc"
import Button from '@mui/material/Button';

export default function StoreImage({Name,SetStore,value,Title, refernce}) {
    // const inputRef = useRef(null);
    // console.log(Title)

    const handleimage = (event) => {
    //    console.log(event.target.name)

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
                {/* <div className="col-sm-4 center pading">
                    <div className='col-4 name_style'>
                   
                    </div>
                </div> */}

                <div className='col-sm-12  center'>
                    <div className="col-6 store_image_background center">
                        <div className="col-4   StoreAdd_Image   ">
                            <input type="file"   name={Title||''} id="file" refs={refernce} className="file"onChange={handleimage} />

                            {
                                value ? <div className="center"  >
                                    <img src={URL.createObjectURL(value)} alt="" className='center ' style={{ width: "90px", height: "81px", borderRadius: "1px" }} />
                                    <Button color='success' onClick={resetFileInput}>Cancell </Button>
                                </div> :
                                     <label htmlFor="file"  >
                                    <FiUpload ></FiUpload>
                                    </label>
                            }
                   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}