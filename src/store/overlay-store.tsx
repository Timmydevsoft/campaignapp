import {createSlice } from "@reduxjs/toolkit"

interface props{
    successCreate: boolean,
    sucessPost: boolean,
    confirmDelete: boolean,
    successDelete: boolean,
    update: boolean
}

const initialState:props ={
    successCreate: false,
    sucessPost: false,
    successDelete: false,
    confirmDelete: false,
    update: false
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
        },
        renderUpdate(state){
            state.update = !state.update
        }

     }
 })

 export const overlayActions = overlaySlice.actions
 export default overlaySlice