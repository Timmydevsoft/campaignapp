import React from "react"
import X from "../images/iconoir_cancel.png"
import arrowd from "../images/Vector (2).png"

import back from "../images/Vector (7).png"

const NewCampaignInfo:React.FC = ()=>{

  

    // The data I wants for this palce starts here

    interface formData{
        campaignname: string,
        date:string,
        description: string,
        startdate: string,
        enddate: string,
        dailydigest: boolean,
        keyword: string[],
        frequency: string,
        id: string
        
    }

    const [campaignData,setCampaignData]= React.useState<formData>({
        campaignname: "MTN",
        date: "",
        description: "",
        startdate: "22/04/2022",
        enddate: "22/04/2022",
        dailydigest: false,
        keyword: ["banks", "banks"],
        frequency: "Monthly",
        id: ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name, value} = e.target
        setCampaignData(prev=>({
          ...prev,
          [name]:value
  
        }))
  
     }

     interface keys{
        keyword: string
       }

     const[keyword,setKeyword]= React.useState<string>("");
  
      const[keywords, setKeywords]= React.useState<keys[]>([]);

    const handlekeyDown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){

            setKeywords([...keywords,{keyword: keyword}]);
            setCampaignData(prev=>({
                ...prev,
                [keyword]: keywords

            }))

            setKeyword("")
            console.log(keywords)
        }

        else return
    }

    const handleDigest = ()=>{
        setCampaignData((prev:formData)=>({
            ...prev,
            dailydigest: !prev.dailydigest
        }))
    
    }

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        const{name, value} = e.target
        setCampaignData(prev=>({
          ...prev,
          [name]:value
    
        }))
    }

    // end range fo the data

    const[edit,setEdit] = React.useState<boolean>(false);

    const handleEdit = ()=>{
        setEdit(prev=>!prev)
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


             

                   <div className=" w-full mb-2">
                        <label className="text-help  text-sm" htmlFor="campaignname">Campaign Name <span className={`text-red`}>*</span> :</label><br/>

                        {
                            edit?(
                                <input 
                                    type="text"
                                    name= "campaignname"
                                    placeholder="eg. The future is now"
                                    className="border rounded-md w-full p-2 mt-1  text-form text-xs outline-none"
                                    value= {campaignData.campaignname}
                                    onChange={(e)=>{handleChange(e)}}

                                />
                            ): (
                                <p className="border w-full rounded-md p-2 mt-1 text-form text-xs">{campaignData.campaignname}</p>
                            )
                        }

                        

                    </div>

                    <div className="w-full flex justify-between items-center">
                        <div className ="w-[40%] ">

                           <label className="text-help  text-sm" htmlFor="campaignname">Start Date <span className={`text-red`}>*</span> :</label><br/>

                            {
                                edit? (

                                    <input 
                                    type="text"
                                    name= "startdate"
                                    placeholder="dd/mm/yyyy"
                                    className="border rounded-md w-full p-2 mt-1 text-form text-xs outline-none"
                                    value= {campaignData.startdate}
                                    onChange={(e)=>{handleChange(e)}}
    
                                />

                                ):(
                                    <p className="border rounded-md w-full p-2 mt-1 text-form text-xs">{campaignData.startdate}</p>
                                )
                            }

                           

                        </div>

                        <div className ="w-[40%] ">

                           <label className="text-help  text-xs" htmlFor="campaignname">End Date <span className={`text-red`}>*</span> :</label><br/>
                             {
                                edit?(
                                    <input 
                                type="text"
                                name= "enddate"
                                placeholder="dd/mm/yyyy"
                                className="border rounded-md w-full p-2 mt-1  text-form text-xs outline-none"
                                value= {campaignData.enddate}
                                onChange={(e)=>{handleChange(e)}}

                            />
                                ):(
                                    <p  className="border rounded-md w-full p-2 mt-1 text-form text-xs">{campaignData.enddate}</p>
                                )
                             }

                            

                        </div>
                        

                    </div>

                    {/* key words */}

                    <div className="w-full">

                        <label className="text-help  text-sm" htmlFor="campaignname">Link Keywords<span className={`text-red`}>*</span> :</label><br/>
                        <div className="w-full p-2 h-[70px] border rounded-md">

                            {
                                edit? (
                                    <input 
                                    type="text" 
                                    placeholder= "To add keywords, type your keyword and press enter"
                                    className="border-none rounded-md w-[50%] p-1 text-form text-base outline-none"
                                    value= {keyword}
                                    onChange={(e)=>{
                                        setKeyword(e.target.value);
    
                                    }}
    
                                    onKeyDown={(e)=>{
                                        handlekeyDown(e)
                                    }}
                                />
                                ):(

                                    <div className="flex items-center gap-2">  
                                        
                                        {
                                            campaignData.keyword.map((items, index)=>(
                                                <div key={index} className="bg-logobi rounded-md px-2.5 py-1 w-auto flex items-center hover:cursor-pointer gap-1">
                                                    <span className="text-xs text-[#FFFFFF]">{items}</span>
                                                    <img className="w-[12px] h-[12px] " src={X} alt="x icon" />
                                                </div>
                                            ))
                                        }

                                    </div>
                                )
                            }
                           
                            
                        </div>

                    </div>


                    
                    {/* keywords */}

                       <div className="mt-2.5">
                           <p className="text-help text-sm">Want to receive daily digest about the campaign?</p>

                           {
                             edit?(
                                <div className="w-full flex justify-between  items-center border rounded-md mt-4">
                                    <p className="text-help text-sm">Want to receive daily digest about the campaign?</p>

                                    <div className={`bg-[#6E0080] rounded-xl w-10 flex ${ campaignData.dailydigest? 'justify-end':'justify-start'} `}>
                                        <input 
                                        type="button"
                                        name = "dailydigest"
                                        onClick={handleDigest}
                                        value = { campaignData.dailydigest? "Yes" : "No"}
                                        className="bg-sidebar hover:cursor-pointer rounded-full text-sidebar w-[23px] h-[23px] text-[7px] border-none"
                                        />
                                    </div>
                               </div>
                             ):(
                                <div className="flex border rounded-md items-center w-full justify-between p-2">
                                    <span className="text-base font-[500] text-[#999999]">{campaignData.dailydigest? "Yes" : "No"}</span>
                                    <img src={arrowd} alt="arrowdown" />

                                </div>

                             )
                           }


                       </div>

                       


                       <div className="w-full mt-2.5">

                          <p className="text-help text-xs w-full mb-1">Kindly select how often you want to receive daily digest</p>

                          
                             {
                                edit? (

                                    <div className="p-1.5 w-[155px] border rounded">
    
                                    <select 
                                        className="w-full border-none text-xs outline-none"
                                        value= {campaignData.frequency}
                                        onChange={(e)=>{handleSelect(e)}}
        
                                        name="frequency"
                                    >
                                        <option className="text-xs text-help" value="">Select</option>
                                        <option className="text-xs text-help" value="daily">daily</option>
                                        <option className="text-xs text-help" value="weekly">weekly</option>
                                        <option className="text-xs text-help" value="monthly">monthly</option>
                                        <option className="text-xs text-help" value="annually">annually</option>
        
                                        
                                    </select>
        
                            </div>

                                ):(
                                    <div className="flex border rounded-md items-center w-full justify-between p-2">
                                        <span className="text-base font-[500] text-[#999999]">{campaignData.frequency}</span>
                                        <img src={arrowd} alt="arrowdown" />

                                    </div>
                                    
                                )
                            }
                    

                      


                        </div>

                        <div className="w-[70%] flex items-center mt-[3rem] justify-between">
                            <button className="py-2.5 px-14 bg-[#990000] w-[45%] text-base font-[600] cursor-pointer rounded-md text-[#FFFFFF]">Stop Campaign</button>
                            <button onClick={handleEdit} className="py-2.5 px-14 bg-none w-[45%] text-base font-[600] cursor-pointe border border-overview text-overview rounded-md ">Edit Information</button>
                        </div>

       


        </div>
    )
}

export default NewCampaignInfo