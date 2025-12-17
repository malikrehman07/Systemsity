import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Career from './Career'
import NoPage from './Misc/NoPage'

const Frontend = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/careers' element={<Career />} />
                <Route path='*' element={<NoPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Frontend