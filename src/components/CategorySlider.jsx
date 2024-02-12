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
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useState } from "react";

function calculateTotalExpenses(data) {
  const totals = {};

  // Iterate through the expense data
  data.forEach((expense) => {
    const category = expense.category;
    const amount = parseInt(expense.amount); // Convert amount to integer

    // If category doesn't exist in totals, initialize it with 0
    if (!totals[category]) {
      totals[category] = 0;
    }

    // Add amount to the total of the category
    totals[category] += amount;
  });

  return totals;
}

// Calculate total expenses
const totalExpenses = calculateTotalExpenses(ExpenseData);

// Output the total expenses for each category
console.log("Total Expenses:");
for (const category in totalExpenses) {
  console.log(`${category}: ${totalExpenses[category]}`);
}


const data = [
  {

    EducationDevelopment: totalExpenses.EducationDevelopment,
    
  },
  {
    FoodDrinks: totalExpenses.FoodDrinks,
   

  },
  {
    EntertainmentRecreation: totalExpenses.EntertainmentRecreation,

  },
  {
    HouseholdUtilities: totalExpenses.HouseholdUtilities,


  },
  {
    HealthPersonalCare: totalExpenses.HealthPersonalCare,

  },
  {
    Other: totalExpenses.Other,

  }
];





// Example: Output expenditure list for each month

export default function CategorySlider() {
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
                    value={
                      totalExpenses.FoodDrinks
                        ? totalExpenses.FoodDrinks / 50
                        : 0
                    }
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {totalExpenses.FoodDrinks
                      ?<span>${totalExpenses.FoodDrinks} </span> 
                      : "Not Spent Anything"}
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
                    value={
                      totalExpenses.EducationDevelopment
                        ? totalExpenses.EducationDevelopment / 50
                        : 0
                    }
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {totalExpenses.EducationDevelopment
                      ? <span>${totalExpenses.EducationDevelopment} </span> 
                      : "Not Spent Anything"}
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
                      totalExpenses.EntertainmentRecreation
                        ? totalExpenses.EntertainmentRecreation / 50
                        : 0
                    }
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {totalExpenses.EntertainmentRecreation
                      ? <span>${totalExpenses.EntertainmentRecreation} </span> 
                      : "Not Spent Anything"}
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
                    value={
                      totalExpenses.HouseholdUtilities
                        ? totalExpenses.HouseholdUtilities / 50
                        : 0
                    }
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {totalExpenses.HouseholdUtilities
                      ? <span>${totalExpenses.HouseholdUtilities} </span> 
                      : "Not Spent Anything"}
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
                    value={
                      totalExpenses.HealthPersonalCare
                        ? totalExpenses.HealthPersonalCare / 50
                        : 0
                    }
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {totalExpenses.HealthPersonalCare
                      ? <span>${totalExpenses.HealthPersonalCare} </span> 
                      : "Not Spent Anything"}
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
                    value={
                      totalExpenses.Other
                        ? totalExpenses.Other / 50
                        : 0
                    }
                    size="md"
                    colorScheme="green"
                  />

                  <Text fontSize={"18px"} fontWeight={500} color={"green"}>
                    {totalExpenses.Other
                      ?  <span>${totalExpenses.Other} </span> 
                      : "Not Spent Anything"}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </HStack>
        </HStack>
        <Box mt={"15px"} w={"1200px"} h={"400px"}>
          <ResponsiveContainer width="100%" height="100%">
          <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

              <Bar
                type="monotone"
                dataKey="EducationDevelopment"
                stackId="1"
                stroke="#F6E05E"
                fill="#F6E05E"
              />
              <Bar
                type="monotone"
                dataKey="FoodDrinks"
                stackId="1"
                stroke="#F6AD55"
                fill="#F6AD55"
              />
              <Bar
                type="monotone"
                dataKey="EntertainmentRecreation"
                stackId="1"
                stroke="#68D391"
                fill="#68D391"
              />
              <Bar
                type="monotone"
                dataKey="HouseholdUtilities"
                stackId="1"
                stroke="#4FD1C5"
                fill="#4FD1C5"
              />
              <Bar
                type="monotone"
                dataKey="HealthPersonalCare"
                stackId="1"
                stroke="#63B3ED"
                fill="#63B3ED"
              />
              <Bar
                type="monotone"
                dataKey="Other"
                stackId="1"
                stroke="#76E4F7"
                fill="#76E4F7"
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </>
  );
}
