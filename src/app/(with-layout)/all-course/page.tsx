import Country from "@/components/Country"
import loadAllCountris from "@/utils/loadAllCountris"

const AllCourse = async () => {
    const course = await loadAllCountris()
  return (
    <div className="pt-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-2">
            {course.map((item:any,index:number) => <Country key={index} item={item} />)}
        </div>
    </div>
  )
}

export default AllCourse