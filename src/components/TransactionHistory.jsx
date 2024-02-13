import {
  Step,
  StepDescription,
  Input,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  HStack,
  Select,
  Heading,
  InputGroup,
  Card,
  CardHeader,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  CardBody,
  Highlight,
  CardFooter,
  Divider,
  AspectRatio,
  ButtonGroup,
  Center,
  Flex,
  Button,
  Text,
  Stack,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  VStack,
  MenuList,
  MenuItem,
  Wrap,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Grid,
  GridItem,
  Image,
  InputLeftAddon,
  InputRightAddon,
  useSteps,
  AbsoluteCenter,
  Avatar,
  Textarea,
  AvatarBadge,
  AvatarGroup,
  Container,
  Spacer,
  Icon,
} from "@chakra-ui/react";

import Transactions from "./Transactions";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";

import useAddTransaction from "../hook/useAddTransactions";
import useGetTransaction from "../hook/useGetTransaction";

export default function TransactionHistory() {
  const [showModal, setShowModal] = useState(null);
  const [category, setCategory] = useState("FoodDrinks");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [depiction, setDepiction] = useState("");
  const [icon, seticon] = useState("");

  const { addTransaction } = useAddTransaction();
  const { transactions,removeTransaction } = useGetTransaction();

  const handleModal = () => {
    setShowModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      category,
      title,
      amount,
      depiction,
      icon,
    });
    setCategory("");
    setTitle("");
    setAmount(0);
    setDepiction("");

    handleModal();
  };

  return (
    <Box
      w={"60%"}
      maxW={"550px"}
      h={"750px"}
      borderRadius={"15px"}
      bgColor={"#EDF2F7"}
    >
      <VStack p={"10px"}>
        <HStack justify={"center"} w={"100%"}>
          <Text fontWeight={"400"} fontSize={"35px"} mt={"15px"}>
            Transaction History
          </Text>
        </HStack>
        <Divider borderColor={"gray"} w={"80%"} />
      </VStack>

      <Box maxH={"580px"} overflowY={"scroll"}>
  <VStack p={"15px"} spacing={4}>
    {transactions.map((data) => {
      const { 
        id,
        title,
        amount,
        depiction,
        icon,
        
     } = data;

    


     const handleRemove = () => {
      removeTransaction(id);
    };
      return (
        <Box
          key={id} // Add a unique key prop to the repeated elements
          w={"100%"}
          h={"100px"}
          borderRadius={"15px"}
          bg={"white"}
          mb={4}
        >
          <HStack align={"center"} w={"100%"} h={"100%"}>
            <Text fontSize={"40px"} ml={"10px"}>
              {icon}
            </Text>
            <VStack align="start">
              <Text fontSize={"22px"} fontWeight={"500"}>
                {title}
                <Text fontSize={"12px"} fontWeight={"500"}>
              {depiction}  {/* Include depiction if needed */}
              </Text>
              </Text>
             
            </VStack>
            <HStack
              flex={1} // Allow the amount section to take up remaining space
              align={"center"}
              justify={"end"}
              fontWeight={"500"}
              fontSize={"22px"}
            >
              <Text color={"red.300"}>${amount}</Text>
              <Button variant={"ghost"} colorScheme={"red"} onClick={handleRemove}>
                <CloseIcon />
              </Button>
            </HStack>
          </HStack>
        </Box>
      );
    })}
  </VStack>
</Box>


      <VStack justify={"center"} align={"center"} mt={"15px"}>
        <Button
          rightIcon={<AddIcon />}
          colorScheme="teal"
          variant="outline"
          onClick={() => setShowModal(true)}
        >
          Add New
        </Button>
      </VStack>

      <Modal isOpen={showModal} onClose={handleModal}>
        <ModalOverlay />
        <ModalContent>
          <VStack justify={"center"} align={"center"}>
            <ModalHeader fontSize={"22px"}>Transaction</ModalHeader>
          </VStack>
          <ModalCloseButton />
          <form onSubmit={onSubmit}>
            <ModalBody>
              <HStack>
                <FormControl>
                  <HStack>
                    <Select
                      w={"460%"}
                      placeholder="Select Category"
                      mb={"35px"}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="EducationDevelopment">
                        📖 Education & Development{" "}
                      </option>
                      <option value="FoodDrinks">🍕 Food & Drinks </option>
                      <option value="EntertainmentRecreation">
                        💃 Entertainment & Recreation{" "}
                      </option>
                      <option value="HouseholdUtilities">
                        {" "}
                        🏠 Household & Utilities
                      </option>
                      <option value="HealthPersonalCare">
                        {" "}
                        ❤️‍🩹 Health & Personal Care{" "}
                      </option>
                      <option value="Other">💵 Other</option>
                    </Select>

                    <Select
                      placeholder="Icon"
                      mb={"35px"}
                      value={icon}
                      onChange={(e) => seticon(e.target.value)}
                    >
                      <option value="📖">📖</option>
                      <option value="🍕">🍕</option>
                      <option value="💃">💃</option>
                      <option value="🏠"> 🏠</option>
                      <option value="❤️‍🩹"> ❤️‍🩹</option>
                      <option value="💵">💵</option>
                      <option value="🛍️">🛍️</option>
                      <option value="🎟️">🎟️</option>
                      <option value="🚗">🚗</option>
                      <option value="🍽️">🍽️</option>
                      <option value="💳">💳</option>
                      <option value="💻">💻</option>
                      <option value="🎁">🎁</option>
                      <option value="🛒">🛒</option>
                      <option value="🏷️">🏷️</option>
                      <option value="🛠️">🛠️</option>
                    </Select>
                  </HStack>

                  <Input
                    fontSize={"20px"}
                    mb={"35px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="1px solid black" // Adjust the width and color as needed
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />

                  <Input
                    fontSize={"20px"}
                    mb={"35px"}
                    borderRadius={"0%"}
                    border={"0px solid black "}
                    borderBottom="1px solid black" // Adjust the width and color as needed
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <Textarea
                    fontSize={"20px"}
                    mb={"35px"}
                    borderRadius={"15px"}
                    border={"0px solid black "}
                    bgColor={"gray.200"}
                    placeholder="Description"
                    value={depiction}
                    onChange={(e) => setDepiction(e.target.value)}
                  />
                </FormControl>
              </HStack>

              <HStack justify={"center"}>
                <Button type="submit" w={"40%"} colorScheme="green" mb={"10px"}>
                  Submit
                </Button>
              </HStack>
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}
