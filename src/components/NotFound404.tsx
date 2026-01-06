import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * NotFound404 Component
 *
 * Displays a 404 error page when a route is not found.
 * Provides a user-friendly message and navigation back to home.
 */
function NotFound404() {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={{ base: "80px", md: "120px" }}
        px={{ base: "20px", md: "40px" }}
        textAlign="center"
        color="#2c2c2c"
      >
        <VStack spacing={6} maxWidth="600px" mx="auto">
          <Heading
            as="h1"
            fontSize={{ base: "4rem", md: "6rem" }}
            fontWeight="300"
            color="#d4a5b8"
            fontFamily="'Playfair Display', serif"
          >
            404
          </Heading>
          <Heading
            as="h2"
            fontSize={{ base: "1.5rem", md: "2rem" }}
            fontWeight="300"
            fontFamily="'Playfair Display', serif"
          >
            Seite nicht gefunden
          </Heading>
          <Text
            fontSize={{ base: "1rem", md: "1.2rem" }}
            lineHeight="1.6"
            color="#666"
            maxWidth="500px"
          >
            Die Seite, die Sie suchen, existiert leider nicht. Möglicherweise wurde
            sie verschoben oder die URL ist falsch eingegeben.
          </Text>
          <Button
            as={Link}
            to="/"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            padding="15px 40px"
            background="#d4a5b8"
            color="white"
            borderRadius="50px"
            fontWeight="500"
            boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)"
            transition="all 0.3s ease"
            lineHeight="1"
            verticalAlign="middle"
            _hover={{
              background: "#c08fa3",
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
              textDecoration: "none",
            }}
            textDecoration="none"
          >
            Zur Startseite
          </Button>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}

export default NotFound404;

