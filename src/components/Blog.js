import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className="container-fluid myblog">
                {this.props.blogContent}
            </div>
        );
    }
}

export default App;
