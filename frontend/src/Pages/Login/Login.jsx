import React from 'react'
import './Login.css'
import bigLogo from '../../Images/bigLogo.png'
import { Button } from '@material-ui/core'
import {auth, provider } from '../../firebase'

function Login() {

    // const history = useHistory()
     
    //signing in with google
    const signInWithGoogle = () =>{
        auth.signInWithPopup(provider).catch((error)=> alert(error.message))
        // <Redirect to='/room'/> 
        //save jwt in cookies
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src={bigLogo} alt="big__logo"/>
            </div>
            <Button onClick={signInWithGoogle}>Sign In</Button>
        </div>
    )
}

export default Login
