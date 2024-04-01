import { configureStore } from "@reduxjs/toolkit";

//slices
import userSlice from '../reduxslice/userSlice'


export default configureStore({
    reducer : {
        'userState' : userSlice
    }
})





