import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Counter(){
    const [count, setCount] = useState(0);
 
    return(
        <div className='d-flex justify-content-start alight-items-center' style={{height: "100vh"}}>
            <div>
                <p>{count}</p>
                <div className='d-flex'>
                    <button className='btn btn-success me-3'>Increment</button>
                    <button className='btn btn-danger ms-3'>Decrement</button>
                </div>
            </div>
        </div>
    )
}
