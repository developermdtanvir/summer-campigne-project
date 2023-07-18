import { BsFillLightningChargeFill, BsUnity } from 'react-icons/bs'
import { MdNotifications } from "react-icons/md"
const Card = ({item}:{item:any}) => {
  return (  
    <div>
      <div className={` mx-auto border bg-slate-100 shadow-md rounded-md p-4 text-black space-y-4 ${item.style} mt-5`}>
      <div className='rounded-full w-10 h-10 shadow-lg flex justify-center items-center'>
        <BsFillLightningChargeFill className=' text-black' />
      </div>
        <p className='text-2xl font-bold'>{item.name}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, necessitatibus?</p>
        <div className=' text-4xl font-bold'>$24 <sub className='text-xs'>/month</sub></div>
        <div className="divider"></div>
        <div className=' flex justify-center items-center space-x-2'>
          <BsUnity className='text-2xl' />
          <div>
            <h3 className=' text-xl font-bold'>Unlimited viewers</h3> 
            <p>Easy coustomizable global style</p>
          </div>  
        </div>
        <div className=' flex justify-center items-center space-x-2'>
          <MdNotifications className='text-2xl' />
          <div>
            <h3 className=' text-xl font-bold'>Up to 3 Project</h3> 
            <p>Easy coustomizable global style</p>
          </div>  
        </div>
        <div className=' flex justify-center items-center space-x-2'>
          <MdNotifications className='text-2xl' />
          <div>
            <h3 className=' text-xl font-bold'>Up to 2 Editors</h3> 
            <p>Easy coustomizable global style</p>
          </div>  
        </div>
        <div className="divider"></div>
        <button className='btn btn-outline  w-full'>Get started</button>
    </div>
    </div>
  )
}

export default Card