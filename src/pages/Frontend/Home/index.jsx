import React, { useEffect } from 'react'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Choose from './Choose'
import Reviews from './Reviews'

const Home = () => {
    
    return (
        <main>
            <Hero />
            <Services />
            <Projects />
            <Choose />
            <Reviews />
        </main>
    )
}

export default Home