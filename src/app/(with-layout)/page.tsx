import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Carosel from "@/components/Carosel";
import Country from "@/components/Country";
import loadAllCountris from "@/utils/loadAllCountris";
import loadCard from "@/utils/loadCard";
import Link from "next/link";


export default async function Home () {

  const data = await loadAllCountris();

  const card = await loadCard()
 
  return (
    <main className="">
      <Carosel />
      <Banner />
      <div className="flex justify-center py-10 font-bold text-3xl">
        <p className="text-black">Explore Destination</p>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-2">
          {
          data.slice(0,5).map((item:any,index:number) => <Country key={index} item={item} />)
          }
        </div>
         <div className="flex justify-center items-center my-4">
            <Link href={'/all-course'}><button className="text-xl text-black ">All English Cource</button></Link>
         </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-5">
          {
            card.map((item:any) => <Card item={item} />)
          }
        </div>
    </main>
  )
}
