import {createSlice } from "@reduxjs/toolkit"

interface props{
    successCreate: boolean,
    sucessPost: boolean,
    confirmDelete: boolean,
    successDelete: boolean,
}

const initialState:props ={
    successCreate: false,
    sucessPost: false,
    successDelete: false,
    confirmDelete: false
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
        },
        renderConfirmDelete(state){
            state.confirmDelete = !state.confirmDelete
        }

     }
 })

 export const overlayActions = overlaySlice.actions
 export default overlaySlice