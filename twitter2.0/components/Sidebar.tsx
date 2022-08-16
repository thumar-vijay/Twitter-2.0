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
    <div>
        <img className='h-10 w-10' src="https://links.papareact.com/drq" alt="twitter_logo"/>  
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="HashtagIcon"/>
        <SidebarRow Icon={BellIcon} title='BellIcon'/>
        <SidebarRow Icon={BookmarkIcon} title='BookmarkIcon'/>
        <SidebarRow Icon={CollectionIcon} title='CollectionIcon'/>
        <SidebarRow Icon={BellIcon} title='BellIcon'/>
        <SidebarRow Icon={BellIcon} title='BellIcon'/>
    </div> 
  )
}

export default Sidebar