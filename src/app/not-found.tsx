import PageNotFound from '@/assets/page-not-found.gif'
import Image from "next/image"
import Link from 'next/link'


const NotFound = () => {
  return (
    <div className="h-screen relative flex justify-center items-center">
      <div>
        <Image className='' src={PageNotFound} alt="not found page image"  />
        <Link href='/'>
            <button className=' absolute top-3/4 text-black btn text-center'>back home page</button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound