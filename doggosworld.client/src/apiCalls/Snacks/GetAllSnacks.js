import { baseUrl } from "../API";

const getAllSnacks = async () => {
    try {
        const response = await fetch(`${baseUrl}/Snacks`);

        if (!response.ok) {
            throw new Error("Failed to fetch snacks");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching snacks data:", error.message);
        throw new Error("An error occurred while fetching snacks data. Please try again later.");
    }
};

export default getAllSnacks;