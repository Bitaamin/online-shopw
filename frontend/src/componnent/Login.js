import React from 'react'
import { useNavigate } from "react-router-dom"
import Admin from './Admin';

export default function Login() {
    const navigate = useNavigate();
    return (
        <>
            <div className="modal" style={{ display: "block" }} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Admin</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <label className='form-label'>Username</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div>
                                <label className='form-label'>Password</label>
                                <input className='form-control' type="text" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                navigate("/admin")
                            }}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
