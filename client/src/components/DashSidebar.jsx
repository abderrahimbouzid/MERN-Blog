import React from 'react'
import { Sidebar } from "flowbite-react";
import {HiUser,HiArrowSmRight} from "react-icons/hi";
import { useState , useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function SideDashboard() {
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
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
         <Sidebar.Item 
         active={tab === 'profile'} 
         icon={HiUser} label={"user"}
          labelColor='dark' as='div'>
          Profile
         </Sidebar.Item>
         </Link>
         <Sidebar.Item  icon={HiArrowSmRight}  className="cursor-pointer">
          Sign Out
         </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
