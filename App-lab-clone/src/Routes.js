import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as page from './Pages'

const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path='/' component={page.HomePage}></Route>
            <Route exact path='/features' component={page.FeaturePage}></Route>
            <Route exact path='/pricing' component={page.PricingPage}></Route>
            <Route exact path='/iminial' component={page.IminialPage}></Route>
            <Route exact path='/faq' component={page.FAQPage}></Route>
            <Route exact path='/try' component={page.TryPage}></Route>
        </Switch>
    </BrowserRouter>
)
export default Routes;


