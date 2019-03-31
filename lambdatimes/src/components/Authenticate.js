import React from 'react';
import LogIn from '../components/LogIn';

const Authenticate = App => 
class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

componentDidMount() {
    if(!localStorage.getItem('user')) {
        this.setState({ isLoggedIn: false});
    } else {
        this.setState({ isLoggedIn: true})
    }
}

render() {
    if (this.state.isLoggedIn) return <App />;
    return <LogIn />
}
}


export default Authenticate;