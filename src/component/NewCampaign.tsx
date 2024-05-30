import React from "react"
import { useDispatch } from "react-redux"
import { formActions } from "../store"

const NewCampaign:React.FC = ()=>{

    interface formData{
        campaignname: string,
        date:string,
        description: string,
        startdate: string,
        enddate: string,
        dailydigest: boolean,
        keyword: string,
        frequency: string
        
    }

   const [newCampaignData,setNewCampaignData]= React.useState<formData>({
    campaignname: "",
    date: "",
    description: "",
    startdate: "",
    enddate: "",
    dailydigest: false,
     keyword: "",
     frequency: ""
   })

   interface keys{
    keyword: string
   }
   

   const[keyword,setKeyword]= React.useState<string>("");
  
   const[keywords, setKeywords]= React.useState<keys[]>([]);

   const handlekeyDown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
     if(e.key === 'Enter'){

        setKeywords([...keywords,{keyword: keyword}]);
        setKeyword("")
         console.log(keywords)
     }

     else return
   }




   const handleDigest = ()=>{
    setNewCampaignData(prev=>({
        ...prev,
        dailydigest: !prev.dailydigest
    }))

    console.log(newCampaignData);
   }

   const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const{name, value} = e.target
      setNewCampaignData(prev=>({
        ...prev,
        [name]:value

      }))

   }

   const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    const{name, value} = e.target
    setNewCampaignData(prev=>({
      ...prev,
      [name]:value

    }))
   }

   const handleTextArea = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
     const{name, value} = e.target
     setNewCampaignData(prev=>({
        ...prev,
        [name]: value
     }))
   }

   const dispatch = useDispatch()

   const updateGlobalForm = ()=>{
    dispatch(formActions.handleFillData({newCampaignData}))
   }

    return (
        <div className="w-full">

            <h2 className="text-lg font-[600] text-overview stacking-wide">Create New Campaign</h2>
            <div>
                <form action="w-full pt-6">

                    <div className=" w-full mb-2">
                        <label className="text-help  text-sm" htmlFor="campaignname">Campaign Name <span className={`text-red`}>*</span> :</label><br/>

                        <input 
                             type="text"
                             name= "campaignname"
                             placeholder="eg. The future is now"
                             className="border rounded-md w-full p-2.5 mt-1  text-form text-base outline-none"
                             value= {newCampaignData.campaignname}
                             onChange={(e)=>{handleChange(e)}}

                         />

                    </div>

                    <div className="w-full mb-2">
                        <label className="text-help  text-sm" htmlFor="campaignname">Campaign Description</label><br/>
                            <textarea 
                                // No need of adding type here becaue text area is a typr on its own
                                value = {newCampaignData.description}
                                onChange={(e)=>{handleTextArea(e)}}
                                className="border rounded-md w-full p-2.5 mt-1 h100px text-form text-base outline-none"
                                placeholder="Please add description to your campaign"
                                name="description"
                            />
                    </div>


                    <div className="w-full flex justify-between items-center">
                        <div className ="w-[40%] ">

                           <label className="text-help  text-sm" htmlFor="campaignname">Start Date <span className={`text-red`}>*</span> :</label><br/>

                            <input 
                                type="text"
                                name= "startdate"
                                placeholder="dd/mm/yyyy"
                                className="border rounded-md w-full p-2.5 mt-1 text-form text-base outline-none"
                                value= {newCampaignData.startdate}
                                onChange={(e)=>{handleChange(e)}}

                            />

                        </div>

                        <div className ="w-[40%] ">

                           <label className="text-help  text-sm" htmlFor="campaignname">End Date <span className={`text-red`}>*</span> :</label><br/>

                            <input 
                                type="text"
                                name= "enddate"
                                placeholder="dd/mm/yyyy"
                                className="border rounded-md w-full p-2.5 mt-1  text-form text-base outline-none"
                                value= {newCampaignData.enddate}
                                onChange={(e)=>{handleChange(e)}}

                            />

                        </div>

                        

                    </div>

                    <div className="w-full flex justify-between  items-center border mt-4">
                        <p className="text-help text-sm">Want to receive daily digest about the campaign?</p>

                         <div className={`bg-[#6E0080] rounded-xl w-10 flex ${ newCampaignData.dailydigest? 'justify-end':'justify-start'} `}>
                            <input 
                               type="button"
                               name = "dailydigest"
                               onClick={handleDigest}
                               value = {String(newCampaignData.dailydigest)}
                               className="bg-sidebar hover:cursor-pointer rounded-full text-sidebar w-[23px] h-[23px] text-[7px] border-none"
                            />
                         </div>
                    </div>

                    <div className="w-full mb-2">
                        <label className="text-help  text-sm" htmlFor="campaignname">Campaign Description</label><br/>
                            <textarea 
                                // No need of adding type here becaue text area is a typr on its own
                                value = {newCampaignData.description}
                                onChange={(e)=>{handleTextArea(e)}}
                                className="border rounded-md w-full p-2.5 mt-1 h100px text-form text-base outline-none"
                                placeholder="Add a key word ling by pressing enter after iput"
                                name="description"
                            />
                    </div>

                    <div className="w-full">

                            <label className="text-help  text-sm" htmlFor="campaignname">Link Keywords<span className={`text-red`}>*</span> :</label><br/>
                            <div className="w-full p-2 h-[70px] border rounded-md">
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
                                
                            </div>

                    </div>

                    <div className="w-[70%] mt-2.5">

                        <p className="text-help text-xs w-full mb-1">Kindly select how often you want to receive daily digest</p>

                       <div className="p-1.5 w-[155px] border rounded">
 
                            <select 
                                className="w-full border-none text-xs outline-none"
                                value= {newCampaignData.frequency}
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


                    </div>

                    <div className=" mt-[1.5re] w-[60%] flex items-center justify-between">
                        <button onClick={updateGlobalForm} className={`p-1.5 border border-overview text-overview rounded-md w-[45%]`}>Cancel</button>
                        <button className={`p-1.5 border text-[#FFFFFF] rounded-md w-[45%] bg-overview`}>Create Campaign</button>
                    </div>


                  

                </form>


            </div>

        </div>
    )
}

export default NewCampaign