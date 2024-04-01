import React from 'react'
import { Link } from 'react-router-dom'

const Forget = () => {

    const handleSubmit = (e) =>{

        e.preventDefault();
        console.log('prevented')
    }

  return (
    <div style={{height:'100vh',background: 'linear-gradient(to bottom right, #b0b0b0, #808080)'}} className='d-flex justify-content-center align-items-center'>
        <div className="reset-form" style={{backgroundColor:"gray",borderRadius:'20px'}}>
            <h2 className="form-title">Password Reset</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email address : </label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email" required />
                </div>
                <div className='d-flex justify-content-center align-items-center conResetPass'>
                    <button type="submit" className="btn btn-success">Reset Password</button>
                </div>
                
                <div className='d-flex justify-content-end'>
                    <button type='button' className='btn btn-primary gobacBtn'><Link style={{textDecoration:'none',color:'black'}} to="/"> Go Back</Link></button>
                </div>
            </form>
        </div>
    </div>
    
  )
}

export default Forget