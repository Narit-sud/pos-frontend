import axios from "axios"

export async function getAllProductMain() {
    try {
        const { data } = await axios.get("http://localhost:3333/productMain", {
            withCredentials: true,
        })
        console.log(data.data)
        return data.data
    } catch (error) {
        console.error(error)
    }
}
