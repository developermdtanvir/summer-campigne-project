
const loadSingleCountris = async(id:string) => {      
        const res = await fetch(`http://localhost:5000/countries/${id}`)
        return res.json()
}

export default loadSingleCountris;