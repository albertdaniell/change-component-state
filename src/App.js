import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog'

class App extends Component {

    changeContent1 = () => {
        this.setState({blogContent: "The blog content for component 1 has been changed to this"})
    }

    changeContent2 = () => {
        this.setState({blogContent2: "Content for component 2 has been changed"})
    }
    constructor(props) {
        super(props)
        this.state = {
            blogContent: "This is the content for the first component",
            blogContent2: "This is the content for the second component"
        }
    }
    render() {
        return (
            <div className="container">
                <h1>This is a test app
                </h1>
                <Blog blogContent={this.state.blogContent}></Blog>
                <Blog blogContent={this.state.blogContent2}></Blog>
                <br/>
                <button className='btn btn-primary' onClick={() => this.changeContent1()}>Change Component 1</button>
                <br/><br/>
                <button className='btn btn-primary' onClick={() => this.changeContent2()}>Change Component 2</button>

            </div>
        );
    }
}

export default App;
