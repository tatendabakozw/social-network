import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8080/api/v1/register", {
                                        username: username,
                                        password: password,
                                        email: email,
                                        confirmPassword: confirmPassword
                                    })
            .then(function (response) {
                console.log(response.data);
                history.push('/login')
            })
            .catch(function (error) {
                // setLogginError(error.message)
                console.log(error.message)
            });
    }


    return (
        <div>
            {/* component */}
            <div className="grid min-h-screen place-items-center">
                <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 shadow">
                    {/* {!message ? (<SuccessMessage success={message}/>): null}
                    {!loginError ? (<ErrorMessage error={loginError}/>): null} */}
                <p className="font-2xl">Register For A Free Account</p>
                    <button type="submit" className="w-full py-3 px-1 mt-6 font-medium tracking-widest text-white uppercase bg-red-700 shadow-lg focus:outline-none hover:bg-red-900 hover:shadow-none">
                        Register With Google
                    </button>
                    <button type="submit" className="w-full py-3 mt-6 mb-3 font-medium tracking-widest text-white uppercase bg-blue-700 shadow-lg focus:outline-none hover:bg-blue-900 hover:shadow-none">
                        Register With Facebook
                    </button>
                    <hr />
                    <p>Or</p>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            id="email"
                            value={email}
                            type="email"
                            name="email"
                            placeholder="john@mail.com"
                            autoComplete="email"
                            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            required
                        />
                        <label htmlFor="username" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Username</label>
                        <input
                            onChange={e => setUsername(e.target.value)}
                            id="username"
                            value={username}
                            type="username"
                            name="username"
                            placeholder="Choose Username"
                            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            required
                        />
                        <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            value={password}
                            name="password"
                            placeholder="********"
                            autoComplete="new-password"
                            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            required
                        />
                        <label htmlFor="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
                        <input
                            onChange={e => setConfirmPassword(e.target.value)}
                            id="password-confirm"
                            type="password"
                            value={confirmPassword}
                            name="confirmPassword"
                            placeholder="********"
                            autoComplete="new-password"
                            className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            required
                        />
                        <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Sign up
                        </button>
                        <Link to='/login' className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}


export default Register
