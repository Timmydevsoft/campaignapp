import React from "react"
import search from "../images/Vector.png"

const AllCampaignHeader:React.FC = ()=>{
    const indicator = [
        {
            indication: "All",
            quantity: 90
        },
        {
            indication: "Active",
            quantity: 90
        },
        {
            indication: "Inactive",
            quantity: 90
        }
    ]
    return(
        <div className="w-full">

            <div className="flex items-center justify-between">

                <div className="indicator flex items-center gap-2 w-1/2">
                    {
                        indicator.map((items, index)=>(
                            <button key={index}

                                    className="rounded-md p-2 bg-none border border-overview text-overview text-base font-normal"

                            >{items.indication} <span>({items.quantity})</span></button>
                        
                        ))
                    }
                    
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

                        <img className="hover:cursor-pointer" src={search}alt=" serch icon" />

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
    )
}

export default AllCampaignHeader