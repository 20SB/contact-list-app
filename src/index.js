import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import { ContactProvider } from "./context/ContactContext";

// Create the root element for the React app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app within the root element
root.render(
    <React.StrictMode>
        {/* ChakraProvider is used to wrap the entire app for Chakra UI styling */}
        <ChakraProvider>
            {/* ContactProvider is used to manage the global state for contacts */}
            <ContactProvider>
                {/* The main App component */}
                <App />
            </ContactProvider>
        </ChakraProvider>
    </React.StrictMode>
);
