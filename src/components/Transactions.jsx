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
  Icon,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
export default function Transactions({ icon, title, date, amount, expanse }) {
  return (
    <>
      <Box w={"100%"} h={"100px"} borderRadius={"15px"} bg={"white"}>
        <HStack align={"center"} w={"100%"} h={"100%"}>
          <HStack h={"100%"} w={"100%"} align={"center"}>
            <Text fontSize={"40px"} ml={"10px"}>
              {icon}
            </Text>

            <VStack>
              <HStack justify={"start"}>
                <Text fontSize={"22px"} fontWeight={"500"}>
                  {title}
                  <Text fontSize={"12px"} fontWeight={"500"}>
                    {date}
                  </Text>
                </Text>
              </HStack>
            </VStack>
          </HStack>

          <HStack
            mr={"20px"}
            align={"center"}
            justify={"end"}
            fontWeight={"500"}
            fontSize={"22px"}
          >
            <Text color={"red.300"}>${amount}</Text>

            <Button ml={"20px"}>
              <CloseIcon />
            </Button>
          </HStack>
        </HStack>
      </Box>
    </>
  );
}
