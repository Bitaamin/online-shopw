import React from 'react'
import { Outlet } from 'react-router-dom'
import Menus from './Menus'

export default function MainLayout() {
    return (
        <div>
            <div className='row'>
                <div className='col-md-3'>
                    <Menus />
                </div>
                <div className='col-md-12'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
