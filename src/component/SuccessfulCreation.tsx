import React from "react"
import success from "../images/success.png"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { overlayActions } from "../store/overlay-store"

const SuccessfulCreation:React.FC = ()=>{
    const dispatch = useDispatch()

    const handleBack = ()=>{
        dispatch(overlayActions.renderSuccess())
    }

    return(
        <div className="top-0 left-0 z-50 absolute flex items-center justify-center w-[100vw] h-[100vh] bg-[#1d2025] opacity-90">

            <div className="flex flex-col gap-[3rem] justify-center items-center bg-[#FFFFFF] w-[38%] h-[422px] rounded-md">

                <img src={success} alt="mark icon" />

                <p className="text-help text-center text-base font-base">Campingn Successfully Created!</p>

                <button onClick={handleBack} className="bg-overview text-[#FFFFFF] rounded-md px-10 py-2">
                   <Link to="./campaign" >Go Back to campaign list</Link>
                </button>

                

            </div>

        </div>
    )

}

export default SuccessfulCreation