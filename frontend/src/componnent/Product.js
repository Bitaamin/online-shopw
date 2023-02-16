import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"


export default function Product() {
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
    const [data, setData] = useState([init]);
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios
            .get("http://localhost:8000/api/product")
            .then((res) => (setData(res.data.result))
            )
    }



    const onDelete = (id) => {
        axios
            .delete(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                console.log(res);
                setData(res.data.result)

                getData()

            })
            .catch((err) => console.log(err));
    };

    const Edit = (id) => {
        axios
            .put(`http://localhost:8000/api/product/${id}`)
            .then((res) => {

            })
    }


    return (
        <div>
            <div>
                <h1>Product name</h1>
                <button className='btn btn-primary' onClick={() => navigate("/products")}>Add product</button>
            </div>
            <div className='table-responsive'>
                <table>
                    <thead className='headTitle'>
                        {/* <th>id</th> */}
                        <th>Name</th>
                        <th>Price</th>
                        {/* <th>Brand</th> */}
                        <th>thumbImage</th>
                        <th>images</th>
                        <th>salePercent</th>
                        <th>desc</th>
                        <th>createdDate</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {data.map(({ price, id, productName, thumbImage, images, salePercent, desc, createdDate }) => (
                            <tr className='productList'>
                                {/* <td>{id}</td> */}
                                <td>{productName}</td>
                                <td>{price}{"$"}</td>
                                {/* <td>{brandName}</td> */}
                                <td><img src={thumbImage} width={70} /></td>
                                <td></td>
                                <td>{salePercent}{"%"}</td>
                                <td>{desc}</td>
                                <td>{createdDate}</td>
                                <td>
                                    <span className='btn btn-warning m-3'  ><a href={`/products/${id}`}>Edit</a></span>
                                    <span className='btn btn-danger' onClick={() => onDelete(id)}>Delete</span>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
}
