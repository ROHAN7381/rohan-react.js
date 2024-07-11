import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashbord = () => {
    const [data,setdata]=useState([])
    const fatchdata=()=>{
       axios.get("https://fakestoreapi.com/products")
       .then((res)=>setdata(res.data))
       .catch((error)=>console.log(error))
    }
    useEffect(()=>{
    fatchdata()
    },[])
  return (
    <div>
        <h1>PRODUCT</h1>
        {
            data.map((el)=><div key={el.id}>
                <img src={el.image} alt="" height={200}width={200}/>
                </div>)
        }

    </div>
  )
}

export default Dashbord