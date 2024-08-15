import React, { createContext, useState, useEffect } from "react";
import { fetchContacts, addContact, updateContact, deleteContact } from "../utils/api";
import useGlobalToast from "./../utils/toast";

// Create a Context for managing contact data
export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    // Custom hook for displaying toasts
    const toast = useGlobalToast();

    // State to hold the list of contacts
    const [contacts, setContacts] = useState([]);

    // Effect to load contacts when the component mounts
    useEffect(() => {
        const loadContacts = async () => {
            try {
                toast.loading("Fetching Contacts"); // Show loading toast
                const data = await fetchContacts(); // Fetch contacts from API
                setContacts(data); // Update state with fetched contacts
                toast.success("Successfully fetched contacts"); // Show success toast
            } catch (error) {
                toast.error("Failed to fetch contacts"); // Show error toast
                console.error("Failed to fetch contacts:", error); // Log error
            }
        };

        loadContacts(); // Call the function to load contacts
    }, []); // Empty dependency array means this runs once on mount

    // Function to add a new contact
    const addNewContact = async (newContact) => {
        try {
            toast.loading("Adding Contact"); // Show loading toast
            const addedContact = await addContact(newContact); // Add contact via API
            setContacts([addedContact, ...contacts]); // Update state with new contact
            toast.success("Successfully added contact"); // Show success toast
        } catch (error) {
            toast.error("Failed to add contact"); // Show error toast
            console.error("Failed to add contact:", error); // Log error
        }
    };

    // Function to update an existing contact
    const editContact = async (id, updatedContact) => {
        try {
            toast.loading("Updating Contact"); // Show loading toast
            const contact = await updateContact(id, updatedContact); // Update contact via API
            setContacts(contacts.map((c) => (c.id === Number(id) ? contact : c))); // Update state with the modified contact
            toast.success("Successfully updated contact"); // Show success toast
        } catch (error) {
            toast.error("Failed to update contact"); // Show error toast
            console.error("Failed to update contact:", error); // Log error
        }
    };

    // Function to remove a contact
    const removeContact = async (id) => {
        try {
            toast.loading("Deleting Contact"); // Show loading toast
            await deleteContact(id); // Remove contact via API
            setContacts(contacts.filter((c) => c.id !== id)); // Update state by filtering out the deleted contact
            toast.success("Successfully deleted contact"); // Show success toast
        } catch (error) {
            toast.error("Failed to delete contact"); // Show error toast
            console.error("Failed to delete contact:", error); // Log error
        }
    };

    // Provide the contact data and functions to the rest of the app
    return (
        <ContactContext.Provider value={{ contacts, addNewContact, editContact, removeContact }}>
            {children}
        </ContactContext.Provider>
    );
};
