import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',

            passwordMismatchMessage: '',
        }
    }

    onSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            this.setState({
                passwordMismatchMessage: 'The passwords you provided do not match.',
            });
            return;
        } else if (password.length < 6) {
            this.setState({
                passwordMismatchMessage: 'The password should be at least 6 characters long.',
            });
            return;
        }

        try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await createUserProfileDocument(user, { displayName });

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        } catch (error) {
            console.error(error);
        }
    }

    onInputChange = event => {
        const { name, value } = event.target;

        this.setState({
        [name]: value
        });
    }

    render() {
        return (
            <div className='sign-up'>
                <h2>Create a new account</h2>

                <form onSubmit={this.onSubmit}>
                    <FormInput
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        label="display name"
                        handleChange={this.onInputChange}
                        required />
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
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        label="confirm password"
                        handleChange={this.onInputChange}
                        required />

                    <div className='password-mismatch-alert'>{this.state.passwordMismatchMessage}</div>

                    <div className='buttons'>
                        <CustomButton type="submit">Sign up</CustomButton>
                    </div>
                </form>
            </div>
        );
      }
};

export default SignUp;