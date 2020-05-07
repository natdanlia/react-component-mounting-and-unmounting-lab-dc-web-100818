import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { Link } from 'react-router-dom'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .max(255, "its too long")
        .required('Name is required'),
    email: Yup.string()
        .email("Must be a valid email")
        .max(255, "its too long")
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Use 8 characters or more for your password')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Passwords must contain all of the four (4) character types')
        .required('Password is required'),
    password_confirmation: Yup.string()
        // .oneOf([password], 'Passwords are not the same!')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password confirmation is required'),
})

export default function FormikForm() {
    return (
        <div className='row'>
            <div className='small-12 columns'>
                <h2>Create an account</h2>
                <div className='row'>
                    <div className='medium-4 column'>
                        <Formik
                            initialValues={{ name: "", email: "", password: "", password_confirmation: "" }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                setSubmitting(true);
                                const URL = ""
                                fetch(`${URL}`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        Accept: 'application/json'
                                    },
                                    body: JSON.stringify({
                                        user: {
                                            name: values.name,
                                            email: values.email,
                                            password: values.password,
                                            password_confirmation: values.password_confirmation
                                        }
                                    })
                                }).then(
                                    resetForm(), setSubmitting(false), console.log('here')
                                )
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting
                            }) => (
                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className="name-field">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder='Enter your name'
                                                onChange={handleChange}
                                                value={values.name}
                                                onBlur={handleBlur}
                                                alt="name input field"
                                            />
                                            {touched.name && errors.name ? <small className="error">{errors.name}</small> : null}
                                        </div>
                                        <div className="email-field">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder='Enter your email'
                                                onChange={handleChange}
                                                value={values.email}
                                                onBlur={handleBlur}
                                                alt="email input field"
                                            />
                                            {touched.email && errors.email ? <small className="error">{errors.email}</small> : null}
                                        </div>
                                        <div className="password-field">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder='Enter your password'
                                                onChange={handleChange}
                                                value={values.password}
                                                onBlur={handleBlur}
                                                alt="password input field"
                                            />
                                            {touched.password && errors.password ? <small className="error">{errors.password}</small> : null}
                                        </div>
                                        <div className="password-confirmation-field">
                                            <label htmlFor="password_confirmation">Password confirmation</label>
                                            <input
                                                type="password"
                                                name="password_confirmation"
                                                id="password_confirmation"
                                                placeholder='Enter your password confirmation'
                                                onChange={handleChange}
                                                value={values.password_confirmation}
                                                onBlur={handleBlur}
                                                alt="password confirmation input field"
                                            />
                                            {touched.password_confirmation && errors.password_confirmation ? <small className="error">{errors.password_confirmation}</small> : null}
                                        </div>
                                        <button type='submit' disable={isSubmitting} alt='registration button' className="button expanded">Register</button>
                                    </form>
                                )}
                        </Formik>
                        <div>
                            <Link to="/sign_in" alt='redirect to sign in page'>Sign in instead</Link>
                        </div>
                    </div>
                    <div className='medium-6 column'>
                        <p>Passwords must be at least eight (8) alphanumeric characters in length.</p>
                        <p>Passwords must contain all of the following four (4) character types:</p>
                        <ul>
                            <li>English upper case letter (A, B, C, etc.)</li>
                            <li>English lower case letter (a, b, c, etc.)</li>
                            <li>Special character ({`{,}`}, [,], (,), {`<`}, {`>`},:, ', ", ?, /, |, `, ~, !, @, #, $, %, ^, &, *, _, -, +, =, etc.)</li>
                            <li>Arabic number (0, 1, 2, 3, etc.)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

