import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Login extends Component {
    render() { 
        return ( 
            <Route render={({ history}) => (
                <div className='position-absolute mid-center'>
                    <button
                    id='logout'
                    type='button'
                    className='btn btn-primary mt-4'
                    onClick={() => { history.push('/map') }}
                    >
                    Login
                    </button>
                </div>
            )} />
        );
    }
}
 
export default Login;