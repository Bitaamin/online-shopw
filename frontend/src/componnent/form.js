import React, { useState } from 'react'
import axios from "axios"

export default function form() {

    const init = {
        productName: "",
        categoryId: 0,
        price: 0,
        thumbImage: "",
        images: [],
        salePrecent: 0,
        quantity: 0,
        desc: ""
    };

    const [productItem, setProductItem] = useState(init);



    return (
        <div style={{ display: "block" }}>
            <div className='row'>
                <h2>Бүтээгдэхүүн</h2>
                <div>
                    <label className='form-label'>Бүтээгдэхүүний нэр</label>
                    <input type="text" className='form-control' />
                </div>
                <div>
                    <label className='form-label'>Үнэ</label>
                    <input type="text" className='form-control' placeholder='0' />
                </div>
                <div>
                    <label className='form-label'>Зураг</label>
                    <div>
                        <input type="file" onChange={() => {
                            const url = "https://api.cloudinary.com/v1_1/dgcdselab/upload"

                            const formData = new FormData();

                            let file = e.target.files[0];
                            formData.append("file", file)
                            formData.append("api_key", "196119194898765")
                            formData.append("folder", "shop")
                            formData.append("upload_preset", "sjq65glh")


                            axios
                                .post(url, formData)
                                .then((res) => {
                                    console.log(res);
                                    setProductItem({
                                        ...productItem,
                                        thumbImage: res.data.secure_url,
                                    });
                                })
                                .catch((err) => console.log(err))
                        }} />
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <button className='btn btn-secondary'>Close</button>
                    <button className='btn btn-primary'>Save</button>
                </div>
            </div>
        </div>
    )
}
