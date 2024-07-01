import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Products from './Products'
import Project from './Project'
import Prote from '../Pages/Prote'

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Project/:id' element={<Project />}></Route>
                <Route path='/Products' element={
                    <Prote>
                        <Products />
                    </Prote>
                }></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='*' element={<h1>Doe's page</h1>} />
            </Routes>
        </div>
    )
}

export default Allroutes