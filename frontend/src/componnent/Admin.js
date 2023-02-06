import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Admin() {
    const logo = require("../images/logo.png")
    return (
        <div>
            <div className='d-flex align-items-center mainDiv d-flex justify-content-between'>
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
                <div>
                    <span className='btn btn-light'>Log Out</span>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='list-group'>
                            <a href='/admin' className='list-group-item list-group-item-action'>Dashboard</a>
                            <a href='/product' className='list-group-item list-group-item-action'>Product</a>
                            <a href='/user' className='list-group-item list-group-item-action'>Users</a>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
