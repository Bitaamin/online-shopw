import React from 'react'
import Form from "react-bootstrap/Form"
<<<<<<< HEAD
import Button from 'react-bootstrap/Button'
import navigate from 'react'
=======
import Button from "react-bootstrap/Button"
>>>>>>> 1aa5f1ca743b5b25c17217c54a77d4a8f99f2e8e
import { useNavigate } from 'react-router-dom'
import axios from "axios"


export default function Products() {
    // const navigate = useNavigate()
    const onSave = () => {
        axios
            .post()
    }
    return (
        <div>
            <Form className='col-md-4'>
                <h3 className='text-start'>Product Add</h3>
                <Form.Group>
                    <Form.Label className='text-start'>Product Name</Form.Label>
                    <Form.Control />
                </Form.Group>
<<<<<<< HEAD
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
=======
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Select>
                    <Form.Label>Category</Form.Label>
                    <Form.Control />
                </Form.Select>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control type='file' />
                </Form.Group>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control type='file' />
                </Form.Group>
                <Button className='btn btn-primary' onClick={onSave()}>Save</Button>
                <Button className='btn btn-danger'>Close</Button>

            </Form>
>>>>>>> 1aa5f1ca743b5b25c17217c54a77d4a8f99f2e8e
        </div >
    )
}









/* <div className='modal' style={{ display: "block" }}>
    <div className='modal-dialog'>
        <div className='modal-content'>
            <div className='modal-header'>
                <h3 className='nodal-title'>Add Product</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => navigate("/products")}></button>
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
</div> */