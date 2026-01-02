import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react';
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
          <HStack
            as="nav"
            spacing="2rem"
            className="footer-nav"
            flexWrap="wrap"
            justify={{ base: 'center', md: 'flex-end' }}
          >
            <Link
              href="#impressum"
              color="white"
              textDecoration="none"
              _hover={{
                color: 'var(--primary-light)',
                textDecoration: 'none',
              }}
              transition="color 0.3s ease"
            >
              Impressum
            </Link>
            <Link
              href="#datenschutz"
              color="white"
              textDecoration="none"
              _hover={{
                color: 'var(--primary-light)',
                textDecoration: 'none',
              }}
              transition="color 0.3s ease"
            >
              Datenschutz
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
