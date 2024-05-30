import React from "react"
import search from "../images/Vector.png"
import alarm from "../images/Vector (3).png"
import avatar from "../images/image 16.png"
import downarrow from "../images/Vector (2).png"

const ContentHeader:React.FC = ()=>{
    return(
        <div className="w-full border-b pl-12 pr-10 py-2.5 flex items-center justify-between">

            {/*search form */}

            <form action="" className="w-[45%]">
                <div className="border p-2 rounded-sm flex items-center justify-between">
                    <input 
                          type="text" 
                          placeholder="Search..." 
                          className="border-none outline-none text-help bg-none w-[80%] text-xs"
                          
                    />

                    <img className="hover:cursor-pointer" src={search} alt="search icon"/>
                </div>
            </form>


            <div className="flex items-center">

                <div className="border-r px-1">
                   <img className="hover:cursor-pointer" src={alarm} alt="notification icon" />
                </div>


                <div className="flex items-center gap-1">
                    <img className="mx-2 " src={avatar} alt="user picture" />
                    <span className="text-xs text-name">Bigtech</span>
                    <img className="hover:cursor-pointer"  src={downarrow} alt="arrow down" />
                </div>

            </div>

        </div>
    )

}

export default ContentHeader