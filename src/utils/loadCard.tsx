
const loadCard = async() => {
    const res = await fetch('http://localhost:5000/card',{
        cache:"no-cache"
    })
    return res.json()
}

export default loadCard;