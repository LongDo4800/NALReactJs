import React from 'react'
import './Ultimate.css'
import dev from '../../images/content__develop.png'
import plan from '../../images/content__plant2.png'
import cloud from '../../images/content__cloud.png'
import support from '../../images/content__suport2.png'

function Ultimate() {
    return (
        <div className="ultimate">
            <div className="content">
                <div className="title">
                    <h1>Ultimate features that  we built</h1>
                    <p>The rise of mobile  devices transform the way we consume infomation entirely.</p>
                </div>
                <div className="items">
                    <div className="items__content">
                        <div className="img">
                            <img src={dev} alt="err" />
                        </div>
                        <div className="app__info__features__detail">
                            <h3>Fast Performance</h3>
                            <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                        </div>
                    </div>
                    <div className="items__content">
                        <div className="img">
                            <img src={plan} alt="err" />
                        </div>
                        <div className="app__info__features__detail">
                            <h3>Fast Performance</h3>
                            <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <div className="items__content">
                        <div className="img">
                            <img src={cloud} alt="err" />
                        </div>
                        <div className="app__info__features__detail">
                            <h3>Fast Performance</h3>
                            <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                        </div>
                    </div>
                    <div className="items__content">
                        <div className="img">
                            <img src={support} alt="err" />
                        </div>
                        <div className="app__info__features__detail">
                            <h3>Fast Performance</h3>
                            <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                        </div>
                    </div>
                </div>
                <div className="tryit">
                    <a href="try">See all</a>
                </div>
            </div>
        </div>
    )
}

export default Ultimate
