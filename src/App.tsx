import { useSelector } from "react-redux";
import Campaign from "./component/Campaign";
import ContentHeader from "./component/ContentHeader";
import NewCampaign from "./component/NewCampaign";

import Overview from "./component/Overview";
import Sidebar from "./component/Sidebar";
import SuccessfulDelete from "./component/SuccessFullDelete";
import SuccessfulCreation from "./component/SuccessfulCreation";
import SuccefullStop from "./component/SuccessfulStop";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {

  const successCreate = useSelector((state:any)=>state.overlay.successCreate)
  const successPost = useSelector((state:any)=>state.overlay.successPost)
  const successDelete = useSelector((state:any)=>state.overlay.successDelete)

  return (
    <div className={`flex w-full bg-bacground h-[100vh]`}> 

    <Router>
      <div className="w-[20.4%]"> 
        <Sidebar/>
     </div>

     <div className="w-[79.6%] h-full flex flex-col">  
        <ContentHeader/>
         <div className="px-[5%]">

          <Routes>
            <Route path="/" element= {<Overview/>}/>
            <Route path="/new-campaign" element= {<NewCampaign/>}/>
            <Route path="/campaign" element= {<Campaign/>}/>
            

          </Routes>

          {
            successCreate? (<SuccessfulCreation/>): null
          }
          {
            successPost? (<SuccefullStop/>):null
          }

          {
            successDelete? (<SuccessfulDelete/>): null
          }

         </div>

       </div>


    </Router>


    </div>

  
  
  )
}


