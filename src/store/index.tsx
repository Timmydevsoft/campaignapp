import {createSlice } from "@reduxjs/toolkit"

interface formData{
    campaignname: string,
    date:string,
    description: string,
    startdate: string,
    enddate: string,
    dailydigest: boolean,
    keyword: string,
    frequency: string
    
}

const initialState:formData ={

    campaignname: "",
    date: "",
    description: "",
    startdate: "",
    enddate: "",
    dailydigest: false,
     keyword: "",
     frequency: ""
}

const campaignDataSlice = createSlice({
    name: "formData",
    initialState,
    reducers:{
        handleFillData(state,action){
            state.campaignname = action.payload.campaigname
            state.date = action.payload.date
            state.dailydigest = action.payload.dailydigest
            state.description = action.payload.description
            state.enddate = action.payload.enddate 
            state.frequency = action.payload.frequency
            state.keyword = action.payload.keyword
            state.startdate = action.payload.startdate
        }
    }
})


export const formActions = campaignDataSlice.actions
export default campaignDataSlice
