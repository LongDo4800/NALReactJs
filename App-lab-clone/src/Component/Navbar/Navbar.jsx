import React, { useState } from 'react'
import './Narbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [navbar, setNavbar] = useState(false);

    const changeNavbar = () => {
        if (window.pageYOffset > 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbar);
    return (
        <div className={navbar ? "navbar active" : "navbar"}>
            <div className="bar">
                <div className="logo">
                    <a href="/"><strong>App</strong>Lab</a>
                </div>
                <div className="controller">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="feature">Key Feature</a></li>
                        <li><a href="pricing">Pricing</a></li>
                        <li><a href="iminial">Testiminial</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                    <div className="tryit">
                        <a href="try">Try for free</a>
                    </div>
                </div>
                <div className="icons" onClick={handleClick}>
                    {click ? <i class="fas fa-times" /> : <i class="fas fa-bars" />}
                </div>
                <div className={click ? "menu menu-active" : "menu"} onClick={handleClick}>
                    <div className={click ? "menu__mobile menu__mobile-active" : "menu__mobile"}>
                        <p><a href="/">Home</a></p>
                        <p><a href="/product">Key Feature</a></p>
                        <p><a href="/news">Pricing</a></p>
                        <p><a href="/hot">Testiminial</a></p>
                        <p><a href="/saleoff">FAQ</a></p>
                        <p><a style={{ color: '#fff' }} href="try">Try for free</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
