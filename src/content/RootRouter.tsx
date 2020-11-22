import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch 
} from 'react-router-dom'

import { IndexPage } from './Index/IndexPage'

export default function RootRouter() {
    return (
        <Router>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path="*">
                    <IndexPage />
                </Route>
            </Switch>
        </Router>
    )
}
