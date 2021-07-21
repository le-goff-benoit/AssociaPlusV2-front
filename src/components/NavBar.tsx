import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { redirect } from "next/dist/next-server/server/api-utils";
import Link from "next/link";
import React from "react";
import { useCurrentUserQuery, useLogOutMutation } from "../generated/graphql";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data }] = useCurrentUserQuery();
  const logOut = () => {
    useLogOutMutation();
  };
  var logInOutButton;
  if (data?.currentUser?.email) {
    logInOutButton = (
      <Button onClick={logOut} colorScheme="blue">
        Goodbye {data.currentUser.email} 👋🏻
      </Button>
    );
  } else {
    logInOutButton = (
      <Link href="/login">
        <Button colorScheme="blue">Log in</Button>
      </Link>
    );
  }
  return (
    <Flex padding={"10px"} backgroundColor="blue.100">
      <Box>
        <Link href="/">
          <Heading color="white" size="lg">
            AssociaPlus<sup color={"red"}>2</sup>
          </Heading>
        </Link>
      </Box>
      <Spacer />
      <Box>{logInOutButton}</Box>
    </Flex>
  );
};
