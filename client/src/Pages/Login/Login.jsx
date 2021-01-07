import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
// import google from '../../Images/google.png'
import axios from 'axios'

function Login({}) {

    const [email, setEmail] = useState('')
    const [password, setPAssword] = useState('')
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/api/v1/login", {
                                        password: password,
                                        email: email,
                                    })
            .then(function (response) {
               
                console.log(response.data.accessToken);
                localStorage.setItem('token', response.data.accessToken)
                localStorage.setItem('user',JSON.stringify(response.data.user))
                history.push('/profile')
                
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }

    // console.log(user)

    return (
        <div>
            {/* component */}
            <div className="grid min-h-screen place-items-center">
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 shadow">
                    <p className="font-2xl">Login To View Your Account</p>
                    <button type="submit" className="w-full py-3 px-1 mt-6 font-medium tracking-widest text-white uppercase bg-red-700 shadow-lg focus:outline-none hover:bg-red-900 hover:shadow-none">
                            Login With Google
                    </button>
                    <button type="submit" className="w-full py-3 mt-6 mb-3 font-medium tracking-widest text-white uppercase bg-blue-700 shadow-lg focus:outline-none hover:bg-blue-900 hover:shadow-none">
                            Login With Facebook
                    </button>
                    <hr/>
                    <p>Or</p>
                    <form className="mt-6" onSubmit={handleLogin}>
                        <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input
                            onChange={e =>setEmail(e.target.value)} 
                            id="email"
                            value={email} 
                            type="email" 
                            name="email" 
                            placeholder="john@mail.com" 
                            autoComplete="email" 
                            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" 
                            required 
                        />
                        <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input
                            onChange={e => setPAssword(e.target.value)} 
                            id="password" 
                            type="password"
                            value={password} 
                            name="password" 
                            placeholder="********" 
                            autoComplete="new-password" 
                            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" 
                            required 
                        />
                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Login
                        </button>
                        <Link to='/register' className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Not registered?</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
