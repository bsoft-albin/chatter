import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name : 'userState',
    initialState : {
        userName : '',
        age : '',
        email : '',
        password : '',
        mobile : '',
        gender : '',
        address : ''
    },
    reducers : {
        updateUserState : (newState, action) => {
            // debugger;
            return {
                ...newState,
                ...action.payload
            }
        }
    }
})

export const {updateUserState} = userSlice.actions

export default userSlice.reducer