import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5"

export default function StoreImage() {
    return (
        <div>
            <div className='col-12  signup_Display center'>
                <div className="col-sm-4 center pading">
                    <div className='col-4 name_style'>
                        <span className='icon'>x</span>
                        <span>Store Image</span>
                    </div>
                </div>

                <div className='col-sm-8  center'>
                    <div className="col-6 image_background center">
                        <div className="col-4   StoreAdd_Image  " >
                            <IoCloudUploadOutline></IoCloudUploadOutline>
                            {/* <span>uploade</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}