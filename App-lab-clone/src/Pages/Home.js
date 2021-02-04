import React, { Component } from 'react'
import Header from '../Component/Header/Header.jsx'
import Main from '../Component/Main/Main'
import Sponsor from '../Component/Sponsor/Sponsor'
import Awesome from '../Component/Awesome/Awesome'
import Smart from '../Component/Smart/Smart'
import Desinged from '../Component/Desinged/Desinged'
import Why from '../Component/Why/Why'
import Ultimate from '../Component/Ultimate/Ultimate'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Sponsor />
                <Awesome />
                <Smart />
                <Desinged />
                <Why />
                <Ultimate />
            </div>
        )
    }
}

