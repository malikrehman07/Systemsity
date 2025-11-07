import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Frontend from './Frontend'

const Index = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Frontend />} />
            </Routes>
        </>
    )
}

export default Index