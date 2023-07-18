import Image from "next/image";
import Link from "next/link";


const Country = ({item}:{item:any}) => {

    console.log(item);
    

  return (
    <Link href={`/course/${item.id}`}>
      <div className="card bg-base-100 shadow-xl image-full">
      <figure><Image className=" opacity-100 w-full" src={item.flag} width={1000} height={1000} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.language}</p>
      </div>
    </div>
    </Link>
  )
}

export default Country