import React, { useState } from 'react'

let intialstate={
    Image:"",
    price:"",
    description:"",
    catogory:"",
    title:""
}

const Post = () => {
    const [formdata,setformdata]=useState(intialstate)
    console.log(formdata)
  return (
    <div>
        <form>
            <input type="text" value={image}name='image'placeholder="image" /><br></br>
            <input type="text"value={title}name='title'placeholder="title"/><br></br>
            <select value={category}name='category'>
                <option value={""}>select your category</option>
                <option value={"mens clothing"}>mens clothing</option>
                <option value={"jewelery"}>jewelery</option>
                <option value={"electronics"}>electronics</option>
                <option value={"womens clothing"}>womens clothing</option>
           </select>
           <input type="text"value={price}name='price'placeholder="price"/><br></br>
           <input type="text"value={description}name='description'placeholder="description"/><br></br>

        </form>
    </div>
  )
}

export default Post