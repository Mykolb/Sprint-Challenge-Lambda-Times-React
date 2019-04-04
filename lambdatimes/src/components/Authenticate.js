import React from 'react';
import LogIn from './Login';


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
        this.setState({ loggedIn: false});
    }else{
        this.setState({ loggedIn: true})
    }
}

render() {
    if (this.state.isLoggedIn)
    return 
    <App />;
    return 
    <LogIn />
}
}


export default Authenticate;