import {createSlice } from "@reduxjs/toolkit"

interface formData{
    campaignDescription: string,
    campaignName: string,
    campaignStatus: string,
    dailyDigest:string,
    digestCampaign: string,
    endDate: string,
    id: string,
    linkedKeywords: string[],
    startDate: string
}

const initialState:formData ={
    campaignDescription: "",
    campaignName: "",
    campaignStatus: "",
    dailyDigest: "",
    digestCampaign: "",
    endDate: "",
    id: "",
    linkedKeywords: [],
    startDate: ""
}

const campaignDataSlice = createSlice({
    name: "formData",
    initialState,
    reducers:{
        handleFillData(state,action){
            state.campaignName = action.payload.campaignName
            state.startDate = action.payload.startDate
            state.dailyDigest = action.payload.dailyDigest
            state.campaignDescription = action.payload.campaignDescription
            state.endDate= action.payload.endDate 
            state.digestCampaign = action.payload.digestCampaign
            state.id = action.payload.id
            state.linkedKeywords = action.payload.linkedKeywords
            state.endDate = action.payload.endDate

            console.log(state)
        }
    }
})


export const formActions = campaignDataSlice.actions
export default campaignDataSlice
