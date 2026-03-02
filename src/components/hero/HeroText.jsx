import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const HeroText = () => {
  return (
    <div className='pt-15 max-w-1/3 flex flex-col h-full justify-between'>
      <div className='h-100 '>
        <h1 className='text-7xl mb-8 font-bold leading-18'>Prospective customer segmentation</h1>
        <p className="max-w-[90%] text-[1.35rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum dolorum nobis modi accusantium dolores quibusdam sunt consectetur, recusandae deleniti eum iste consequuntur et, ad nulla nostrum voluptates. Quidem, ipsam.</p>
      </div>

      <span className='mt-auto text-gray-900 ms-[-1.85rem]'>
        <ArrowUpRight size="7rem" />
      </span>
    </div>
  )
}

export default HeroText
