import React from 'react'
import './Why.css'
import dev from '../../images/content__develop.png'
import cup from '../../images/content__cup.png'
import could from '../../images/content__cloud.png'
import tool from '../../images/content__tool.png'
import plant from '../../images/content__plan.png'
import support from '../../images/content__support.png'


function Why() {
    return (
        <div className="contai">
            <div className='why'>
                <div className="info">
                    <h1>Why you shoud choose our app</h1>
                    <p>The rise app mobile devices tranforms the way we consume infomation entirely and the world's most elevant channels such as Facebook.</p>
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
                            <img src={cup} alt="err" />
                        </div>
                        <div className="app__info__features__detail">
                            <h3>Fast Performance</h3>
                            <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                        </div>
                    </div>
                    <div className="items__content">
                        <div className="img">
                            <img src={could} alt="err" />
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
                            <img src={tool} alt="err" />
                        </div>
                        <div className="app__info__features__detail">
                            <h3>Fast Performance</h3>
                            <p>Get your blood tests delivered at home collect a sample from the news your blood tests</p>
                        </div>
                    </div>
                    <div className="items__content">
                        <div className="img">
                            <img src={plant} alt="err" />
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
            </div>
        </div>
    )
}

export default Why
