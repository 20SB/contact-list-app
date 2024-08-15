import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ContactContext } from "../context/ContactContext";

const AddEditContact = () => {
    // Get the contact ID from the URL parameters
    const { id } = useParams();
    // Access the contact context to get contacts and CRUD functions
    const { contacts, addNewContact, editContact } = useContext(ContactContext);
    // State to manage the contact form data
    const [contact, setContact] = useState({ name: "", email: "", phone: "" });
    // Hook to programmatically navigate users
    const navigate = useNavigate();

    // Effect to load existing contact data if an ID is provided
    useEffect(() => {
        if (id) {
            const existingContact = contacts.find((contact) => contact.id === parseInt(id));
            if (existingContact) {
                setContact(existingContact); // Set form data with existing contact
            }
        }
    }, [id, contacts]); // Dependencies: ID and contacts list

    // Handler to update contact state when form inputs change
    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    // Handler to submit the form
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (id) {
            await editContact(id, contact); // Update existing contact
        } else {
            await addNewContact(contact); // Add new contact
        }

        navigate("/"); // Redirect to contact list page after submission
    };

    return (
        <Box as="form" onSubmit={handleSubmit} p={4}>
            {/* Form control for contact name */}
            <FormControl mb={4}>
                <FormLabel>Name</FormLabel>
                <Input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    required
                />
            </FormControl>
            {/* Form control for contact email */}
            <FormControl mb={4}>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    required
                />
            </FormControl>
            {/* Form control for contact phone */}
            <FormControl mb={4}>
                <FormLabel>Phone</FormLabel>
                <Input
                    type="tel"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                    required
                />
            </FormControl>
            {/* Submit button */}
            <Button type="submit" colorScheme="teal">
                {id ? "Update Contact" : "Add Contact"}
            </Button>
        </Box>
    );
};

export default AddEditContact;
