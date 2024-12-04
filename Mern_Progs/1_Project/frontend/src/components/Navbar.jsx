import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon, PlusSquareIcon } from "@chakra-ui/icons"; // Added SunIcon import


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400 ,blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} /> {/* Correctly rendering PlusSquareIcon */}
            </Button>
          </Link>
          <Button onClick={toggleColorMode}> {/* Corrected 'onClick' */}
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />} {/* Render icons as components */}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
