import React from "react";
import { Heading, Box } from "@chakra-ui/react";

const Header = () => (
    // Box component acts as a container for the header
    <Box as="header" mb={6} p={4} bg="blue.500" color="white">
        {/* Heading component for the main title of the app */}
        <Heading as="h1" size="lg">
            Contact List App
        </Heading>
    </Box>
);

export default Header;
