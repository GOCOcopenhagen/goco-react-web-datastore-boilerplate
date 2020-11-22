import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {AppContext} from '../globals/loadingContext'

import { IndexPage } from './Index/IndexPage'
import {Loading} from '../components/molecules/Loading'

export default function RootRouter() {
    const [loading, constollLoading] = React.useState<Boolean>(false);

    const setLoading = (state:boolean) => {
        constollLoading(state)
        return 0;
    }

    return (
        <AppContext.Provider value={setLoading}>
            {loading && <Loading/>}
            <Router>
                <Switch>
                    <Route exact path="*">
                        <IndexPage />
                    </Route>
                </Switch>
            </Router>
        </AppContext.Provider>
    )
}
