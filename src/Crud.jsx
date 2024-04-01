import { useFormik} from "formik";
import Dashboard from "./Dashboard";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Crud(){

    const successToast = (dynamicMsg) =>{

        toast.success(dynamicMsg, {
            position: 'top-right', // You can customize the position
            autoClose: 3000, // Time in milliseconds to close the toast automatically
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
    }

    const errorToast = (dynamicMsg) =>{

        toast.error(dynamicMsg, {
            position: 'top-right', // You can customize the position
            autoClose: 3000, // Time in milliseconds to close the toast automatically
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
    }

    const newNavigator = useNavigate()

    const intialdata = {
        uname : '',
        uage : '',
        ustate : '',
        ugender : '',
        checkboxOptions : []
    }
    
    const validationSchema = Yup.object({
        uname: Yup.string().required('Name is required'),
        uage: Yup.number().typeError('Age must be a number').required('Age is required').max(100, 'Age must be less than or equal to 100'),
        ustate: Yup.string().required('State is required'),
        checkboxOptions: Yup.array()
        .of(Yup.string()) // Assuming checkbox values are strings
        .min(1, 'Select at least one language'),
      // Add other validation rules if needed
        ugender: Yup.string().required('gender is required')
      });

    // Initialize formik context using useFormik hook
  const formik = useFormik({
    initialValues: intialdata,
    validationSchema: validationSchema,
    onSubmit: (values, {setSubmitting}) =>{
       
        const { checkboxOptions ,uage ,uname ,ugender ,ustate } = values

            console.log('Form submitted:', values);
            
            // changing the state
            setageobj(parseInt(uage))
            setgenderobj(ugender)
            setlanguageObj(checkboxOptions)
            setstateobj(ustate)
            setnameobj(uname)
            // After submission, you can reset the form or perform any other actions
            setSubmitting(false); 
    }

  });

    const [nameObj, setnameobj] = useState('')
    const [ageObj, setageobj] = useState(0)
    const [genderObj, setgenderobj] = useState('')
    const [stateObj, setstateobj] = useState('')
    const [languageObj, setlanguageObj] = useState([])

    const [statuscode, setStatuscode] = useState(0)

    const location = useLocation();
    const newDataId = new URLSearchParams(location.search).get('dataid');

    const [errorsVisible, setErrorsVisible] = useState(false);


    // all useEffect hooks are called after the states actual update, and componnent re-render
    // it is used for the side effect of the state 

    //console.log(newDataId)
    const fnpostState = async () => {

        const convertString = languageObj.join(',');

        const viper = {
            id : newDataId === null ? 0 : parseInt(newDataId),
            state : stateObj,
            languages : convertString,
            gender : genderObj,
            age : ageObj,
            name : nameObj
        }

        console.log(viper)

        if(viper.age > 0){
            const returndata = await axios.post("https://localhost:44307/api/DapperMethods/post-state-data", viper)
            
            if(returndata.data > 0){
                setStatuscode(returndata.data)
            }

        }

    } 

    const getStateDataWithQuery = async () =>{
        const getdatas = await axios.get('https://localhost:44307/api/DapperMethods/query-get-data',{
            params : {
                stateData : newDataId === null ? 0 : newDataId
            }
        })

        if(getdatas.data !== null && getdatas.data !== 0){
            debugger
            
            const splitter = getdatas.data.languages.split(',')


            formik.setValues({
                uname: getdatas.data.name,
                uage: getdatas.data.age,
                ugender: getdatas.data.gender,
                checkboxOptions: splitter,
                ustate: getdatas.data.state,
              });
            //setLatestValues(getdatas.data)
        }

        console.log(1)
        
    }  

    useEffect(() => {

        fnpostState()

    }, [nameObj,ageObj,stateObj,genderObj,languageObj])

    useEffect(() =>{
        if(statuscode > 0 && newDataId == statuscode){
            successToast("Data Updated!!")
        }
    }, [statuscode])

    useEffect(()=> {
        getStateDataWithQuery()
        // only on document on load
    }, [])


    return (
        <div>
            <Dashboard />
            <h3>Add Users</h3>
            <div className="crudFrmContainer">

                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-control'>
                            <label htmlFor='uname'>Name : </label>
                            <input className='form-control' id='uname' value={formik.values.uname}  onBlur={formik.handleBlur}
                            onChange={formik.handleChange} name='uname' type="text" placeholder="Username" />
                            <div style={{ color: 'red' }}>
                            {formik.touched.uname && formik.errors.uname}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor='uage'>Age : </label>
                            <input className='form-control' onBlur={formik.handleBlur}
                            onChange={formik.handleChange} id='uage' name='uage' value={formik.values.uage} type="text" placeholder="Age" />
                            <div style={{ color: 'red' }}>
                            {formik.touched.uage && formik.errors.uage}
                            </div>
                        </div>
                        <div className="form-group">
                            <label >Gender :</label>
                            <input className='' value='male' checked={formik.values.ugender === 'male'} onChange={formik.handleChange} name='ugender' type="radio" />
                            <label>Male</label>
                            <input className='' value='female' checked={formik.values.ugender === 'female'} onChange={formik.handleChange} name='ugender' type="radio" />
                            <label>Female</label>
                            <div style={{ color: 'red' }}>
                            {formik.touched.ugender && formik.errors.ugender}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor=''>Languages Known : </label>

                                    <label>
                                    <input type="checkbox" name="checkboxOptions" value="english"  onChange={formik.handleChange}  checked={formik.values.checkboxOptions.includes('english')} />
                                    English
                                    </label>
                                    <label>
                                    <input type="checkbox" name="checkboxOptions" value="french" onChange={formik.handleChange}  checked={formik.values.checkboxOptions.includes('french')} />
                                    French
                                    </label>
                                    <label>
                                    <input type="checkbox" name="checkboxOptions" value="spanish" onChange={formik.handleChange}  checked={formik.values.checkboxOptions.includes('spanish')} />
                                    Spanish
                                    </label>
                                    <div style={{ color: 'red' }}>
                                    {formik.touched.checkboxOptions &&
                                        formik.errors.checkboxOptions}
                                    </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <label htmlFor='uname'>State : </label>
                            </div>
                            <div>
                                <select className='form-control' onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.ustate} id='ustate' name='ustate'>
                                    <option value="" disabled label="Select State" />
                                    <option value="tamilnadu" label="Tamil Nadu" />
                                    <option value="kerala" label="Kerala" />
                                    <option value="karnataka" label="Karnataka" />
                                </select>
                                <div style={{ color: 'red' }}>
                                {formik.touched.ustate && formik.errors.ustate}
                                </div>
                            </div>
                        </div>
                    
                        <div>
                            <button type="submit" className="btn btn-success">Submit</button>
                            <Link to="/data-grid"><button type="button" className="btn btn-danger">Cancel</button></Link>
                        </div>
                    </form>

            </div>
            
        </div>
    )
}

//or
// function Crud(){
//     return (
//         <div>
//             <h3 style={{textAlign : 'center'}}>What bro?</h3>
//         </div>
//     )
// }

// export default Crud
