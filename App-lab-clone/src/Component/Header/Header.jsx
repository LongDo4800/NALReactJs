import React from 'react'
import './Header.css'

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="/"><strong>App</strong>Lab</a>
                </div>
                <div className="navbar">
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
            </nav>
        </header>
    )
}

export default Header
