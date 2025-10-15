import axios from "axios"


export const meController = async (req, res) => {
    try {
        const me = {
            email: "pamoladize10@gmail.com",
            name: "Pamilerin Marcus Oladunjoye",
            stack: "Node.js/Express"
        }
        const funFacts = await getFacts()
        return res.status(200).json({status: "success", user: me, timestamp: new Date().toISOString(), fact: funFacts})
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message || "Internal Server Error"
        })
    }
} 

// Fetch random facts from the cats API
async function getFacts(){
    try {
        const { data } = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
        return data.fact;
    } catch (error) {
        console.error("Failed to fetch cat fact:", error.message);
        return "Cats sleep for around 13–14 hours a day — fallback fact.";
    }
}