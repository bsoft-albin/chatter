import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Dashboard from './Dashboard'
import { updateUserState } from './myRedux/reduxslice/userSlice'


const ReduxDemo = () => {

    const baseSlice = useSelector(state => state.userState)

    const baseDispatcher = useDispatch()

    const [UserName,setUserName] = useState('')
    const [Age,setAge] = useState('')
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [Mobile,setMobile] = useState('')
    const [Gender,setGender] = useState('')
    const [Address,setAddress] = useState('')

    const myObject = {
        name : "Albin",
        age : 23,
        education : {
            school : 12,
            college : 'don Bosco'
        }
    }

    const clonedObj = {
        ...myObject, name : "mikael", age : 22,
        education : {
           ...myObject.education, school : 10,college : "st joseph"
        }
    }

    function changeUsername(e){
        setUserName(e.target.value)
    }
    function changeAge(e){
        setAge(e.target.value)
    }
    function changeEmail(e){
        setEmail(e.target.value)
    }
    function changePassword(e){
        setPassword(e.target.value)
    }
    function changeMobile(e){
        setMobile(e.target.value)
    }
    function changeGender(e){
        setGender(e.target.value)
    }
    function changeAddress(e){
        setAddress(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        const userObj = {
            userName : UserName,
            age : Age,
            email : Email,
            password : Password,
            mobile : Mobile,
            gender : Gender,
            address : Address
        }
        baseDispatcher(updateUserState(userObj))
        
    }

    useEffect(() =>{
        console.log(baseSlice)
    }, [baseSlice])

  return (
    <div>
        <Dashboard />
        
        <h2 style={{textAlign : "center"}}>Custom Form</h2>
        <form onSubmit={handleSubmit}>
            <div style={{width : '300px'}}>
                <div>
                    <input type='text' value={UserName} onChange={changeUsername} placeholder='enter name' />
                </div>
                <div>
                    <input type='text' value={Age} onChange={changeAge} placeholder='age' />
                </div>
                <div>
                    <input type='text' value={Email} onChange={changeEmail} placeholder='enter mail' />
                </div>
                <div>
                    <input type='password' value={Password} onChange={changePassword} placeholder='enter password' />
                </div>
                <div>
                    <input type='text' value={Mobile} onChange={changeMobile} placeholder='enter Mobile' />
                </div>
                <div>
                    <input type='text' value={Gender} onChange={changeGender} placeholder='enter Gender' />
                </div>
                <div>
                    <textarea value={Address} onChange={changeAddress} placeholder='enter address'>
                    </textarea>
                </div>
                
            </div>
            <div>
                <button type='submit' className='btn btn-success'>Submit</button>
            </div>
        </form>
        
    </div>
  )
}

export default ReduxDemo