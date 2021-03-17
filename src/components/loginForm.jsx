import React, { Component, createRef } from 'react';
import {Route} from "react-router-dom";
import Login from './loginBtn';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
          error: '',
        };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }
    
    dismissError() {
        this.setState({ error: '' });
    }
    username=React.createRef();
    
    handleSubmit=()=>{
        <Route render={({ history}) => (
            <div className='position-absolute mid-center'>
                <button
                id='logout'
                type='button'
                className='btn btn-primary'
                onClick={() => { history.push('/map') }}
                >
                Logout
                </button>
            </div>
        )} />
    }
    
    handleUserChange(evt) {
        this.setState({
          username: evt.target.value,
        });
    };
    
    handlePassChange(evt) {
        this.setState({
          password: evt.target.value,
        });
    }
    render() {
        return (
            <div>
                <h1 className="Login">Login</h1> 
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input ref={this.username} type="texr" className="form-control" id="username" value={this.state.username} onChange={this.handleUserChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="text" className="form-control" id="password" value={this.state.password} onChange={this.handlePassChange} />
                    </div>
                </form>
                <Login />
            </div>
        );
    }
}
 
export default LoginForm;