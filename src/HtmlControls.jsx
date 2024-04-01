import React from 'react'
import Dashboard from './Dashboard'
import { Modal } from 'react-bootstrap'
import InputControls from './components/inputElements/InputControls'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import ErrorContainer from './components/ErrorContainer'
import LabelControl from './components/LabelControl'

const HtmlControls = () => {


  const myFormik = useFormik({
    initialValues : {
      userName : "",
      userMail : "",
      userPassword : "",
      userAge : 0,
      languages : [],
      usersColor : '',
      userDate : '',
      userFile : []

    },
    validationSchema : Yup.object({
      userName : Yup.string().required("name is required"),
      userMail : Yup.string().required("email is required"),
      userPassword : Yup.string().required("password is required"),
      userAge : Yup.number().required('age is required').min(1, 'age must be greater than 0'),
      languages: Yup.array().min(1, 'At least one checkbox must be checked'),
      userDate : Yup.date().required('Date is required'),
      userFile : Yup.array().min(1, 'At least one file must be selected')
    }),
    onSubmit : (values) => {
      //const { firsttext } = values
      console.log(values)
    }
  })

  return (
    <div className=''>
        <Dashboard />
        <div className='scrollable width-heigth'>

            <h3>User Form</h3>
            <form onSubmit={myFormik.handleSubmit} className='d-flex justify-content-center align-items-center'>
              <section style={{width : '800px'}}>
                <div className='row'>
                  <div className='col-md-6'>
                    <LabelControl HtmlFor="userName" value="User Name :" />
                    <InputControls  customType='TEXT' formikRef={myFormik} customName='userName' customId='userName' />
                    <ErrorContainer tmpTouched = {myFormik.touched.userName} tmpErrors={myFormik.errors.userName} />
                  </div>
                  <div className='col-md-6'>
                    <LabelControl HtmlFor="userPassword" value="User Password :" />
                    <InputControls customType='password' formikRef={myFormik} customName='userPassword' customId='userPassword' />
                    <ErrorContainer tmpTouched={myFormik.touched.userPassword} tmpErrors={myFormik.errors.userPassword} /> 
                  </div>
                </div>
                
                <div className='row'>
                  <div className='col'>
                    <LabelControl HtmlFor="userMail" value="Email ID :" />
                    <InputControls customType='Email' formikRef={myFormik} customName='userMail' customId='userMail' />
                    <ErrorContainer tmpTouched={myFormik.touched.userMail} tmpErrors={myFormik.errors.userMail} /> 
                  </div>
                  <div className='col'>
                    <LabelControl HtmlFor="userAge" value="Age :" />
                    <InputControls customType='NUmber' formikRef={myFormik} customId='userAge' customName='userAge' /> 
                    <ErrorContainer tmpTouched={myFormik.touched.userAge} tmpErrors={myFormik.errors.userAge} /> 
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                      <InputControls className="" customType='checkbox' remaining = {
                        {
                          'count' : 3,
                          'name' : 'languages',
                          'labels' : ["English","French","Tamil"]
                        }
                      } formikRef={myFormik} forCheckboxes={myFormik.values.languages} />
                      <ErrorContainer tmpTouched={myFormik.touched.languages} tmpErrors={myFormik.errors.languages} /> 
                  </div>

                  <div className='col-md-6'>
                    <LabelControl HtmlFor='usersColor' value="Users Favorite Color : " />
                    <InputControls customType='COLOR' customId='usersColor' customName='usersColor' formikRef={myFormik} />
                    <ErrorContainer tmpTouched={myFormik.touched.usersColor} tmpErrors={myFormik.errors.usersColor} />
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <LabelControl HtmlFor='userDate' value="Users Date : " />
                    <InputControls formikRef={myFormik} customId='userDate' customName='userDate' customType='date' />
                    <ErrorContainer tmpTouched={myFormik.touched.userDate} tmpErrors={myFormik.errors.userDate} />
                  </div>
                  <div className='col'>
                    <LabelControl HtmlFor='userFile' value="Users Date : " />
                    <InputControls formikRef={myFormik} customId='userFile' customName='userFile' customType='file' />
                    <ErrorContainer tmpTouched={myFormik.touched.userFile} tmpErrors={myFormik.errors.userFile} />
                  </div>
                </div>
                  
                <div className='d-flex justify-content-center align-items-center'>
                  <input type='submit' className='btn btn-success' value="submit" />
                  <input type='button' className='btn btn-danger' value="cancel" />
                </div>
              </section>
            </form>
            
        </div>
    </div>
  )
}

export default HtmlControls