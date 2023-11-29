import React from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';

const Layout = ({ children }) => {
    return (
        <>
            <Aside />

            <main class="main-wrapper">
                <Header />

                {children}
            </main>
        </>
    )
}

export default Layout;