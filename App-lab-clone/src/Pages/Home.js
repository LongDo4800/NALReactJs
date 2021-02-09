import React, { Component } from 'react'
import Header from '../Component/Header/Header.jsx'
import Main from '../Component/Main/Main'
import Sponsor from '../Component/Sponsor/Sponsor'
import Awesome from '../Component/Awesome/Awesome'
import Smart from '../Component/Smart/Smart'
import Desinged from '../Component/Desinged/Desinged'
import Why from '../Component/Why/Why'
import Ultimate from '../Component/Ultimate/Ultimate'
import Monthly from '../Component/Monthly/Monthly'
import Meet from '../Component/Meet/Meet'
import Asked from '../Component/Asked/Asked'
import Download from '../Component/Downloadnow/Download'
import Footer from '../Component/Footer/Footer'
import Navbar from '../Component/Navbar/Navbar'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <Main />
                <Sponsor />
                <Awesome />
                <Smart />
                <Desinged />
                <Why />
                <Ultimate />
                <Monthly />
                <Meet />
                <Asked />
                <Download />
                <Footer />
            </div>
        )
    }
}

