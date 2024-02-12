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
import ExpenseData from "../../data/data";
export default function TransactionHistory() {
  const [showModal, setShowModal] = useState(null);
  const [category, setCategory] = useState("Food & Drinks");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [depiction, setDepiction] = useState("");
  const [icon, seticon] = useState("");
  const [expanse, setExpanse] = useState("");

  const handleModal = () => {
    setShowModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Category:", category);
    console.log("Title:", title);
    console.log("Amount:", amount);
    console.log("Depiction:", depiction);
    console.log("Icon:", icon);
    console.log("expanse:", expanse);
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
        <VStack p={"15px"}>
          {ExpenseData.map((data) => (
            <Transactions
              key={data.key}
              icon={data.icon}
              title={data.title}
              date={data.date}
              amount={data.amount}
              category={data.category}
              
              
            />
          ))}
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
           
                <Button
                  type="submit"
                  w={"40%"}
                  colorScheme="green"
                  mb={"10px"}
                  onClick={() => {
                    setExpanse(true);
                  }}
                >
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
