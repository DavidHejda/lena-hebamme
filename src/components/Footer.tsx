import { Box, Flex, Text } from '@chakra-ui/react';
import './Footer.css';

function Footer() {
  return (
    <Box
      as="footer"
      bg="var(--text-dark)"
      color="white"
      py="2rem"
      px="20px"
      mt="auto"
      className="footer"
    >
      <Box maxW="1200px" mx="auto">
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap="1rem"
          flexWrap="wrap"
        >
          <Text margin={0}>
            &copy; {new Date().getFullYear()} | Alle Rechte vorbehalten
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
