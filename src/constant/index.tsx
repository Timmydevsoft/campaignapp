import overviewd from "../images/ri_dashboard-2-line.png"
import campg from "../images/material-symbols_campaign-outline.png"
import mktintelligentd from "../images/fluent-mdl2_insights.png"
import settingd from "../images/ep_setting.png"
interface propsType{
    name: string;
    icon: string;
    link: string
}

export const sidenavItems: propsType[] = [
   {
    name: "Overview",
    link: "/",
    icon: overviewd
   },

   {
    name: "Campaign",
    link: '/campaign',
    icon: campg
   },
   {
    name: "Marketing intelligence",
    link: '/',
    icon: mktintelligentd
   },
   {
    name: "Account Settings",
    link: '/',
    icon: settingd
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
