import React from 'react'
import './Download.css'
import ggplay from '../../images/ggplay.png'
import appstore from '../../images/appstore.png'
import down from '../../images/smartcontent.png'

function Download() {
    return (
        <div className='form'>
            <div className="download">
                <h1>Download our App now!</h1>
                <p>The rise of mobile transform the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
                <div className="platform">
                    <img src={ggplay} alt="error" />
                    <img src={appstore} alt="error" />
                </div>
            </div>
            <div className="image">
                <img src={down} alt="error" width='100%' />
            </div>
        </div>
    )
}

export default Download
