import { IoImagesOutline } from 'react-icons/io5';
import CloseIcon from '@mui/icons-material/Close';
import { MdOutlineCloudUpload } from "react-icons/md"
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
function ProductImage({ Image, SetImage }) {
    const [file, setFile] = React.useState([]);

    function uploadSingleFile(e) {
        // let ImagesArray = Object.entries(e.target.files).map((e) =>
        //     URL.createObjectURL(e[1])
        // );
        // console.log(Image);
        let ImagesArray=e.target.files
        console.log(ImagesArray)

        SetImage([...Image, ...ImagesArray]);


        // const d = Object.entries(Image).map((e) => {
        //     URL.createObjectURL(e[1])
        // })
        // setFile(d)


    }




    function deleteFile(e) {
        const s = Image.filter((item, index) => index !== e);
        SetImage(s);

    }

    return (
        <form className="Display">

            <div className="col-2">
                <div className="form-group">
                    <input
                        type="file"
                        disabled={Image.length === 5}
                        style={{ display: "none" }}
                        onChange={uploadSingleFile}
                        multiple
                        id="file"
                    />

                    <label htmlFor="file" className="color"   >
                        <div className='border product_imagebox image_logosize1 mt-2'>



                            {
                                <div className='col-12'>
                                    <div className='col-12 center' >
                                        <div className="color">
                                            <MdOutlineCloudUpload ></MdOutlineCloudUpload>
                                        </div>
                                    </div>
                                    <div className='col-12  center'>
                                        <p>Upload</p>
                                    </div>
                                </div>



                            }




                        </div>
                    </label>



                </div>
            </div>
            <div className="col-8">
                <div className="form-group preview Display mt-2">
                    {Image.length > 0 &&
                        Image.map((item, index) => {
                            return (
                                <div key={index} className="Display">
                                    <img src={URL.createObjectURL(item)} alt="" style={{ width: "100px", height: "100px", borderRadius: "1px" }} />
                                   
                                    <span className="MultipulImage">
                                        <IconButton onClick={() => deleteFile(index)}>
                                            <CloseIcon />
                                        </IconButton>
                                    </span>
                                </div>
                            );
                        })}
                </div>

            </div>
            {/* <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={upload}
            >
                Upload
            </button> */}
        </form>
    );
};


export default ProductImage;
