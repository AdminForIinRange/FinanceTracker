import { Box, Text, HStack, VStack, Button, Spacer } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Transactions({
  title,
  amount,
  depiction,
  icon,
  handleRemove,
}) {
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
              <Text fontSize={"12px"} fontWeight={"500"}>
                {depiction}
              </Text>
            </Text>
          </HStack>
        </VStack>
        <Spacer />
        <HStack
          mr={"20px"}
          align={"center"}
          justify={"end"}
          fontWeight={"500"}
          fontSize={"22px"}
        >
          <Text color={"red.300"}>${amount}</Text>
          <Button
            ml={"20px"}
            variant={"ghost"}
            colorScheme={"red"}
            onClick={handleRemove}
          >
            <CloseIcon />
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}
