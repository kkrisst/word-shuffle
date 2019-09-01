import React from 'react';

import * as emailjs from 'emailjs-com';

import CustomButton from '../../components/custom-button/custom-button.component';

import './contact-page.styles.scss';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            message: ''
        };
    }

    onSubmit = async event => {
        event.preventDefault();

        const template_params = {
            from_name: this.state.email,
            to_name: "kkrisst@gmail.com",
            message_html: this.state.message
        };
         
        const service_id = "default_service";
        const template_id = "template_lZbcJJBZ";

        try {
            emailjs.send(service_id, template_id, template_params, "user_B7g60dJJDwnnQJrGlwOz4").then((resolvedValue) => {
                console.log(resolvedValue);
            }, (error) => {
                console.log(error);
            });
        } catch (error) {
            console.error(error.message);
        }
        
        this.setState({
            email: '',
            message: ''
        });
    }

    onInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }


    render () {
        return (
            <div className='contact-page'>
                <h2>Send us a message and we will get back to you.</h2>

                <form onSubmit={this.onSubmit} id='contactform'>
                    <div className='contact-group'>
                        <label className={`form-input-label`}>Your email:</label>
                        <input
                            className='form-input'
                            id='contact-email'
                            type='email'
                            value={this.state.email}
                            name='email'
                            onChange={this.onInputChange}
                            required />
                    </div>
                    
                    <div className='contact-group'>
                        <label className={`form-input-label`}>Message:</label>
                        <textarea
                            className='form-input'
                            value={this.state.message}
                            rows='10' cols='50'
                            name='message'
                            onChange={this.onInputChange}
                            required
                        >Enter your message here...</textarea>
                    </div>

                    <div className='contact-buttons'>
                        <CustomButton type="submit">Send message</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
};

export default ContactPage;