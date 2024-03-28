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
  Progress,
  AvatarGroup,
  Container,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import TransactionHistory from "../../components/TransactionHistory";
import CategorySlider from "../../components/CategorySlider";
import { useState, useEffect } from "react";
import useGetUserInfo from "../../hook/useGetUserInfo.jsx";
import Auth from "../Auth/Auth.jsx";
import { useNavigate, Navigate } from "react-router-dom";

export default function Home() {
  const { isAuth } = useGetUserInfo();
  console.log(isAuth);
  const navigate = useNavigate(); //the whole time i was retriving data like useGetUserInfo and not useGetUserInfo()

  useEffect(() => {
    if (!isAuth) {
      navigate("/Auth");
    }
  }, [isAuth, navigate]);

  return (
    <div style={{ padding: "2.5%" }}>
      <HStack align={"start"}>
        <TransactionHistory />
        <CategorySlider />
      </HStack>
    </div>
  );
}
