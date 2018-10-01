import React from 'react';
import {Link, Switch, Redirect, Route, withRouter} from 'react-router-dom';

import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {history} = this.props;

        return (
            <div>
                <ul>
                    <li><Link to="/page1">Page 1</Link></li>
                    <li><Link to="/page2">Page 2</Link></li>
                    <li><Link to="/page3">Page 3</Link></li>
                    <li></li>
                    <li><Link to="" onClick={history.goBack}>Go Back</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Redirect exact from="/" to="/page1" />
                    <Route path="/page1" component={Page1} />
                    <Route path="/page2" component={Page2} />
                    <Route path="/page3" component={Page3} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
