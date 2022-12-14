import { CalendarIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchCircleIcon } from '@heroicons/react/outline'
import React,{useState} from 'react'

export default function TweetBox() {
    const [inputData, setInputData] = useState<string>('')
    return ( 
        <div className='flex space-x-2 p-5'>
            <img className='h-14 w-14 rounded-full object-cover mt-4' src="https://links.papareact.com/gll" alt="" />
            <div className='flex flex-1 items-center pl-2'>
                <form className='flex flex-1 flex-col'>
                    <input value={inputData} onChange={(e)=>{setInputData(e.target.value)}} type="text" placeholder="What's Happning?" className='h-24 w-full text-xl outline-none placeholder:text-xl' />
                    <div className='flex items-center'>
                        <div className='flex space-x-2 text-twitter flex-1'>
                            <PhotographIcon className='h-5 w-5 cursor-pointer transation-transform duration-150 ease-out hover:scale-150' />
                            <SearchCircleIcon className= 'h-5 w-5' />
                            <EmojiHappyIcon className='h-5 w-5' />
                            <CalendarIcon className='h-5 w-5' />
                            <LocationMarkerIcon className='h-5 w-5' />
                        </div>
                        <button disabled={!inputData} className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
