import { configureStore } from "@reduxjs/toolkit";
import campaignDataSlice from "./index";
import overlaySlice from "./overlay-store";


const formStore = configureStore({
    reducer:{
        formData: campaignDataSlice.reducer,
        overlay: overlaySlice.reducer
    }
})

export default formStore