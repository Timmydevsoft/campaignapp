import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { overlayActions } from "../store/overlay-store"
import { formActions } from "../store"

const UpdateSuccessful:React.FC = ()=>{
    const dispatch = useDispatch()
    const campaign = useSelector((state:any)=>state.formData.campaignName)
    const handleRemoveOverlay=()=>{
        dispatch(overlayActions.renderUpdate())
        dispatch(formActions.handleHide())
    }

    return(
        <div className ="absolute top-0 left-0 z-50 flex items-center justify-center w-[100vw] h-[100vh] bg-[#1d2025] opacity-90">

            <div className="top-0 left-0 z-50 flex p-[4rem] flex-col gap-[3rem] justify-center items-center bg-[#FFFFFF] w-[39%] h-[341px] rounded-md">

                <div className="pb-10 border-b w-full">
                    <h3 className="text-[#333333] text-lg font-[600] text-center">{campaign} Campaign Updated Sucessfully</h3>
                </div>
            
                <p className="text-help w-full text-center text-base font-base">{campaign} campaign has been updated</p>
                <button onClick={handleRemoveOverlay} className="bg-overview text-[#FFFFFF] rounded-md px-10 py-2">Go Back to campaign list</button>


            </div>

        </div>
    )
}
export default UpdateSuccessful