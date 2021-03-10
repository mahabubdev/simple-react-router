import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Homepage from './components/Home'
import TeamDetail from './components/TeamDetail'
import Notfound from './components/404'


export default function Routers () {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/team/:teamId' component={TeamDetail} />
                <Route path='*' component={Notfound} />
            </Switch>
        </Router>
    )
}