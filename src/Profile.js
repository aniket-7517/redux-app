import { useSelector } from "react-redux";

function Profile() {

    const userInfo = useSelector((state) => state.users);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h4>Profile</h4>
                    <p>UserName : {userInfo.data?.username}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;