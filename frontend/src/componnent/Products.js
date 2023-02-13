import React from 'react'
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import navigate from 'react'
import { useNavigate } from 'react-router-dom'


export default function Products() {
    const navigate = useNavigate()
    return (
        <div>
            {/* <Form>
                <Form.Group>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form> */}
            <div className='modal' style={{ display: "block" }}>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h3 className='nodal-title'>Add Product</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => }></button>
                        </div>
                        <div className='modal-body'>
                            <form>
                                <label className='form-label text-start'>ProductName</label>
                                <input className='form-control' />

                                <label className='form-label'>Price</label>
                                <input className='form-control' />

                                <label className='form-label'>Brand</label>
                                <input className='form-control' />

                                <label className='form-label'>Category</label>
                                <input className='form-select' />
                            </form>
                        </div>
                        <div className='modal-footer'>
                            <span className='btn btn-danger'>Close</span>
                            <span className='btn btn-primary'>Save</span>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}









