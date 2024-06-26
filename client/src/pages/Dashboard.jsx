import React from 'react'
import { useState , useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import DashSidebar from '../components/DashSidebar'
import DashProfile from '../components/DashProfile'


export default function Dashboard() {
 
 const location = useLocation();
 const [tab,setTab] = useState('');
 useEffect(()=>{
   const urlParms = new URLSearchParams(location.search)
   const tabFromUrl = urlParms.get('tab');
   if(tabFromUrl){
     setTab(tabFromUrl);
   }
 },[location.search]);

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
    <div className='md:w-56'>
      {/* Side bar */}
         <DashSidebar />
    </div>
    
         {/* Profile */}
         
         {
         tab === 'profile' && <DashProfile />
            
         }
    </div>
  )
}
