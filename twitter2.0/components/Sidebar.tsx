import React from 'react'
import SidebarRow from './SidebarRow'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
        <img className='h-10 w-10 m-3' src="https://links.papareact.com/drq" alt="twitter_logo"/>  
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title='Notification'/>
        <SidebarRow Icon={MailIcon} title='Messages'/>
        <SidebarRow Icon={BookmarkIcon} title='Bookmarks'/>
        <SidebarRow Icon={CollectionIcon} title='List'/>
        <SidebarRow Icon={UserIcon} title='Sign In'/>
        <SidebarRow Icon={DotsCircleHorizontalIcon} title='More'/>
    </div> 
  )
}

export default Sidebar