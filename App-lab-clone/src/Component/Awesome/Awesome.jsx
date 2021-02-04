import React from 'react'
import './Awesome.css'
import Phone from '../../images/phonecontent.png'
import Fast from '../../images/content__speed.png'
import Prototyping from '../../images/content__prototy.png'
import Vector from '../../images/content__vector.png'

function Awesome() {
    return (
        <div className='container'>
            <div className="apps">
                <div className="app__img">
                    <img src={Phone} alt="error" width='100%' />
                </div>
                <div className="app__info">
                    <h1>Awesome apps features</h1>
                    <p>Increase productivity with a simple to-do app.app for managing your personal buggets.</p>
                    <div className="app__info__features">
                        <div className="img">
                            <img src={Fast} alt="err" />
                        </div>
                        <div className="app__info__features__detail">
                            <h3 style={{ color: "#f55767" }}>Fast Performance</h3>
                            <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                        </div>
                    </div>
                    <div className="app__info__features">
                        <div className="img">
                            <img src={Prototyping} alt="err" />
                        </div>
                        <div className="app__info__features__detail">
                            <h3 style={{ color: "#2563ff" }}>Fast Performance</h3>
                            <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                        </div>
                    </div>
                    <div className="app__info__features">
                        <div className="img">
                            <img src={Vector} alt="err" />
                        </div>
                        <div className="app__info__features__detail">
                            <h3 style={{ color: "#40975f" }}>Fast Performance</h3>
                            <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awesome
