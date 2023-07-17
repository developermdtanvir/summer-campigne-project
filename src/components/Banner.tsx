import unitedNetion from '@/assets/world.png'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row">
        <div className="space-y-5 lg:w-2/3 lg:p-5 p-2">
            <h1 className="text-3xl font-bold"> The faster way to learn a language</h1>
            <p className="font-semibold text-xl">Learn a new language and treat yourself to unforgettable experiences. By taking advantage of our intensive language courses abroad, you gain a truly useful skill while immersing yourself in a exciting new culture. Our language schools give you the opportunity to connect with a diverse set of individuals, so take the leap and sign up for a language study abroad today.</p>
        </div>
        <div className="bg-white p-5 rounded-md shadow-md lg:relative bottom-10 z-20 lg:mr-2">
              <div className='flex'>
                <Image className='w-20' src={unitedNetion} alt='united netions' />
                <h1 className="text-2xl font-semibold text-black">  Why learn a language abroad with EF?</h1>
              </div>
            <div className="divider"></div>
            <div className=' space-y-3 text-black'>
                <p><span></span> Personalize your language course & start any Monday</p>
                <p><span></span> Learn with friends from 100 countries</p>
                <p><span></span> Make guaranteed progress with the EF Method</p>
                <p><span></span>Study at EF-owned state-of-the-art language schools & campuses</p>
                <p><span></span> Get 24/7 support, from start to finish</p>
                <p><span></span>Globally accredited language courses with over 50 years of experience</p>
            </div>
        </div>
    </div>
  )
}

export default Banner