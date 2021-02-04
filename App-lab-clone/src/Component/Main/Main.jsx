import React from 'react'
import './Main.css'
import phone from '../../images/headerphone.png'

function Main() {
    return (
        <main>
            <div className="content">
                <div className="content__info">
                    <h3>#1 Editiors Choice App of 2020</h3>
                    <h1>Best app for your modern lifestyle</h1>
                    <p>Increase productivity with a simple to-do app.app for managing your personal buggets.</p>
                    <div className="container">
                        <div className="tryit">
                            <a href="try">Try for free</a>
                        </div>
                        <div className="demo">
                            Watch demo video
                        </div>
                    </div>
                </div>
                <div className="content__img">
                    <img alt="complex" src={phone} />
                </div>
            </div>
        </main>
    )
}

export default Main
