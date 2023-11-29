import React from 'react'
import Aside from '../components/Aside'
import Header from '../components/Header'
import University from './University/University'

function Home() {
    return (
        <>
            <Aside />

            <main class="main-wrapper">
                <Header />

                <University />
            </main>
        </>
    )
}

export default Home