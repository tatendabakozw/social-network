import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import googleImage from '../../Images/google.svg'
import githubImage from '../../Images/github.svg'
import registerBackground from '../../Images/register_bg_2.png'
import './Login.css'
import Tappable from 'react-tappable'

function Login() {
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

        console.log(response.data.user);
        localStorage.setItem('token', response.data.accessToken)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        history.push('/profile')

      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  // console.log(user)

  return (
    <>
      <main>
        <section className="w-full h-full bg-gray-800"
          style={{
            backgroundImage: `url(${registerBackground})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh"
          }}
        >
          <div
            className="top-0 w-full h-full"

          ></div>
          <div className="login container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col shadow min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={githubImage}
                        />
                        Github
                      </button>
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={googleImage}
                        />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>

                    {/* the sign in form */}
                    <form onSubmit={handleLogin}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                          onChange={e => setPAssword(e.target.value)}
                        />
                      </div>
                      {/* <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div> */}

                      <div className="text-center mt-6">
                          <button
                            onClick={handleLogin}
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="submit"
                            style={{ transition: "all .15s ease" }}
                          >
                            Sign In
                        </button>
                      </div>
                      <div className="flex flex-wrap mt-6">
                        <div className="w-1/2">
                          <a
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            className="text-gray-700"
                          >
                            <small>Forgot password?</small>
                          </a>
                        </div>
                        <div className="w-1/2 text-right">
                          <Link to='/register'
                            className="text-gray-700"
                          >
                            <small>Create new account</small>
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login
