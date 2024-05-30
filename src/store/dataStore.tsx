import { configureStore } from "@reduxjs/toolkit";
import campaignDataSlice from ".";


const formStore = configureStore({
    reducer:{
        formData: campaignDataSlice.reducer
    }
})

export default formStore