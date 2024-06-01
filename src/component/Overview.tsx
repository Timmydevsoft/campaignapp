import React from "react"
import OverviewHeader from "./OverviewHeader"
import group from "../images/Clip path group.png"
import add from "../images/material-symbols_add.png"
import { Link } from "react-router-dom"
const Overview:React.FC = ()=>{
    return(
        <div className="h-full flex  flex-col">
            <OverviewHeader/>

            <div className="flex items-center h-full justify-center flex-1">

                <div className="flex flex-col items-cemter gap-8">
                    <img src={group} alt="No activity icon" />
                    <p className="text-center text-sm font-[600] text-[#000000]">No activity yet. Create anew campaign to get started</p>

                   <div className="flex justify-center">
                       <button className="flex max-w-fit items-center justify-center gap-2 px-4 py-1.5 border-none rounded-md bg-logobi ">
                            <img src={add} alt="add icon" />
                            <Link to="/new-campaign" className="text-sm text-bacground">New Campaign</Link>
                        </button>

                   </div>
                </div>

            </div>

        </div>
    )
}

export default Overview