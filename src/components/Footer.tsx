import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { useState } from 'react';
import Impressum from './Impressum';
import './Footer.css';

function Footer() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  return (
    <>
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
            <Link
              onClick={(e) => {
                e.preventDefault();
                setIsImpressumOpen(true);
              }}
              href="#"
              color="white"
              textDecoration="underline"
              _hover={{ color: 'var(--primary-color)', textDecoration: 'underline' }}
              cursor="pointer"
            >
              Impressum
            </Link>
          </Flex>
        </Box>
      </Box>
      <Impressum
        isOpen={isImpressumOpen}
        onClose={() => setIsImpressumOpen(false)}
      />
    </>
  );
}

export default Footer;
