import React from 'react'
import './Smart.css'
import Payout from '../../images/content__payout.png'
import Network from '../../images/content__network.png'
import Rewaeds from '../../images/content__rewards.png'

function Smart() {
    return (
        <article>
            <div className="info">
                <div className="details">
                    <h1>
                        Smart jackpots that you may love this anytime & anywhere
                    </h1>
                    <p>
                        The rise of mobile devices tranforms the way we consume infomation entirely the world's most elevant channels such as Facebook
                </p>
                </div>
                <div className="container">
                    <div className="items">
                        <div className="items__content">
                            <div className="img">
                                <img src={Payout} alt="err" />
                            </div>
                            <div className="app__info__features__detail">
                                <h3 style={{ color: "#f55767" }}>Fast Performance</h3>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                            </div>
                        </div>
                        <div className="items__content">
                            <div className="img">
                                <img src={Network} alt="err" />
                            </div>
                            <div className="app__info__features__detail">
                                <h3 style={{ color: "#2563ff" }}>Fast Performance</h3>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                            </div>
                        </div>
                        <div className="items__content">
                            <div className="img">
                                <img src={Rewaeds} alt="err" />
                            </div>
                            <div className="app__info__features__detail">
                                <h3 style={{ color: "#40975f" }}>Fast Performance</h3>
                                <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Smart
