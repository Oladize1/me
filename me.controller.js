import axios from "axios"
export const meController = async (req, res) => {
    try {
        const me = {
            email: "pamoladize10@gmail.com",
            name: "Pamilerin Marcus Oladunjoye",
            stack: "Node.js/Express"
        }
        const funFacts = await getFacts()
        return res.status(200).json({status: "success", user: me, timestamps: new Date().toISOString(), fact: funFacts})
    } catch (error) {
        return res.status(500).json(error || "Internal Server Error")
    }
} 

async function getFacts(){
    try {
        return await axios.get('https://catfact.ninja/fact').then(res => res.data.fact)
    } catch (error) {
        throw new Error(error || "Failed to Fetch fact")
    }
}