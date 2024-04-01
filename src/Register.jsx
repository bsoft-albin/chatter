import React from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {

    const gradientStyle = {
        background: 'linear-gradient(to right, #3494e6, #ec6ead)',
        backgroundSize: 'cover',
        height: '100vh'
      };

      const validationSchema = Yup.object({
        regUsername: Yup.string().required('Username is required'),
        regEmail: Yup.string().email('Invalid email address').required('Email is required'),
        regpassword: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
      });
      
      const initialValues = {
        regUsername: '',
        regEmail: '',
        regpassword: '',
      };

      const handleSubmit = (values, { setSubmitting }, isValid) => {

        if(isValid){
            console.log('Form submitted:', values);

            // After submission, you can reset the form or perform any other actions
            setSubmitting(false);
        }

      }

  return (
    <div style={gradientStyle} className='d-flex justify-content-center align-items-center'>
        <div className="form-container">
            <div className='Element-Center'>
                <h2>Register in Chatter</h2>
            </div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div className="form-group">
                        <label htmlFor='regUsername'>Username : </label>
                        <Field className='Reginp' id='regUsername' name='regUsername' type="text" placeholder="Username" />
                        <ErrorMessage name="regUsername" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label htmlFor='regEmail'>Email : </label>
                        <Field className='Reginp' id='regEmail' name='regEmail' type="email" placeholder="Email" />
                        <ErrorMessage name="regEmail" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label htmlFor='regpassword'>Email : </label>
                        <Field className='Reginp' id='regpassword' name='regpassword' type="password" placeholder="Password" />
                        <ErrorMessage name="regpassword" component="div" style={{ color: 'red' }} />
                    </div>
                    <div className="chkRequire">
                        <input id="chk" type="checkbox" checked required /> 
                        <label htmlFor="chk" className='agreeTO'>Agree to the terms and conditions</label>
                    </div>
                    <br></br>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="signup btn btn-success ElementLeftRightMargin">Sign Up</button>
                        <button type="button" className="go-back btn btn-primary ElementLeftRightMargin"> <Link style={{textDecoration: 'none',color:'black'
                        }} to='/'>Go Back</Link></button>
                    </div>
                </Form>
            </Formik>
            
        </div>
    </div>
  )
}

export default Register