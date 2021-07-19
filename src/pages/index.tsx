import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";

const Index = () => (

  <>
  <Container>
  <div>Home</div>
    <Link href="/register">
      <Button colorScheme="blue">Register</Button>
    </Link>
  </Container>
  </>
);

export default Index;
