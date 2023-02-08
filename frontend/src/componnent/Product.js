import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"


export default function Product() {
    const navigate = useNavigate()
    const init = {
        name: "",
        price: 0,
        category: "",
        id: 0
    }
    const [data, setData] = useState([init])


    useEffect(() => {
        axios
            .get("http://localhost:3030/api/menu")
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
                        <th>id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {data.map(({ price, category, id, name, brand }) => (
                            <tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td>{brand}</td>
                                <td>{category}</td>
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
