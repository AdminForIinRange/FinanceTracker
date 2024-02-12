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
export default function Navbar() {
  const [loged, setLoged] = useState(false)
  return (
    <Box w={"100%"} p={"10px"}>
      <VStack justify={"center"} align={"center"} mt={"10px"}>
        <Box w={"100%"} h={"50px"}>
          <HStack justify={"center"} h={"100%"} align={"center"}>
            <HStack justify={"center"} ml={"50px"}>
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Text fontWeight={500}>HELD THE KEY</Text>
            </HStack>
            <Divider
              ml={"50px"}
              orientation="vertical"
              h={"50%"}
              borderColor={"black"}
            />

            <HStack justify={"center"} ml={"50px"} mr={"50px"} gap={"50px"} >
              <ButtonGroup textColor={"black"} colorScheme="blue">
               { loged ? <Button w={"100px"}>logout</Button> : <Button w={"100px"}>login</Button>}
                <Button w={"100px"}>:)</Button>
                <Button w={"100px"}>:l</Button>
              </ButtonGroup>
            </HStack>
          </HStack>
        </Box>

        <Divider mt={"10px"} w={"70%"} minW={"700px"} borderColor={"black"} />
      </VStack>
    </Box>
  );
}
