import React from 'react'
import './Desinged.css'
import Code from '../../images/designcontent.png'

function Desinged() {
    return (
        <div className="box">
            <div className="desinged">
                <div className="desinged__img">
                    <img src={Code} alt="error" width='100%' />
                </div>
                <div className="desinged__info">
                    <div className="contain">
                        <h1>Designed & built by the latest code integration</h1>
                        <p>The rise of mobile devices transforms the way we consume information entirely and the world's most alevant channels such as Facebook</p>
                        <div className="tryit">
                            <a href="try">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Desinged
