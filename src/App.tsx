import Campaign from "./component/Campaign";
import ContentHeader from "./component/ContentHeader";
import NewCampaign from "./component/NewCampaign";
import NewCampaignInfo from "./component/NewCampaignInfo";
import Overview from "./component/Overview";
import Sidebar from "./component/Sidebar";

export default function App() {
  return (
    <div className="flex w-full bg-bacground h-[100%]">
      <div className="w-[20.4%]">
        <Sidebar/>
      </div>

      <div className="w-[79.6%] h-full flex flex-col">

        <ContentHeader/>
        <main className="pt-4 pl-12 pr-12 flex-1">
          {/* <Overview/> */}
          <Campaign/>
          {/* <NewCampaign/> */}
          {/* <NewCampaignInfo/> */}
        </main>


      </div>


  
    </div>
  )
}