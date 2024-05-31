import React from "react"

const SuccefullStop:React.FC = ()=>{


    return(
        <div className ="top-0 left-0 z-50 absolute flex items-center justify-center w-[100vw] h-[100vh] bg-[#1d2025] opacity-90">
            <div className="flex p-[4rem] flex-col gap-[2rem] justify-center items-center bg-[#FFFFFF] w-[39%] h-[341px] rounded-md">
                <div className="pb-10 border-b w-full">
                    <h3 className="text-[#333333] text-lg font-[600] text-center">Stop Campaign</h3>
                </div>
                <p className="text-help w-full text-center text-base font-base">Are You sure you want to delete MTN campaign? This action cannot be undone.</p>
                <div className="flex items-center gap-4 justify-center">
                    <button className="bg-none border-2 border-[#000000] text-[#00000] rounded-md px-10 py-2">Cancel</button>
                    <button className="rounded-md bg-[#990000] py-2.5 px-10 text-[#FFFF]">Delete Campaign</button>
                </div>

            </div>

    </div>
    )
}

export default SuccefullStop