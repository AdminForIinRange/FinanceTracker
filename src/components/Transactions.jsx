import { Box, Text, HStack, VStack, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Transactions({ icon, title, createdAt, amount }) {
  // Function to format createdAt to a readable date string


  return (
    <Box w={"100%"} h={"100px"} borderRadius={"15px"} bg={"white"} mb={4}>
      <HStack align={"center"} w={"100%"} h={"100%"}>
        <Text fontSize={"40px"} ml={"10px"}>
          {icon}
        </Text>
        <VStack>
          <HStack justify={"start"}>
            <Text fontSize={"22px"} fontWeight={"500"}>
              {title}
            </Text>
            <Text fontSize={"12px"} fontWeight={"500"}>
             
            </Text>
          </HStack>
        </VStack>
        <HStack
          mr={"20px"}
          align={"center"}
          justify={"end"}
          fontWeight={"500"}
          fontSize={"22px"}
        >
          <Text color={"red.300"}>${amount}</Text>
          <Button ml={"20px"} variant={"ghost"} colorScheme={"red"}>
            <CloseIcon />
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}
