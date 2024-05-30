import React from "react"
import OverviewHeader from "./OverviewHeader"
import group from "../images/Clip path group.png"
import add from "../images/material-symbols_add.png"
const Overview:React.FC = ()=>{
    return(
        <div className="h-full flex flex-col">
            <OverviewHeader/>

            <div className="flex items-center justify-center flex-1">

                <div className="flex flex-col items-cemter gap-8">
                    <img src={group} alt="No activity icon" />
                    <p className="text-center text-base font-normal text-[#000000]">No activity yet. Create anew campaign to get started</p>

                   <div className="flex justify-center">
                       <button className="flex max-w-fit items-center justify-center gap-2 px-4 py-1.5 border-none rounded-md bg-logobi ">
                            <img src={add} alt="add icon" />
                            <span className="text-base text-bacground">New Campaign</span>
                        </button>

                   </div>
                </div>

            </div>

        </div>
    )
}

export default Overview