import React, {useContext} from 'react'
import axios from 'axios'
import AuthContext from '../../context/AuthContext';
import './login.css'

function LogOut() {

    const {getLoggedIn} = useContext(AuthContext);

    async function logOut() {
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        window.location.href = "/";
    }

    return (
        <div>
            <a className="log_out_btn" onClick={logOut}>
                Log out
            </a>
        </div>
    )
}

export default LogOut
