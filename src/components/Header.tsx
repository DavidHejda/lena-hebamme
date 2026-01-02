import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Über Mich' },
    { href: '#services', label: 'Leistungen' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      bg="white"
      boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)"
      zIndex={1000}
      className="header"
    >
      <Box
        as="nav"
        maxW="1200px"
        mx="auto"
        px={{ base: '20px', md: '20px' }}
        py="1rem"
      >
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: 'row', md: 'row' }}
        >
          <Link
            href="#home"
            onClick={onClose}
            display="flex"
            alignItems="center"
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
          >
            <Image
              src={logo}
              alt="Logo"
              height="60px"
              width="auto"
              objectFit="contain"
            />
          </Link>

          <Button
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            variant="ghost"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            zIndex={1001}
            p="5px"
            minW="auto"
            h="auto"
          >
            {isOpen ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={6} />}
          </Button>

          <HStack
            as="ul"
            display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
            position={{ base: 'fixed', md: 'relative' }}
            left={{ base: isOpen ? 0 : '-100%', md: 'auto' }}
            top={{ base: '70px', md: 'auto' }}
            direction={{ base: 'column', md: 'row' }}
            bg={{ base: 'white', md: 'transparent' }}
            width={{ base: '100%', md: 'auto' }}
            textAlign={{ base: 'center', md: 'left' }}
            boxShadow={{ base: '0 10px 27px rgba(0, 0, 0, 0.1)', md: 'none' }}
            padding={{ base: '2rem 0', md: 0 }}
            gap={{ base: 0, md: '2rem' }}
            zIndex={1000}
            transition="left 0.3s ease"
            listStyleType="none"
            margin={0}
            spacing={0}
            className={`nav-menu ${isOpen ? 'active' : ''}`}
          >
            {navLinks.map((link) => (
              <Box as="li" key={link.href} width={{ base: '100%', md: 'auto' }}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  color="var(--text-dark)"
                  textDecoration="none"
                  fontWeight="500"
                  fontSize="1rem"
                  position="relative"
                  display="block"
                  width={{ base: '100%', md: 'auto' }}
                  py={{ base: '1rem', md: 0 }}
                  _hover={{
                    color: 'var(--primary-color)',
                    _after: {
                      width: '100%',
                    },
                  }}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    width: 0,
                    height: '2px',
                    bg: 'var(--primary-color)',
                    transition: 'width 0.3s ease',
                  }}
                >
                  {link.label}
                </Link>
              </Box>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
