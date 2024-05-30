import React from "react"


import back from "../images/Vector (7).png"
import { useSelector } from "react-redux";

const NewCampaignInfo:React.FC = ()=>{

    const forData = useSelector((state:any)=>state.formData)

    const[edit,setEdit] = React.useState<boolean>(false);

    const handleEdit = ()=>{
        setEdit(true)
    }

    return (
        <div className="w-full">

            <button className=" flex items-center justify-center hover:cursor-pointer bg-none border-none">
                <img src={back} alt="back arrow" />
                <span className="text-[#333333] text-base font-normal">Back</span>
            </button>

            <div className="flex items-center justify-between">

                 <h2 className="text-lg font-[600] text-overview stacking-wide">Campaign Information</h2>

                 <div className="flex items-center justify-between p-2 bg-sidebar rounded-sm">

                    <div className="border-r text-dark text-sm pr-1.5">Campaign Status</div>

                    <span className="text-[#009918] text-base px-2">Active</span>

                 </div>

            </div>


            <div className="">

            <div className=" w-full mb-2">
                        <label className="text-help  text-sm" htmlFor="campaignname">Campaign Name <span className={`text-red`}>*</span> :</label><br/>

                        {
                            edit?(
                                <input 
                                    type="text"
                                    name= "campaignname"
                                    placeholder="eg. The future is now"
                                    className="border rounded-md w-full p-2.5 mt-1  text-form text-base outline-none"
                                    value= {forData.campaignname}
                                    onChange={(e)=>{handleChange(e)}}

                                />
                            ): (
                                <p>{newCampaignData.campaignname}</p>
                            )
                        }

                        

                    </div>
                

            </div>

        </div>
    )
}

export default NewCampaignInfo