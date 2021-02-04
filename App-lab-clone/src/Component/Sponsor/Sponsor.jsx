import React from 'react'
import './Sponsor.css'
import Southwest from '../../images/logo1.png'
import Anubis from '../../images/logo2.png'
import Alonzo from '../../images/logo3.png'
import Express from '../../images/logo4.png'
import Maniac from '../../images/logo5.png'

function Sponsor() {
    return (
        <section>
            <p>Trusted by companies like</p>
            <div className="sponsor">
                <div className="logo">
                    <img src={Southwest} alt="errorr" />
                </div>
                <div className="logo">
                    <img src={Anubis} alt="errorr" />
                </div>
                <div className="logo">
                    <img src={Alonzo} alt="errorr" />
                </div>
                <div className="logo">
                    <img src={Express} alt="errorr" />
                </div>
                <div className="logo">
                    <img src={Maniac} alt="errorr" />
                </div>
            </div>
        </section>
    )
}

export default Sponsor
