import overviewd from "../images/ri_dashboard-2-line.png"
import campg from "../images/material-symbols_campaign-outline.png"
import mktintelligentd from "../images/fluent-mdl2_insights.png"
import settingd from "../images/ep_setting.png"
import campb from "../images/campaignIncative.svg"
import overa from "../images/dasha.svg"
import light from "../images/light.svg"
import sett from "../images/set.svg"
interface propsType{
    name: string;
    icon: string;
    icona: string;
    link: string
}

export const sidenavItems: propsType[] = [
   {
    name: "Overview",
    link: "/",
    icon: overa,
    icona: overviewd

   },

   {
    name: "Campaign",
    link: '/campaign',
     icon: campg,
     icona: campb 
   },
   {
    name: "Marketing intelligence",
    link: '',
    icon: light,
    icona: mktintelligentd
   },
   {
    name: "Account Settings",
    link: '',
    icon: settingd,
    icona: sett
   }

]


export const campaignList = [
    {
        index: 1,
        campaignName: "Infinion Technology",
        status: false,
        date: "27/10/2022"
    },
    {
        index: 1,
        campaignName: "Infinion Technology",
        status: false,
        date: "27/10/2022"
    },
    {
        index: 1,
        campaignName: "Infinion Technology",
        status: true,
        date: "27/10/2022"
    },
    {
        index: 1,
        campaignName: "Infinion Technology",
        status: true,
        date: "27/10/2022"
    }
    ,
    {
        index: 1,
        campaignName: "Infinion Technology",
        status: false,
        date: "27/10/2022"
    }
    ,
    {
        index: 1,
        campaignName: "Infinion Technology",
        status: false,
        date: "27/10/2022"
    }
    ,
    {
        index: 1,
        campaignName: "Infinion Technology",
        status: false,
        date: "27/10/2022"
    }
    ,
    {
        index: 1,
        campaignName: "Infinion Technology",
        status: false,
        date: "27/10/2022"
    }
    ,
    {
        index: 1,
        campaignName: "Infinion Technology",
        status: true,
        date: "27/10/2022"
    }
    ,
    {
        index: 1,
        campaignName: "Infinion Technology",
        status: false,
        date: "27/10/2022"
    }
]
