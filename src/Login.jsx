import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigator = useNavigate()

    const gotoHome = () =>{
        navigator('/home');
    }

  return (

        <div style={{ backgroundImage: 'url(https://i.ibb.co/VQmtgjh/6845078.png)', backgroundSize: 'cover', height: '100vh' }} className='d-flex justify-items-center align-items-center'>
            <div className="loginBox">
                <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" />
                <h3>Chatter</h3>
                <form action="" method="post">
                    <div className="inputBox"> <input id="uname" type="text" name="Username" placeholder="Username" />
                        <input id="pass" type="password" name="Password" placeholder="Password" /> 
                    </div>
                    <input type="button" name="" onClick={gotoHome} value="Login" />
                </form>
                <Link to="/forget-password">Forget Password<br></br> </Link>
                <div className="text-center">
                    <Link to="/sign-in">signin</Link>                 
                </div>
            </div>
        </div>

  )
}

export default Login