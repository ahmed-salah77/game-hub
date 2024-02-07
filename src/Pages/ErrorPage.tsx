import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box height={"100vh"}>
      <NavBar />
      <Center flexDirection={"column"} h={"50%"}>
        <Heading fontSize={"max(70px,min(100px,10vw))"}>Oops!</Heading>
        <Text fontSize={"max(30px,min(50px,5vw))"}>
          {isRouteErrorResponse(error)
            ? "This Page does not exist."
            : "An unexpected error occurred"}
        </Text>
      </Center>
    </Box>
  );
};

export default ErrorPage;
