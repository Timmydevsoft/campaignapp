import React from "react"
import logo from "../images/arcticons_google-messages.png"
import add from "../images/material-symbols_add.png"
import help from "../images/material-symbols_help-outline.png"
import { sidenavItems } from "../constant"
import { Link } from "react-router-dom"
import { useLocation, useNavigate } from "react-router-dom"
import "../index.css"

const Sidebar:React.FC = ()=>{
    
    const location=useLocation()
    const navigate=useNavigate()

    const getClassName = (path: string)=>location.pathname === path? 'bg-bacground text-overview': 'bg-none text-[#455454]'
    const handleNavigation = (path:string)=>{
        navigate(path)
    }

    return(
        <div className="container bg-sidebar w-full h-full py-4 pl-6 pr-2">
            <header className="flex items-center gap-4 mb-4">

                <img src={logo} alt="logo" />
                <span className="worksans block text-[2rem] bg-gradient-to-r from-logobi to-logobii text-transparent bg-clip-text font-bold">Scrutz</span>

            </header>

            <div className="management flex flex-col align-baseline mb-8">
                <button className="bg-overview border-none rounded-sm py-2 flex px-4 -items-center gap-4 text-bacground text-sm mb-[1.25rem]">
                    <img src={add} alt="plus icon" />
                    <Link className="text-sm font-semibold" to="/new-campaign">New campaign</Link>
                </button>

                <div className="flex flex-col items-baseline w-full">
                    {
                        sidenavItems.map((items,index)=>(
                        
                            <button key={index} 
                                className={`text-sm font-semibold ${getClassName(items.link)} flex items-center gap-4 px-4 py-2 bg-none hover:bg-bacground borer-none rounded-sm`}
                                onClick={()=>handleNavigation(items.link)}
                                >
                                <img src={location.pathname ===items.link? items.icona : items.icon} alt="icon" className=" h-[20px]" />
                                {items.name}
                            </button>
                        ))
                    }
                </div>


            </div>

            <div className="w-[90%] flex flex-col items-center justify-center p-8 bg-bacground rounded-sm">

                <img className="block" src={help} alt="help icon" />
                <div className="flex-flex-col items-center">

                    <h2 className="text-base bg-gradient-to-r from-logobi to-logobii text-transparent bg-clip-text text-center"> Need help?</h2>
                    <p className="text-help text-xs font-medium text-center">We’re readily available to provide help</p>

                </div>
                <a href="" className="block text-center text-xm font-semibold mt-[1rem] rounded-md border text-logobi border-logobi px-2.5 py-2">Get help</a>
            </div>

        </div>
    )
}

export default Sidebar