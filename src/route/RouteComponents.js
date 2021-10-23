import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import DetailProduct from '../components/DetailProduct'

export class RouteComponent extends Component {
    render() {
        return (
            <Fragment>
            <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/detail-product" component={DetailProduct} />
                    </Switch>
            </Router>
            </Fragment>
           
        )
    }
}

export default RouteComponent
