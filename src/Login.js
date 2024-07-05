import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userInfoAPI } from "./Slices/User.slice";

function Login() {

    const [formInfo, setFormInfo] = useState({ username : 'kminchelle', password : '0lelplR' });
    const userInfo = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginUser = () => {
        dispatch(userInfoAPI(formInfo));
    }

    useEffect(() => {
        if(userInfo.data) {
            navigate('/profile');
        }
    },[userInfo]);

    return (
        <div className="container mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-6">
                    <h4 className="text-center">Login Form</h4>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="username" placeholder="Username" value={formInfo.username} onChange={(event) => setFormInfo({...formInfo, username : event.target.value})} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="password" placeholder="Password" value={formInfo.password} onChange={(event) => setFormInfo({...formInfo, password : event.target.value})} />
                    </div>
                    <button className="btn btn-success" onClick={loginUser}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;