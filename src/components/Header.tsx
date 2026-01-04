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
import { useEffect, useState } from 'react';
import nameLeft from '../assets/Lena_Logo_Name_left.png';
import sign from '../assets/Lena_Logo_Sign.png';
import './Header.css';

function Header() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header navbar when scrolled past 150px
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Über Mich' },
    { href: '#services', label: 'Leistungen' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="white"
      boxShadow={isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'}
      zIndex={1000}
      className="header"
      transform={isScrolled ? 'translateY(0)' : 'translateY(-100%)'}
      transition="transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease"
      opacity={isScrolled ? 1 : 0}
      visibility={isScrolled ? 'visible' : 'hidden'}
      pointerEvents={isScrolled ? 'auto' : 'none'}
    >
      <Box
        as="nav"
        maxW="1200px"
        mx="auto"
        px={{ base: '20px', md: '20px' }}
        py={isScrolled ? '1rem' : 0}
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
              src={sign}
              alt="Logo"
              height="75px"
              width="auto"
              objectFit="contain"
            />
            <Image
              src={nameLeft}
              alt="Logo"
              height="75px"
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
                  fontFamily="'Playfair Display', serif"
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
