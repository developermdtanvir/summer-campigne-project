
const loadAllCountris = async() => {
    const res = await fetch('http://localhost:5000/countries')
    return res.json()
}

export default loadAllCountris