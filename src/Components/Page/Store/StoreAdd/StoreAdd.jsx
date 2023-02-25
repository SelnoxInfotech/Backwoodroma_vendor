import { TextField } from "@material-ui/core";
import React from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Checkmark } from 'react-checkmark'
import StoreImage from "../StoreComponent/StoreImage";
export default function StoreAdd() {
    const [SuccessFull ,  SetSuccessFull] = React.useState(false)
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );
    React.useEffect(() => {
        console.log(editorState);
    }, [editorState]);

    return (
        <div>
            <div className='container-fluid Border pading'>
                <div className='row   '>
                    <div className={'col-12  ' + (SuccessFull && "blur") }>
                        <div className='col-6   signup_margin'>
                            <span>STORE DETAILS</span>
                        </div>
                        <div className="col-12 login_width  signup_field"   >
                            <div className="container-fluid">
                                <div className=" row gap justify-content-center">
                                    <div className='col-12  signup_Display center'>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'>x</span>
                                                <span>Store Name</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-8 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                    </div>
                                    <div className='col-12  signup_Display center'>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> </span>
                                                <span>Store Type</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-8 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                    </div>
                                    <div className='col-12  signup_Display '>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> </span>
                                                <span>Country</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-2 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                        <div className="col-6 signup_Display">
                                            <div className='col display name_style'>
                                                <span className='icon'> </span>
                                                <span>Country</span>
                                            </div>
                                            <div className='col-sm-2 '>
                                                <TextField
                                                    variant="filled"
                                                    fullWidth
                                                ></TextField>
                                            </div>
                                            <div className='col display name_style'>
                                                <span className='icon'>x </span>
                                                <span>Country</span>
                                            </div>
                                            <div className='col-sm-2 '>
                                                <TextField
                                                    variant="filled"
                                                    fullWidth
                                                ></TextField>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12  signup_Display center'>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> </span>
                                                <span>Address</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-8 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                    </div>
                                    <div className='col-12  signup_Display '>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'> </span>
                                                <span>Country</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-3 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                        <div className="col-5 signup_Display">
                                            <div className='col display name_style'>
                                                <span className='icon'> </span>
                                                <span>Country</span>
                                            </div>
                                            <div className='col '>
                                                <TextField
                                                    variant="filled"
                                                    fullWidth
                                                ></TextField>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12  signup_Display center'>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'>x</span>
                                                <span>Store Name</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-8 '>
                                            <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField>
                                        </div>
                                    </div>
                                    <div className='col-12  signup_Display center'>
                                        <div className="col-sm-4 center pading">
                                            <div className='col-4 name_style'>
                                                <span className='icon'>x</span>
                                                <span>Store Image</span>
                                            </div>
                                        </div>

                                        <div className='col-sm-8 '>
                                            <div>
                                                <div style={{ border: "1px solid black", padding: '2px', minHeight: '300px' }}>
                                                    <Editor
                                                        editorState={editorState}
                                                        onEditorStateChange={setEditorState}
                                                    />
                                                </div>
                                            </div>
                                            {/* <TextField
                                                variant="filled"
                                                fullWidth
                                            ></TextField> */}
                                        </div>
                                    </div>
                                    <StoreImage></StoreImage>
                                    <div className={'col-12  '}>
                                        <div className='col-6   '>
                                            <span>STORE DETAILS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {
                        SuccessFull && <div className="check_mark">
                            <Checkmark size="150px"></Checkmark>

                        </div>
                   }
                </div>
            </div>

        </div>
    )
}