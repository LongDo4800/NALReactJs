import React, { useState } from 'react'
import './Monthly.css'

function Monthly() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className='monthly'>
            <div className="boxs">
                <div className="title">
                    <h1>Get awesome features, without extra charges</h1>
                    <p>The rise of mobile transform the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                </div>
                <div className="select" onClick={handleClick}>
                    <div className={click ? 'month' : 'month active'}>
                        Monthly
                    </div>
                    <div className={click ? 'annual active' : 'annual'}>
                        Annually
                    </div>
                </div>
                <div className="card">
                    <div className="free">
                        <div className="head">
                            <p><strong>$0</strong>/ month</p>
                            <h2>Business Class</h2>
                            <p>For small teams of office</p>
                        </div>
                        <div className="info">
                            <p>Drag & Drop Builder</p>
                            <p>1,000's of Template</p>
                            <p>Blog Support Tools</p>
                            <p>eCommerce Store</p>
                        </div>
                        <div className="tryit">
                            <a href="try">Start free trail</a>
                        </div>
                    </div>
                    <div className="pro">
                        <div className="head">
                            <p><strong>$99</strong>/ month</p>
                            <h2>Pro Master</h2>
                            <p>For Best opportunities</p>
                        </div>
                        <div className="info">
                            <p>Drag & Drop Builder</p>
                            <p>1,000's of Template</p>
                            <p>Blog Support Tools</p>
                            <p>eCommerce Store</p>
                        </div>
                        <div className="tryit">
                            <a href="try">Subscribe Now</a>
                        </div>
                        <div className="trail">
                            <span>Or Start 14 days trail</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Monthly
