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
        createdDate: new Date()
    }
    const [data, setData] = useState([init]);


    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product")
            .then((res) => (setData(res.data.result))
            )
    }, [])
    return (
        <div>
            <div>
                <h1>Product name</h1>
                <button className='btn btn-primary' onClick={() => navigate("/products")}>Add product</button>
            </div>
            <div className='table-responsive'>
                <table>
                    <thead>
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
                        {data.map(({ price, id, productName, brandName, thumbImage, images, salePercent, desc, createdDate }) => (
                            <tr>
                                {/* <td>{id}</td> */}
                                <td>{productName}</td>
                                <td>{price}</td>
                                {/* <td>{brandName}</td> */}
                                <td>{thumbImage}</td>
                                <td>{images}</td>
                                <td>{salePercent}</td>
                                <td>{desc}</td>
                                <td>{createdDate}</td>
                                <td>
                                    <span className='btn btn-warning'>Edit</span>
                                    <span className='btn btn-danger'>Delete</span>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
