import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="contact">
                <div className="logo">
                    <a href="/"><strong>App</strong>Lab</a>
                </div>
                <div className="control">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/featues">Key Features</a>
                        </li>
                        <li>
                            <a href="/pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="/iminial">Testiminial</a>
                        </li>
                        <li>
                            <a href="/faq">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-slack-hash"></i>
                    <i class="fab fa-github-square"></i>
                </div>
                <p className='copy'>Copyright &#169; Arifur Rahman Tushar 2019. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
