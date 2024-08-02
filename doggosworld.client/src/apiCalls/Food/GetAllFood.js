import { baseUrl } from "../API";

const getAllFood = async () => {
    try {
        const response = await fetch(`${baseUrl}/Food`);

        if (!response.ok) {
            throw new Error("Failed to fetch food");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching food data:", error);
        throw error; 
    }
};

export default getAllFood;