import Carosel from "@/components/Carosel";
import Country from "@/components/Country";
import loadAllCountris from "@/utils/loadAllCountris";

export default async function Home () {

  const data = await loadAllCountris();

 
  return (
    <main className="">
      <Carosel />
      <div className="flex justify-center py-10 font-bold text-3xl">
        <p>Our Services</p>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {
          data.slice(0,10).map(item => <Country item={item} />)
          }
        </div>
    </main>
  )
}
