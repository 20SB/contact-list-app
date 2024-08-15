import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { ContactContext } from "../context/ContactContext";
import ContactCard from "../components/ContactCard";

const ContactList = () => {
    // Access contacts and removeContact function from the ContactContext
    const { contacts, removeContact } = useContext(ContactContext);

    // Hook to programmatically navigate between routes
    const navigate = useNavigate();

    // Function to navigate to the edit page for a contact
    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    // Function to navigate to the add contact page
    const handleAdd = () => {
        navigate("/add");
    };

    // Log contacts to the console for debugging purposes
    console.log("contacts", contacts);

    return (
        <Box p={4} pt={0}>
            {/* Button to navigate to the add new contact page */}
            <Button colorScheme="teal" mb={4} onClick={handleAdd}>
                Add New Contact
            </Button>
            {/* Map through the contacts array and render a ContactCard for each contact */}
            {contacts.map((contact) => (
                <ContactCard
                    key={contact.id} // Unique key for each contact card
                    contact={contact} // Pass contact data to ContactCard
                    onDelete={removeContact} // Pass removeContact function to ContactCard
                    onEdit={handleEdit} // Pass handleEdit function to ContactCard
                />
            ))}
        </Box>
    );
};

export default ContactList;
