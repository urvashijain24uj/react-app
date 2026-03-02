import { ArrowRight } from 'lucide-react'   

const ImageCard = ({ imgPath, id, description, tag, color }) => { 
  
  return (
    <div className="w-80 h-[70vh] rounded-4xl overflow-hidden relative min-w-85">
      <img className='w-full h-full object-cover' src={imgPath} alt="" />
      <span className='absolute top-7 left-7 p-6 rounded-full bg-white font-bold text-3xl leading-4'>{id + 1}</span>
      <div className="absolute flex flex-col bottom-9 left-7 right-7 bg-opacity-50 gap-6">
        <p className="text-xl text-white">{description}</p> 
        <div className="flex justify-between gap-4">
          <button style={{ backgroundColor: color }} className='text-white rounded-full py-3 px-7 cursor-pointer'>{tag}</button>
          <button style={{ backgroundColor: color }} className='text-white rounded-full p-3 cursor-pointer'>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
