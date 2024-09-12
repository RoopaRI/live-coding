import React, { useState } from 'react';
import './Form.css';

export default function Form() {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = Object.values(errors).some(error => error !== '');
        if (!hasErrors) {
            window.alert('Form submitted successfully');
        } else {
            window.alert('Please fix the errors before submitting');
        }
    };

    const handleInput = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));

        validateInput(id, value);
    };

    const validateInput = (id, value) => {
        let errorMessages = {};

        if (id === 'userName') {
            const usernameRegex = /^[A-Za-z\s]+$/;
            if (!usernameRegex.test(value)) {
                errorMessages.userName = 'Username should only contain alphabets';
            }
        }

        if (id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessages.email = 'Email should be in this format: xyz@gmail.com';
            }
        }

        if (id === 'password') {
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (!passwordRegex.test(value)) {
                errorMessages.password = 'Password must be at least 8 characters long and include at least one letter and one number';
            }
        }

        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: errorMessages[id] || ''
        }));
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='userName'>Username</label>
            <input
                id='userName'
                type='text'
                placeholder='Enter user name'
                value={formData.userName}
                onChange={handleInput}
            />
            {errors.userName && <p style={{ backgroundColor: 'red', color: 'white' }}>{errors.userName}</p>}

            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                placeholder='Enter email eg:xyz@gmail.com'
                value={formData.email}
                onChange={handleInput}
            />
            {errors.email && <p style={{ backgroundColor: 'red', color: 'white' }}>{errors.email}</p>}

            <label htmlFor='password'>Password</label>
            <input
                id='password'
                type='password'
                placeholder='Enter password'
                value={formData.password}
                onChange={handleInput}
            />
            {errors.password && <p style={{ backgroundColor: 'red', color: 'white' }}>{errors.password}</p>}

            <button type='submit'>Submit</button>
        </form>
    );
}
