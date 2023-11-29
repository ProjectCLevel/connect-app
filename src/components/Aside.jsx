import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Aside() {
    return (
        <Wrapper className="sidebar-nav-wrapper">
            <div className="navbar-logo">
                <a href="index.html">
                    <h2>Connect App</h2>
                </a>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li className="nav-item nav-item-has-children">
                        <a
                            href="#0"
                            data-bs-toggle="collapse"
                            data-bs-target="#ddmenu_1"
                            aria-controls="ddmenu_1"
                            aria-expanded="true"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.74999 18.3333C12.2376 18.3333 15.1364 15.8128 15.7244 12.4941C15.8448 11.8143 15.2737 11.25 14.5833 11.25H9.99999C9.30966 11.25 8.74999 10.6903 8.74999 10V5.41666C8.74999 4.7263 8.18563 4.15512 7.50586 4.27556C4.18711 4.86357 1.66666 7.76243 1.66666 11.25C1.66666 15.162 4.83797 18.3333 8.74999 18.3333Z" />
                                    <path
                                        d="M17.0833 10C17.7737 10 18.3432 9.43708 18.2408 8.75433C17.7005 5.14918 14.8508 2.29947 11.2457 1.75912C10.5629 1.6568 10 2.2263 10 2.91665V9.16666C10 9.62691 10.3731 10 10.8333 10H17.0833Z" />
                                </svg>
                            </span>
                            <span className="text">Boshqaruv</span>
                        </a>
                        <ul id="ddmenu_1" className="collapse show dropdown-nav">
                            <li>
                                <NavLink to={"/university"}> Universitetlar </NavLink>
                            </li>

                            <li>
                                <a href="index.html"> Aloqa </a>
                            </li>

                            <li>
                                <a href="index.html"> Postlar </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item nav-item-has-children">
                        <a
                            href="#0"
                            data-bs-toggle="collapse"
                            data-bs-target="#ddmenu_2"
                            aria-controls="ddmenu_2"
                            aria-expanded="true"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.8097 1.66667C11.8315 1.66667 11.8533 1.6671 11.875 1.66796V4.16667C11.875 5.43232 12.901 6.45834 14.1667 6.45834H16.6654C16.6663 6.48007 16.6667 6.50186 16.6667 6.5237V16.6667C16.6667 17.5872 15.9205 18.3333 15 18.3333H5.00001C4.07954 18.3333 3.33334 17.5872 3.33334 16.6667V3.33334C3.33334 2.41286 4.07954 1.66667 5.00001 1.66667H11.8097ZM6.66668 7.70834C6.3215 7.70834 6.04168 7.98816 6.04168 8.33334C6.04168 8.67851 6.3215 8.95834 6.66668 8.95834H10C10.3452 8.95834 10.625 8.67851 10.625 8.33334C10.625 7.98816 10.3452 7.70834 10 7.70834H6.66668ZM6.04168 11.6667C6.04168 12.0118 6.3215 12.2917 6.66668 12.2917H13.3333C13.6785 12.2917 13.9583 12.0118 13.9583 11.6667C13.9583 11.3215 13.6785 11.0417 13.3333 11.0417H6.66668C6.3215 11.0417 6.04168 11.3215 6.04168 11.6667ZM6.66668 14.375C6.3215 14.375 6.04168 14.6548 6.04168 15C6.04168 15.3452 6.3215 15.625 6.66668 15.625H13.3333C13.6785 15.625 13.9583 15.3452 13.9583 15C13.9583 14.6548 13.6785 14.375 13.3333 14.375H6.66668Z" />
                                    <path
                                        d="M13.125 2.29167L16.0417 5.20834H14.1667C13.5913 5.20834 13.125 4.74197 13.125 4.16667V2.29167Z" />
                                </svg>
                            </span>
                            <span className="text">Tahlil</span>
                        </a>
                        <ul id="ddmenu_2" className="collapse show dropdown-nav">
                            <li>
                                <NavLink to={"/statistics"}> Statistika </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item nav-item-has-children">
                        <a
                            href="#0"
                            data-bs-toggle="collapse"
                            data-bs-target="#ddmenu_4"
                            aria-controls="ddmenu_4"
                            aria-expanded="true"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.66666 5.41669C1.66666 3.34562 3.34559 1.66669 5.41666 1.66669C7.48772 1.66669 9.16666 3.34562 9.16666 5.41669C9.16666 7.48775 7.48772 9.16669 5.41666 9.16669C3.34559 9.16669 1.66666 7.48775 1.66666 5.41669Z" />
                                    <path
                                        d="M1.66666 14.5834C1.66666 12.5123 3.34559 10.8334 5.41666 10.8334C7.48772 10.8334 9.16666 12.5123 9.16666 14.5834C9.16666 16.6545 7.48772 18.3334 5.41666 18.3334C3.34559 18.3334 1.66666 16.6545 1.66666 14.5834Z" />
                                    <path
                                        d="M10.8333 5.41669C10.8333 3.34562 12.5123 1.66669 14.5833 1.66669C16.6544 1.66669 18.3333 3.34562 18.3333 5.41669C18.3333 7.48775 16.6544 9.16669 14.5833 9.16669C12.5123 9.16669 10.8333 7.48775 10.8333 5.41669Z" />
                                    <path
                                        d="M10.8333 14.5834C10.8333 12.5123 12.5123 10.8334 14.5833 10.8334C16.6544 10.8334 18.3333 12.5123 18.3333 14.5834C18.3333 16.6545 16.6544 18.3334 14.5833 18.3334C12.5123 18.3334 10.8333 16.6545 10.8333 14.5834Z" />
                                </svg>
                            </span>
                            <span className="text">Profil </span>
                        </a>
                        <ul id="ddmenu_4" className="collapse show dropdown-nav">
                            <li>
                                <a href="alerts.html"> Foydalanuvchi profili </a>
                            </li>
                            <li>
                                <a href="buttons.html"> Profil sozlamalari </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    )
}

export default Aside

const Wrapper = styled.aside`
    overflow: auto;
`