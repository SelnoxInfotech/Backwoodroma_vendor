import { AiTwotoneEdit } from "react-icons/ai"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { CiUser } from "react-icons/ci"
import LoadingButton from '@mui/lab/LoadingButton';
const Profile = () => {
    return (
        <div className="container Border ">
            <div className="row">
                <div className="col-12 d-flex  justify-content-end my-4">

                    <h6>Edit</h6>
                    <AiTwotoneEdit color="#31B665" size={40} />

                </div>

            </div>
            <div className="row">
                <div className="col-md-4  d-block userProfile">
                    <Stack  spacing={0}>
                        <Avatar size={30}><CiUser color='white'/></Avatar>
                    </Stack>
                    <h6>Upload Your Photo</h6>
                </div>
                <div className="col-md-6">
                    <div className="d-block">
                        <p>Profile</p>
                        <LoadingButton >Upload</LoadingButton>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Profile