import Image from "next/image";


const Country = ({item}) => {

    console.log(item);
    

  return (
    <div className="card bg-base-100 shadow-xl image-full">
  <figure><Image className=" opacity-100 w-full" src={item.flag} width={1000} height={1000} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.language}</p>
  </div>
</div>
  )
}

export default Country