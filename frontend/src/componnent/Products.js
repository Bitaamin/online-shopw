import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import { apiKey, folderName, cloudName, uploadPreset } from './constant'


export default function Products() {
    const navigate = useNavigate()
    const { id } = useParams();
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
        if (!id) {
            axios
                .post("http://localhost:8000/api/product", product)
                .then((res) => {
                    if (res.data.result) {
                        navigate("/product")
                    } else {
                        alert("Хадгалахад алдаа гарлаа!")
                    }
                })
        } else {
            axios
                .put(`http://localhost:8000/api/product/${id}`, product)
                .then((res) => {
                    if (res.data.result) {
                        navigate("/product")
                    } else {
                        alert("Хадгалахад алдаа гарлаа!")
                    }
                })
        }
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/product/${id}`, product)
            .then((res) => {
                if (res.data.status) {
                    setProduct(res.data.result)
                } else {
                    alert("Хадгалахад алдаа гарлаа!")
                }
            })
    }, [])






    // console.log("HAHAHA");



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
                <Form.Group>
                    <Form.Label>Thumb Image</Form.Label>
                    <Form.Control type='file' onChange={
                        (e) => {
                            console.log(e.target.files);
                            const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
                            const formData = new FormData();

                            const file = e.target.files[0];
                            formData.append("file", file);
                            formData.append("api_key", apiKey);
                            formData.append("folder", folderName);
                            formData.append("upload_preset", uploadPreset);

                            axios
                                .post(url, formData)
                                .then((res) => {
                                    console.log(res);
                                    setProduct({
                                        ...product,
                                        thumbImage: res.data.secure_url
                                    })


                                }).catch((err) => console.log(err));
                            const arr = [];
                            arr.push(e.target.files)
                        }}
                    />
                </Form.Group>

                <Button className='btn btn-primary' onClick={onSave}>Save</Button>
                <Button className='btn btn-danger' onClick={() => navigate("/product")}>Close</Button>
            </Form >
        </div >
    )
}





