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
import React, { PureComponent } from "react";
import ExpenseData from "../../data/data";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import useAddTransaction from "../hook/useAddTransactions";
import useGetTransaction from "../hook/useGetTransaction";
import BarGraph from "./BarGraph";
import useCalculateChart from "../hook/useCalculateChart";

// Example: Output expenditure list for each month

export default function CategorySlider() {
  const { transactions } = useGetTransaction();
  const {
    data,
    EducationDevelopment,
    FoodDrinks,
    EntertainmentRecreation,
    HouseholdUtilities,
    HealthPersonalCare,
    Other,
  } = useCalculateChart();

  return (
    <>
      <Box w={"1600px"} h={"900px"} p={"1%"}>
        <HStack wrap={"wrap"}>
          <HStack w={"500px"} mr={"100px"}>
            <Box w={"60%"} maxW={"550px"} h={"100px"} borderRadius={"15px"}>
              <HStack h={"100%"} justify={"start"} align={"center"}>
                <Text fontSize={"40px"} ml={"10px"}>
                  🍕
                </Text>

                <VStack w={"100%"} align={"start"}>
                  <Text fontSize={"22px"} fontWeight={"500"}>
                    Food & Drinks
                  </Text>

                  <Progress
                    borderRadius={"15px"}
                    w={"180%"}
                    value={FoodDrinks ? FoodDrinks / 50 : 0}
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {FoodDrinks ? (
                      <span>${FoodDrinks} </span>
                    ) : (
                      "Not Spent Anything"
                    )}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </HStack>
          <HStack w={"500px"} mr={"100px"}>
            <Box w={"60%"} maxW={"550px"} h={"100px"} borderRadius={"15px"}>
              <HStack h={"100%"} justify={"start"} align={"center"}>
                <Text fontSize={"40px"} ml={"10px"}>
                  📖
                </Text>

                <VStack w={"100%"} align={"start"}>
                  <Text fontSize={"22px"} fontWeight={"500"}>
                    Education
                  </Text>

                  <Progress
                    borderRadius={"15px"}
                    w={"180%"}
                    value={EducationDevelopment ? EducationDevelopment / 50 : 0}
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {EducationDevelopment ? (
                      <span>${EducationDevelopment} </span>
                    ) : (
                      "Not Spent Anything"
                    )}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </HStack>
          <HStack w={"500px"} mr={"100px"}>
            <Box w={"60%"} maxW={"550px"} h={"100px"} borderRadius={"15px"}>
              <HStack h={"100%"} justify={"start"} align={"center"}>
                <Text fontSize={"40px"} ml={"10px"}>
                  💃
                </Text>

                <VStack w={"100%"} align={"start"}>
                  <Text fontSize={"22px"} fontWeight={"500"}>
                    Entertainment
                  </Text>

                  <Progress
                    borderRadius={"15px"}
                    w={"180%"}
                    value={
                      EntertainmentRecreation ? EntertainmentRecreation / 50 : 0
                    }
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {EntertainmentRecreation ? (
                      <span>${EntertainmentRecreation} </span>
                    ) : (
                      "Not Spent Anything"
                    )}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </HStack>
          <HStack w={"500px"} mr={"100px"}>
            <Box w={"60%"} maxW={"550px"} h={"100px"} borderRadius={"15px"}>
              <HStack h={"100%"} justify={"start"} align={"center"}>
                <Text fontSize={"40px"} ml={"10px"}>
                  🏠
                </Text>

                <VStack w={"100%"} align={"start"}>
                  <Text fontSize={"22px"} fontWeight={"500"}>
                    Household
                  </Text>

                  <Progress
                    borderRadius={"15px"}
                    w={"180%"}
                    value={HouseholdUtilities ? HouseholdUtilities / 50 : 0}
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {HouseholdUtilities ? (
                      <span>${HouseholdUtilities} </span>
                    ) : (
                      "Not Spent Anything"
                    )}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </HStack>
          <HStack w={"500px"} mr={"100px"}>
            <Box w={"60%"} maxW={"550px"} h={"100px"} borderRadius={"15px"}>
              <HStack h={"100%"} justify={"start"} align={"center"}>
                <Text fontSize={"40px"} ml={"10px"}>
                  ❤️‍🩹
                </Text>

                <VStack w={"100%"} align={"start"}>
                  <Text fontSize={"22px"} fontWeight={"500"}>
                    Health
                  </Text>

                  <Progress
                    borderRadius={"15px"}
                    w={"180%"}
                    value={HealthPersonalCare ? HealthPersonalCare / 50 : 0}
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {HealthPersonalCare ? (
                      <span>${HealthPersonalCare} </span>
                    ) : (
                      "Not Spent Anything"
                    )}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </HStack>
          <HStack w={"500px"} mr={"100px"}>
            <Box w={"60%"} maxW={"550px"} h={"100px"} borderRadius={"15px"}>
              <HStack h={"100%"} justify={"start"} align={"center"}>
                <Text fontSize={"40px"} ml={"10px"}>
                  💵
                </Text>

                <VStack w={"100%"} align={"start"}>
                  <Text fontSize={"22px"} fontWeight={"500"}>
                    Other
                  </Text>

                  <Progress
                    borderRadius={"15px"}
                    w={"180%"}
                    value={Other ? Other / 50 : 0}
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {Other ? <span>${Other} </span> : "Not Spent Anything"}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </HStack>
        </HStack>
        <BarGraph />
      </Box>
    </>
  );
}
