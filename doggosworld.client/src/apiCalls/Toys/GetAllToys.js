import { baseUrl } from "../API";

const getAllToys = async () => {
    try {
        const response = await fetch(`${baseUrl}/Toys`);

        if (!response.ok) {
            throw new Error("Failed to fetch toys");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching toys data:", error.message);
        throw new Error("An error occurred while fetching toys data. Please try again later.");
    }
};

export default getAllToys;