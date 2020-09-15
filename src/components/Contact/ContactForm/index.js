import React, { useState } from 'react';
import { validateEmail } from '../../../assets/js/verifyEmail';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section className="container-fluid contact-section">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 align-items-left">
                    <form id='contact-form' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor='name'>Name:</label>
                            <input className="form-control" type='text' defaultValue={name} onBlur={handleChange} name='name' />
                        </div>
                        <div className="form-group">
                            <label htmlFor='email'>Email address:</label>
                            <input className="form-control" type='email' defaultValue={email} name='email' onBlur={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='message'>Message:</label>
                            <textarea className="form-control" name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                        </div>
                        {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                        )}
                        <button className="btn btn-dark" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;