import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';

// App component - represents the whole app
class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>hello</h1>
            </div>
        );
    }
}

export default App;
