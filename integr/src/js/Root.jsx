

import { Route, Router } from 'react-router';
import {connect} from 'react-redux';
import routes from './Routing';

@connect()
export default class App extends React.Component {
    render() {
        return <div>
            <Router key={Math.random()} history={this.props.history} routes={routes} />
        </div>
    }

}
