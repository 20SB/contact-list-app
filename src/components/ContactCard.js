import React from "react";
import { Box, Text, Button, Stack, Flex } from "@chakra-ui/react";

const ContactCard = ({ contact, onDelete, onEdit }) => (
    <Flex
        p={4}
        mb={2}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        bg="gray.50"
        w={"100%"}
        justify={"space-between"}
    >
        <Box>
            <Text fontSize="lg" fontWeight="bold">
                {contact.name}
            </Text>
            <Text>{contact.email} </Text>
            <Text>{contact.phone} </Text>
        </Box>
        <Stack direction="column" spacing={2}>
            {/* Button to trigger the edit action */}
            <Button colorScheme="blue" size={"sm"} onClick={() => onEdit(contact.id)}>
                Edit
            </Button>
            {/* Button to trigger the delete action */}
            <Button colorScheme="red" size={"sm"} onClick={() => onDelete(contact.id)}>
                Delete
            </Button>
        </Stack>
    </Flex>
);

export default ContactCard;
