import React, { useState } from "react";
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
  Grid,
  GridItem,
  Image,
  InputLeftAddon,
  InputRightAddon,
  useSteps,
  AbsoluteCenter,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Container,
  Spacer,
} from "@chakra-ui/react";
import useGetUserInfo from "../hook/useGetUserInfo";
import { signOut } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { auth } from ".././Config/Firebase";
import useCalculateChart from "../hook/useCalculateChart";

export default function Navbar() {
  const { TotalSum } = useCalculateChart();
  const { isAuth, name, profilePhoto } = useGetUserInfo();
  console.log(isAuth);

  const navigate = useNavigate();
  const siginOutUser = async () => {
    try {
      const results = await signOut(auth);
      console.log(results);
      const authInfo = {
        userID: false,
        name: false,
        profilePhoto: false,
        isAuth: false,
      };
      localStorage.setItem("auth", JSON.stringify(authInfo));

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box w={"100%"} p={"10px"}>
      <VStack justify={"center"} align={"center"} mt={"10px"}>
        <Box w={"100%"} h={"50px"}>
          <HStack justify={"center"} h={"100%"} align={"center"}>
            <HStack justify={"center"} ml={"50px"}>
              <Avatar name={name} src={profilePhoto} />
              <Text fontWeight={500}>{name}</Text>
            </HStack>
            <Divider
              ml={"50px"}
              orientation="vertical"
              h={"50%"}
              borderColor={"black"}
            />

            <HStack justify={"center"} ml={"50px"} mr={"50px"} gap={"50px"}>
              <ButtonGroup textColor={"black"} colorScheme="blue">
                {isAuth ? (
                  <Button w={"100px"} onClick={siginOutUser}>
                    logout
                  </Button>
                ) : (
                  <Button w={"100px"}>login</Button>
                )}
              </ButtonGroup>
              <HStack >
              <span style={{fontSize:"22px"}}>Total: </span>
                <Text fontSize={"22px"} fontWeight={500}>
                 
                  <Text color={"red"}>
                  {TotalSum}
                    </Text>
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Box>

        <Divider mt={"10px"} w={"70%"} minW={"700px"} borderColor={"black"} />
      </VStack>
    </Box>
  );
}
