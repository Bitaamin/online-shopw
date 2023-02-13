import React, { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import axios from "axios"


export default function Products() {
    const navigate = useNavigate()
    const init = {
        id: 0,
        price: 0,
        productName: "",
        thumbImage: "",
        images: "",
        salePercent: 0,
        desc: "",
        createdDate: 0
    }

    const [product, setProduct] = useState(init)

    const onSave = () => {
        axios
            .post("http://localhost:8000/api/product", product)
            .then((res) => {
                if (res.data.result) {
                    navigate("/product")
                } else {
                    alert("Хадгалахад алдаа гарлаа!")
                }
            })
    }

    return (
        <div>
            <Form className='col-md-4'>
                <h3 className='text-start'>Product Add</h3>
                <Form.Group>
                    <Form.Label className='text-start'>Product Name</Form.Label>
                    <Form.Control value={product.productName} onChange={(e) => setProduct({ ...product, productName: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>salePercent</Form.Label>
                    <Form.Control value={product.salePercent} onChange={(e) => setProduct({ ...product, salePercent: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control value={product.desc} onChange={(e) => setProduct({ ...product, desc: e.target.value })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control value={product.createdDate} onChange={(e) => setProduct({ ...product, createdDate: e.target.value })} />
                </Form.Group>
                <Form.Select>
                    <Form.Label>Category</Form.Label>
                    <Form.Control value={product.desc} onChange={(e) => setProduct({ ...product, desc: e.target.value })} />
                </Form.Select>
                {/* <Form.Group>
                    <Form.Label>Thumb Image</Form.Label>
                    <Form.Control type='file' value={product.thumbImage} onChange={(e) => setProduct({ ...product, thumbImage: e.target.files })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Images</Form.Label>
                    <Form.Control type='file' value={product.images} onChange={(e) => setProduct({ ...product, images: e.target.files })} />
                </Form.Group> */}
                <Button className='btn btn-primary' onClick={onSave}>Save</Button>
                <Button className='btn btn-danger'>Close</Button>
            </Form >
        </div >
    )
}
