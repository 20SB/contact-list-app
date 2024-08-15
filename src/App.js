import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import ContactList from "./pages/ContactList";
import AddEditContact from "./pages/AddEditContact";

function App() {
    return (
        // Router component manages routing for the application
        <Router>
            {/* Box component from Chakra UI for layout and styling */}
            <Box className="App">
                {/* Header component to display the top navigation bar */}
                <Header />

                {/* Define routes and their corresponding components */}
                <Routes>
                    {/* Route for the contact list page */}
                    <Route path="/" element={<ContactList />} />

                    {/* Route for adding a new contact */}
                    <Route path="/add" element={<AddEditContact />} />

                    {/* Route for editing an existing contact, with dynamic ID parameter */}
                    <Route path="/edit/:id" element={<AddEditContact />} />
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
