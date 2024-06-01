import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { overlayActions } from "../store/overlay-store";
import "../index.css"

const NewCampaign: React.FC = () => {
  interface FormData {
    campaignName: string;
    campaignDescription: string;
    startDate: string;
    endDate: string;
    digestCampaign: boolean;
    frequency: string;
  }

  const [newCampaignData, setNewCampaignData] = React.useState<FormData>({
    campaignName: "",
    campaignDescription: "",
    startDate: "",
    endDate: "",
    digestCampaign: false,
    frequency: "",
  });

  interface Keyword {
    keyword: string;
  }

  const [keyword, setKeyword] = React.useState<string>("");
  const [keywords, setKeywords] = React.useState<Keyword[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      setKeywords([...keywords, { keyword }]);
      setKeyword("");
    }
  };

  const handleDigest = () => {
    setNewCampaignData((prev) => ({
      ...prev,
      digestCampaign: !prev.digestCampaign,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCampaignData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewCampaignData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCampaignData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const isValidDate = (dateString: string) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidDate(newCampaignData.startDate) || !isValidDate(newCampaignData.endDate)) {
      alert("Please enter valid dates in the format YYYY-MM-DD");
      return;
    }

    const data = {
      ...newCampaignData,
      startDate: new Date(newCampaignData.startDate).toISOString(),
      endDate: new Date(newCampaignData.endDate).toISOString(),
      linkedKeywords: keywords.map((k) => k.keyword),
      dailyDigest: newCampaignData.frequency,
    };

    try {
      const response = await axios.post(
        "https://infinion-test-int-test.azurewebsites.net/api/campaign",
        data
      );
      
      console.log(response.status);
      dispatch(overlayActions.renderSuccess());
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-lg worksans font-bold text-overview">
        Create New Campaign
      </h2>
      <div>
        <form className="w-full pt-6" onSubmit={handleSubmit}>
          <div className="w-full mb-2">
            <label className="text-help text-sm font-medium" htmlFor="campaignName">
              Campaign Name <span className={`text-red`}>*</span> :
            </label>
            <br />
            <input
              type="text"
              name="campaignName"
              placeholder="eg. The future is now"
              className="border rounded-md w-full p-2 mt-1 text-base outline-none"
              value={newCampaignData.campaignName}
              onChange={handleChange}
            />
          </div>

          <div className="w-full mb-2">
            <label className="text-help text-sm font-medium" htmlFor="campaignDescription">
              Campaign Description
            </label>
            <br />
            <textarea
              value={newCampaignData.campaignDescription}
              onChange={handleTextArea}
              className="border rounded-md w-full p-2.5 mt-1 h100px text-base outline-none"
              placeholder="Please add description to your campaign"
              name="campaignDescription"
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <div className="w-[40%]">
              <label className="text-help text-sm font-medium" htmlFor="startDate">
                Start Date <span className={`text-red`}>*</span> :
              </label>
              <br />
              <input
                type="text"
                name="startDate"
                placeholder="YYYY-MM-DD"
                className="border rounded-md w-full p-2.5 mt-1 text-base outline-none"
                value={newCampaignData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="w-[40%]">
              <label className="text-help text-sm font-medium" htmlFor="endDate">
                End Date <span className={`text-red`}>*</span> :
              </label>
              <br />
              <input
                type="text"
                name="endDate"
                placeholder="YYYY-MM-DD"
                className="border rounded-md w-full p-2.5 mt-1 text-base outline-none"
                value={newCampaignData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-full flex justify-between items-center border mt-4">
            <p className="text-help text-sm font-medium">
              Want to receive daily digest about the campaign?
            </p>
            <div
              className={`bg-[#6E0080] rounded-xl w-10 flex ${
                newCampaignData.digestCampaign ? "justify-end" : "justify-start"
              } `}
            >
              <input
                type="button"
                name="digestCampaign"
                onClick={handleDigest}
                value={String(newCampaignData.digestCampaign)}
                className="bg-sidebar hover:cursor-pointer rounded-full text-sidebar w-[23px] h-[23px] text-[7px] border-none"
              />
            </div>
          </div>

          <div className="w-full mb-2">
            <label className="text-help text-sm font-medium" htmlFor="keywords">
              Link Keywords <span className={`text-red`}>*</span> :
            </label>
            <br />
            <div className="w-full p-2 h-[70px] border rounded-md">
              <input
                type="text"
                placeholder="To add keywords, type your keyword and press enter"
                className="border-none rounded-md w-[50%] p-1 text-form text-base outline-none"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>

          <div className="w-[70%] mt-2.5">
            <p className="text-help text-sm font-medium w-full mb-1">
              Kindly select how often you want to receive daily digest
            </p>
            <div className="p-1.5 w-[155px] border rounded">
              <select
                className="w-full border-none text-xs outline-none"
                value={newCampaignData.frequency}
                onChange={handleSelect}
                name="frequency"
              >
                <option className="text-xs text-help" value="">
                  Select
                </option>
                <option className="text-xs text-help" value="daily">
                  daily
                </option>
                <option className="text-xs text-help" value="weekly">
                  weekly
                </option>
                <option className="text-xs text-help" value="monthly">
                  monthly
                </option>
                <option className="text-xs text-help" value="annually">
                  annually
                </option>
              </select>
            </div>
          </div>

          <div className="mt-[1.5rem] w-[60%] flex items-center justify-between">
            <button
              type="button"
              className="p-1.5 border border-overview text-overview rounded-md w-[45%]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-1.5 border text-[#FFFFFF] rounded-md w-[45%] bg-overview"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCampaign;
