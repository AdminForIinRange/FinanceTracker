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
import useCalculateChart from "../hook/useCalculateChart";

export default function BarGraph() {
    const {data} = useCalculateChart()
  // Output the total expenses for each category

  
  return (
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
  );
}
