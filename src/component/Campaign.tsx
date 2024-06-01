
import React, { useEffect, useState } from "react";
import axios from "axios";
import search from "../images/Vector.png"
import eye from "../images/Vector (5).png";
import edit from "../images/Group.png";
import deleteIcon from "../images/material-symbols_delete-outline-rounded.png";
import backArrow from "../images/material-symbols_arrow-back-ios-rounded.png";
import nextArrow from "../images/material-symbols_arrow-back-ios-rounded (1).png";
import { useDispatch } from "react-redux";
import { formActions } from "../store";
import { modelType } from "../constant/model";
import "../index.css"
import { overlayActions } from "../store/overlay-store";

const Campaign: React.FC = () => {
  const [campaignList, setCampaignList] = useState<modelType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const[active, setActive] = useState<modelType[]>([])
  const[Inactive,setInactive] =useState<modelType[]>([])

  const columnArray = ["S/N", "Campaign Name", "Start Date", "Status", "Action"];
  const arr = [1, 2, 3, 4, 5, 6, 7];

  const dispatch = useDispatch();

  const handleView = (idx: number) => {
    dispatch(formActions.handleFillData(campaignList[idx]));
    console.log(campaignList[idx]);
  };

  const handleEdit = (idx:number)=>{
    dispatch(formActions.handleFillData(campaignList[idx]));
  }

  const handleDelete = (idx:number)=>{
    dispatch(formActions.handleDirectDelete(campaignList[idx]));
    dispatch(overlayActions.renderConfirmDelete())
  }

  useEffect(() => {
    axios
      .get("https://infinion-test-int-test.azurewebsites.net/api/campaign")
      .then((response) => {
        setCampaignList(response.data);
        setActive(response.data.filter((items:any)=>items.campaignStatus === "Inactive"))
        setInactive(response.data.filter((items:any)=>items.campaignStatus === "Active"))
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
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
      <h2 className="worksans text-xl font-semibold text-overview stacking-wide">All Campaigns</h2>
      <div className="flex flex-col pt-4">

        <div className="w-full">

          <div className="flex items-center justify-between">

            <div className="indicator flex items-center gap-2 w-1/2">
              <button className="rounded-md p-2 bg-none border border-overview text-overview text-sm font-medium">All {campaignList.length}</button>
              <button className="rounded-md p-2 bg-none border border-overview text-overview text-sm font-medium">Inactive {active.length}</button>
              <button className="rounded-md p-2 bg-none border border-overview text-overview text-sm font-medium">Active {Inactive.length}</button>
              
            </div>

            {/* Filtering */}

            <form action=""
              className="w-1/2 flex items-center justify-between"
            >

              {/* search */}
              <div className="flex items-center justify-between border rounded-md w-[45% py-2.5 px-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none font-lg border-none bg-none w-[90%]"

                />

                <img className="hover:cursor-pointer" src={search} alt=" serch icon" />

              </div>

              <div className="w-[45%] py-2.5 px-3 border rounded-md">

                <select
                  className="w-full outline-none border-none text-overview text-sm"
                  id="favColor"
                  // onChange={click}
                  name="date filtering"
                >
                  <option className="text-overview text-sm" value="">Filter by date</option>
                  <option className="text-overview text-sm" value="red">Red</option>
                  <option className="text-overview text-sm" value="yellow">Yellow</option>
                  <option className="text-overview text-sm" value="blue">Blue</option>
                  <option className="text-overview text-sm" value="orange">Orange</option>
                  <option className="text-overview text-sm" value="green">Green</option>
                  <option className="text-overview text-sm" value="indigo">Indigo</option>
                  <option className="text-overview text-sm" value="violet">Violet</option>
                </select>



              </div>


            </form>


          </div>

        </div>

        <div className="deatls mt-8">
          <div className="w-full flex items-center py-1.5 px-2 justify-between bg-sidebar">
            {columnArray.map((item, idx) => (
              <p key={idx} className="w-[20%] text-allcheader font-bold text-xs">
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            {campaignList.map((campaign, idx) => (
              <div key={campaign.id} className="w-full flex items-center py-1.5 px-2 justify-between border-b">
                <p className="w-[20%] text-sm text-help font-medium">{idx + 1}.</p>
                <p className="w-[20%] text-sm text-help font-medium">{campaign.campaignName}</p>
                <p className="w-[20%] text-sm text-help font-medium">
                  {new Date(campaign.startDate).toLocaleDateString()}
                </p>
                <p className={`${campaign.campaignStatus === "Active" ? 'text-[#009918]' : 'text-[#990000]'} w-[20%] text-sm font-bold`}>
                  {campaign.campaignStatus.toUpperCase()}
                </p>
                <div className="w-[20%] flex items-center gap-4">
                  <img
                    className="hover:cursor-pointer"
                    src={eye}
                    onClick={() => handleView(idx)}
                    alt="eye icon"
                  />
                  <img
                    onClick = {()=>handleDelete(idx)}
                    className="hover:cursor-pointer"
                    src={deleteIcon}
                    alt="delete icon"
                  />
                  <img 
                     className="hover:cursor-pointer"
                     src={edit} 
                     alt="edit icon" 
                     onClick={()=>handleEdit(idx)}
                    />
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <img src={backArrow} alt="arrow" />
                <div className="flex items-center justify-between">
                  {arr.map((num, numid) => (
                    <button key={numid} className="text-help text-base font-medium p-2 border-none rounded-full">
                      {num}
                    </button>
                  ))}
                  <span>...</span>
                  <button className="p-2 border-none rounded-full">15</button>
                </div>
                <img src={nextArrow} alt="arrow" />
              </div>
              <p className="text-sm text-dark font-medium">
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
