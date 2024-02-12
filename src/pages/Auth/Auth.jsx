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
  Container,
} from "@chakra-ui/react";
import { auth, provider } from "../../Config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import useGetUserInfo from "../../hook/useGetUserInfo.jsx";
import { useEffect } from "react";


export default function Auth() {


    const navigate = useNavigate()
    const {isAuth} = useGetUserInfo()

    useEffect(() => {
        if (isAuth) {
         
          navigate('/');
        }
      }, [isAuth, navigate]);

   

      
   
  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    console.log(results);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };

    localStorage.setItem("auth", JSON.stringify(authInfo));
  
    navigate("/")
  };



  if (isAuth) {
 
    return <Navigate to="/" />;
  }



  return (
    <VStack>
      <Heading>Sign In With Google</Heading>

      <Button onClick={signInWithGoogle} colorScheme="teal" variant="solid">
        Sign-In With Google
      </Button>
    </VStack>
  );
}
