import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch all contacts
export const fetchContacts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching contacts:", error);
        throw error;
    }
};

// Add a new contact
export const addContact = async (contact) => {
    try {
        const response = await axios.post(API_URL, contact);
        return response.data;
    } catch (error) {
        console.error("Error adding contact:", error);
        throw error;
    }
};

// Update an existing contact
export const updateContact = async (id, contact) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, contact);
        return response.data;
    } catch (error) {
        console.error("Error updating contact:", error);
        throw error;
    }
};

// Delete a contact
export const deleteContact = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error("Error deleting contact:", error);
        throw error;
    }
};
