import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from './Dashboard'


const StoreData = () => {

    const getDataFromStore = useSelector(gth => gth.userState)

  return (
    <div>
        <Dashboard />
        <div>
            <h3>Redux Store Data</h3>
            <div>
                <p>Name : {getDataFromStore.userName}</p>
                <p>Age : {getDataFromStore.age}</p>
                <p>Email : {getDataFromStore.email}</p>
                <p>Password : {getDataFromStore.password}</p>
                <p>Mobile : {getDataFromStore.mobile}</p>
                <p>Gender : {getDataFromStore.gender}</p>
                <p>Address : {getDataFromStore.address}</p>
            </div>
        </div>
    </div>
  )
}

export default StoreData