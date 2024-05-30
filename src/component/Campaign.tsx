import React from "react"
import AllCampaignHeader from "./AllCampaignHeader"

import { campaignList } from "../constant"

import eye from "../images/Vector (5).png"
import edit from "../images/Group.png"
import deleteIcon from "../images/material-symbols_delete-outline-rounded.png"
import backArrow from "../images/material-symbols_arrow-back-ios-rounded.png"
import nextArrow from "../images/material-symbols_arrow-back-ios-rounded (1).png"

const Campaign:React.FC = ()=>{

    const columnArray = [
        "S/N",
        "Campaign Name",
        "Start Date",
        "Status",
        "Action"
    ]

    const arr =  [1,2,3,4,5,6,7]

   
    
    return(
        <div className="">

            <h2 className="text-lg font-[600] text-overview stacking-wide">All Campaigns</h2>

            <div className="flex flex-col pt-4">
                <AllCampaignHeader/>

                <div className="deatls mt-8">
                    <div className="w-full flex items-center py-1.5 px-2 justify-between bg-sidebar">
                        {
                            columnArray.map((items,idx)=>(
                                <p key={idx} className="w-[20%] text-allcheader font-medium text-xs"
                                >{items}</p>
                            ))
                        }

                    </div>

                    <div className="flex flex-col">

                        {
                            campaignList.map((campaign,ids)=>(

                                <div key={ids} className="w-full flex items-center py-1.5 px-2 justify-between border-b">
                                    <p className="w-[20%] text-base text-help font-normal">{ids + 1}.</p>
                                    <p className="w-[20%] text-base text-help font-normal">{campaign.campaignName}</p>
                                    <p className={`${campaign.status? 'text-[#009918]': 'text-[#990000]' } w-[20%] text-sm font-bold`}>{campaign.status? "ACTIVE" : "INACTIVE"}</p>
                                    <p className="w-[20%] text-base text-help font-normal">{campaign.date}</p>

                                    <div className="w-[20%] flex items-center gap-4">
                                        <img className="hover:cursor-pointer" src={eye} alt="eye icon" />
                                        <img  className="hover:cursor-pointer" src={edit} alt="edit icon" />
                                        <img  className="hover:cursor-pointer" src={deleteIcon} alt="delete icon" />

                                    </div >
                        
                                </div>

                            ))
                        }

                        <div className="flex items-center justify-between w-full">

                            <div className="flex items-center gap-4">
                                <img src={backArrow} alt="arrow" />

                                <div className="flex items-center justify-between">
                                    {
                                        arr.map((num,numid)=>(
                                            <button key={numid} className="text-help p-2 border-none rounded-full">{num}</button>
                                        ))
                                    }
                                    <span>...</span>
                                    <button className="p-2 border-none rounded-full">15</button>
                                </div>

                                <img src={nextArrow} alt="arrow" />
                            </div>


                            <p className=" mt-12 text-base text-dark font-normal">Showing the result of {campaignList.length} out of 40</p>

                        </div>

                        

                    </div>

                  


                </div>
               

            </div>

        </div>
    )
}

export default Campaign