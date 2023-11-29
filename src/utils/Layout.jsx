import React, { useState } from 'react';
import Aside from '../components/Aside';
import Header from '../components/Header';

const Layout = ({ children }) => {
    const [overlay, setOverlay] = useState(false)
    return (
        <>
            <Aside
                overlay={overlay}
            />
            <div className={`overlay ${overlay && "active"}`}
                onClick={() => setOverlay(!overlay)}>
            </div>

            <main class={`main-wrapper ${overlay && "active"}`}>
                <Header
                    overlay={overlay}
                    setOverlay={setOverlay}
                />

                {children}
            </main>
        </>
    )
}

export default Layout;