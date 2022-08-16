import React, { SVGProps } from 'react'

interface props{
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: String
}

function SidebarRow({Icon, title}:props) {
  return (
    <div className='flex items-center space-x-2 px-4 py-3'>
        <Icon className='w-6 h-6'/>
        <p>{title}</p>
    </div>
  )
}

export default SidebarRow