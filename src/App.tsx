import { useSelector } from "react-redux";
import Campaign from "./component/Campaign";
import ContentHeader from "./component/ContentHeader";
import NewCampaign from "./component/NewCampaign";

import Overview from "./component/Overview";
import Sidebar from "./component/Sidebar";
import SuccessfulDelete from "./component/SuccessFullDelete";
import SuccessfulCreation from "./component/SuccessfulCreation";
import SuccefullStop from "./component/SuccessfulStop";
import NewCampaignInfo from "./component/NewCampaignInfo";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateSuccessful from "./component/UpdateSuccessful";

export default function App() {

  const successCreate = useSelector((state:any)=>state.overlay.successCreate)
  const successDelete = useSelector((state:any)=>state.overlay.successDelete)
  const confirmStop = useSelector((state:any)=>state.overlay.confirmDelete)
  const showCampaign = useSelector((state:any)=>state.formData.show)
  const updateDisplay = useSelector((state:any)=>state.overlay.update)

  return (
    <div className={`flex w-full bg-bacground h-[100vh]`}> 

    <Router>
      <div className="w-[20.4%]"> 
        <Sidebar/>
     </div>

     <div className="w-[79.6%] h-full flex flex-col">  
        <ContentHeader/>
         <div className="px-[5%] h-full">

          <Routes>
            <Route path="/" element= {<Overview/>}/>
            <Route path="/new-campaign" element= {<NewCampaign/>}/>
            <Route path="/campaign" element= {showCampaign?<NewCampaignInfo/>:<Campaign/>}/>
            

          </Routes>

          {
            successCreate? (<SuccessfulCreation/>): null
          }
          {
            confirmStop? (<SuccefullStop/>):null
          }

          {
            successDelete? (<SuccessfulDelete/>): null
          }

          {
            updateDisplay? (<UpdateSuccessful/>): null
          }

         </div>

       </div>


    </Router>


    </div>

  
  
  )
}


