import React from 'react'
import illustration from '../../Images/social__networking.svg'
import {Link} from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="home py-4 px-8 bg-gray-600">
            <div className="home__sayings mt-4">
                <p className="text-white text-4xl text-left font-bold mb-2">Create Your own social channel considering your</p>
                <p className="text-white text-2xl text-left ">personal needs</p>
                <p className="text-white text-lg my-6 text-left ">Moral Allows you to create your own social platform where you can set a defined perpose of you social server</p>
                <Link to='/register'>
                    <span className="bg-indigo-500 py-3 text-white self-center px-4 rounded-full mt-3 outline-none hover:bg-gray-700">Join Moral</span>
                </Link>
            </div>
            <div className="flex home__illustrations content-center">
                <img src={illustration} alt=""/>
            </div>
        </div>
    )
}

export default Home
