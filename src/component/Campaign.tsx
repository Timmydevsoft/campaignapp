import React, { useEffect, useState } from "react";
import axios from "axios";
import AllCampaignHeader from "./AllCampaignHeader";
import eye from "../images/Vector (5).png";
import edit from "../images/Group.png";
import deleteIcon from "../images/material-symbols_delete-outline-rounded.png";
import backArrow from "../images/material-symbols_arrow-back-ios-rounded.png";
import nextArrow from "../images/material-symbols_arrow-back-ios-rounded (1).png";


// Define the structure of a campaign object
interface Campaign {
  id: number;
  campaignName: string;
  campaignDescription: string;
  startDate: string;
  endDate: string;
  digestCampaign: string;
  linkedKeywords: string[];
  dailyDigest: string;
  campaignStatus: string;
}

const Campaign: React.FC = () => {
  const [campaignList, setCampaignList] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const columnArray = ["S/N", "Campaign Name", "Start Date", "Status", "Action"];
  const arr = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    
    axios.get("https://infinion-test-int-test.azurewebsites.net/api/campaign")
      .then((response) => {
        setCampaignList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

 

  

  return (
    <div className="">
      <h2 className="text-lg font-[600] text-overview stacking-wide">All Campaigns</h2>
      <div className="flex flex-col pt-4">
        <AllCampaignHeader />
        <div className="deatls mt-8">
          <div className="w-full flex items-center py-1.5 px-2 justify-between bg-sidebar">
            {columnArray.map((item, idx) => (
              <p key={idx} className="w-[20%] text-allcheader font-medium text-xs">
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            {campaignList.map((campaign, idx) => (
              <div key={campaign.id} className="w-full flex items-center py-1.5 px-2 justify-between border-b">
                <p className="w-[20%] text-base text-help font-normal">{idx + 1}.</p>
                <p className="w-[20%] text-base text-help font-normal">{campaign.campaignName}</p>
                <p className="w-[20%] text-base text-help font-normal">{new Date(campaign.startDate).toLocaleDateString()}</p>
                <p className={`${campaign.campaignStatus === "Active" ? 'text-[#009918]' : 'text-[#990000]'} w-[20%] text-sm font-bold`}>
                  {campaign.campaignStatus.toUpperCase()}
                </p>
                <div className="w-[20%] flex items-center gap-4">
                  <img 
                      className="hover:cursor-pointer"
                      src={eye} onClick={()=>{}} 
                      alt="eye icon" 
                  />
                  <img className="hover:cursor-pointer" src={edit} alt="edit icon" />
                  <img className="hover:cursor-pointer" src={deleteIcon} alt="delete icon" />
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <img src={backArrow} alt="arrow" />
                <div className="flex items-center justify-between">
                  {arr.map((num, numid) => (
                    <button key={numid} className="text-help p-2 border-none rounded-full">
                      {num}
                    </button>
                  ))}
                  <span>...</span>
                  <button className="p-2 border-none rounded-full">15</button>
                </div>
                <img src={nextArrow} alt="arrow" />
              </div>
              <p className="mt-12 text-base text-dark font-normal">
                Showing the result of {campaignList.length} out of 40
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;