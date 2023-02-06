import React from 'react';
// import Login from './Login';
import { useNavigate } from 'react-router-dom'


export default function Nav() {
    const navigate = useNavigate();
    const logo = require("../images/logo.png")
    return (
        <div className='mainDiv'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <img src={logo} alt='company logo' className='img' />
                    <div className=' brand m-3'>
                        <h1 className='name'>One Click</h1>
                        <h3 className='shop'>Online Shop</h3>
                    </div>
                </div>
                <form className='d-flex align-items-center'>
                    <input className='form-control search' type="search" placeholder='Хайлт оруулна уу.' />
                    <button className="btn btn-outline-success searchBtn" type="submit">Search</button>
                </form>
                <div className='d-flex align-items-center'>
                    <ul className='d-flex align-items-center'>
                        <li className='m-3 text-light'>
                            <a>Home</a>
                        </li>
                        <li className='m-3 text-light'>
                            <a>About</a>
                        </li>
                        <li className='m-3 text-light'>
                            <a>Contact</a>
                        </li>
                        <li className='m-3'>
                            <a className='btn btn-primary signBtn'>Sign In</a>
                        </li>
                        <li className='m-3'>
                            <a className='btn btn-primary' onClick={() => {
                                navigate("/login")
                            }}>Log In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
