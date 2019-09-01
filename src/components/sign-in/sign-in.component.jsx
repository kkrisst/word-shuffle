import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

        this.setState({ email: '', password: '' });
    }

    onInputChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Sign in with an existing account</h2>

                <form onSubmit={this.onSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="email"
                        handleChange={this.onInputChange}
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="password"
                        handleChange={this.onInputChange}
                        required />

                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
      }
};

export default SignIn;