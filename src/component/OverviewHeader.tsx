import React from "react"
import dateIcon from "../images/material-symbols_date-range-outline-rounded.png"
import exportIcon from "../images/Vector (4).png"
import arrowDown from "../images/Vector (2).png"
import "../index.css"
const OverviewHeader:React.FC = ()=>{
    return(
        <div className="flex justify-between items-center">
            <h2 className="worksans text-3xl text-logobi font-bold">Overview</h2>

            {/* time detail */}
            <div className="flex items-center gap-4">

                <div className="flex items-center gap-2 border rounded-md py-1.5 px-2">
                    <div className="flex items-center gap-1 border-r">
                        <img src={dateIcon} alt="date icon" />
                        <p className=" text-xm text-[#333333] font-medium pr-2">Date Range</p>
                    </div>
                    <div className="flex items-center gap-1">

                        <p className="text-help text-sm">Nov 1, 2022 - Nov 7,2022</p>
                        <img className ="hover:cursor-pointer" src={arrowDown} alt="arrow down" />
                    </div>

                </div>

                <button className="flex items-center font-medium bg-sidebar border-none rounded-sm scroll py-1.5 px-4 justify-center gap-2">
                    <img src={exportIcon} alt="export Icon"/>
                    <span className="text-overview text-sm font-semi-bold">Export</span>
                </button>

        </div>

    </div>
    
)
}

export default OverviewHeader