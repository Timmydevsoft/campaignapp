import React from "react"

const SuccessfulDelete:React.FC = ()=>{
    return(
        <div className ="absolute flex items-center justify-center w-[100vw] h-[100vh] bg-[#1d2025] opacity-90">

            <div className="top-0 left-0 z-50 flex p-[4rem] flex-col gap-[3rem] justify-center items-center bg-[#FFFFFF] w-[39%] h-[341px] rounded-md">

                <div className="pb-10 border-b w-full">
                    <h3 className="text-[#333333] text-lg font-[600] text-center">MTN Campaign Deleted</h3>
                </div>
            
                <p className="text-help w-full text-center text-base font-base">MTN campaign has been deleted</p>
                <button className="bg-overview text-[#FFFFFF] rounded-md px-10 py-2">Go Back to campaign list</button>


            </div>

        </div>
    )
}

export default SuccessfulDelete