import React from 'react'
import './Login.css'
import bigLogo from '../../Images/bigLogo.png'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'

function Login() {

    // const history = useHistory()

    //signing in with google
    const signInWithGoogle = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
        // <Redirect to='/room'/> 
        //save jwt in cookies
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src={bigLogo} alt="big__logo" />
            </div>
            {/* component */}
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
                    <p className="text-red text-xs italic">Please choose a password.</p>
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                        Confirm Password
                    </label>
                    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
                    <p className="text-red text-xs italic">Please confirm password.</p>
                </div>
                <div className="register__button flex items-center justify-between">
                    <Button className="the__button" type="button">
                        Sign In
                    </Button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                        Already Registered? Login
                    </a>
                </div>
            </div>

            <Button onClick={signInWithGoogle}>Sign In</Button>
        </div>
    )
}

export default Login
