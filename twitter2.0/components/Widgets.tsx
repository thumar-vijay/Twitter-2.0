import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    <div className='col-span-2 mt-2 px-2 hidden lg:inline'>
       <div className='flex items-center space-x-2 rounded-full bg-gray-100 p-3'>
        <SearchIcon className='w-5 h-5 ' />
        <input type='text' placeholder='Search Twitter' className='bg-transparent flex-1 outline-none ' />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{ height: 400 }}
      /> 
    </div>
  )
}

export default Widgets 