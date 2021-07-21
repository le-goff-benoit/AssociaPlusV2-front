import React from "react";
import { Box } from "@chakra-ui/react";
interface WrapperProps {
  variant?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({ children, variant }) => {
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px"}
      marginX={"auto"}
    >
      {children}
    </Box>
  );
};
