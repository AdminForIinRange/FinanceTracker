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
import { useState } from "react";
import useGetUserInfo from "../../hook/useGetUserInfo.jsx";
import Auth from "../Auth/Auth.jsx";


export default function Home() {
 const {isAuth} = useGetUserInfo
  return (
    <div style={{padding:"2.5%"}}>
  <HStack align={"start"}>
  {  isAuth ? <>
  <TransactionHistory />
         <CategorySlider />
         </> 
        : <Auth />
        }

      </HStack>
    
    </div>
  )
}
 