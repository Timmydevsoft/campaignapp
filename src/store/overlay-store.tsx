import {createSlice } from "@reduxjs/toolkit"

interface props{
    successCreate: boolean,
    sucessPost: boolean,
    successDelete: boolean
}

const initialState:props ={
    successCreate: false,
    sucessPost: false,
    successDelete: false
}
 const overlaySlice = createSlice({
    name:"overlay",
     initialState,
     reducers:{
        renderSuccess(state){
            state.successCreate=!state.successCreate
        },
        rendersucessPost(state){
            state.sucessPost = !state.sucessPost
        },
        renderSuccessDelete(state){
            state.successDelete= !state.successDelete
        }

     }
 })

 export const overlayActions = overlaySlice.actions
 export default overlaySlice