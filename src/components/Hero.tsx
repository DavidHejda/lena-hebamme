// SimpleGrid is imported for the commented three-column layout option below
import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react';
import logo from '../assets/logo-soft.png';

/**
 * Hero Component
 *
 * Main hero section with welcome message and introduction.
 * Displays all paragraphs in a single column layout.
 *
 * To switch to three-column layout, comment out the VStack below
 * and uncomment the SimpleGrid section.
 */

const textSections = [
  'Willkommen in einer Zeit des Wandels, der Kraft und des Wachsens. Schwangerschaft, Geburt und das Ankommen als Mutter und als Familie sind zutiefst persönliche Erfahrungen – geprägt von Gefühlen, Fragen, Stärke und manchmal auch Unsicherheit. In all dem darfst du dich gehalten, gesehen und ernst genommen fühlen.',
  'Meine Vision ist es, Frauen und Familien in dieser besonderen Lebensphase mit Ruhe, Klarheit und Herz zu begleiten. Gemeinsam schaffen wir einen Raum, in dem du dich sicher fühlst, in dem deine Intuition Platz hat und deine Entscheidungen respektiert werden. Auf Augenhöhe, ohne Druck, ohne Bewertung – dafür mit Vertrauen, Zeit und fachlicher Kompetenz.',
  'Geburt darf kraftvoll sein. Sie darf leise sein. Sie darf genauso sein, wie sie für dich richtig ist. Mein Wunsch ist, dass du deinen Weg selbstbestimmt gehen kannst – begleitet von jemandem, auf den du dich verlassen kannst. Schön, dass du hier bist.',
];

function Hero() {
  return (
    <Box
      id="home"
      as="section"
      // background="linear-gradient(135deg, #e8c5d4 0%, #f5e6e8 100%)"
      py={{ base: '80px', md: '120px' }}
      px={{ base: '20px', md: '40px' }}
      textAlign="center"
      color="#2c2c2c"
      position="relative"
      overflow="hidden"
    >
      {/* Background logo */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="100%"
        height="100%"
        opacity={0.5}
        zIndex="0"
        pointerEvents="none"
      >
        <Image
          src={logo}
          alt=""
          width="100%"
          height="100%"
          objectFit="contain"
          objectPosition="center"
        />
      </Box>
      <Box maxWidth="1200px" mx="auto" position="relative" zIndex="1">
        <Heading
          as="h1"
          fontSize={{ base: '2rem', md: '3.5rem' }}
          fontWeight="300"
          mb={8}
          letterSpacing="2px"
        >
          Willkommen
        </Heading>

        {/* Single column layout - currently active */}
        <VStack
          align="stretch"
          spacing={6}
          maxWidth="800px"
          mx="auto"
          mb={8}
          textAlign="left"
        >
          {textSections.map((text, index) => (
            <Text
              key={index}
              fontWeight="300"
              fontSize={{ base: '1.2rem' }}
              lineHeight="1.5"
              // lineHeight="1.8"
              // fontSize={{ md: '1.3rem' }}
              textAlign="justify"
            >
              {text}
            </Text>
          ))}
        </VStack>

        <Button
          as="a"
          href="#contact"
          display="inline-block"
          padding="15px 40px"
          background="#d4a5b8"
          color="white"
          borderRadius="50px"
          fontWeight="500"
          boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)"
          transition="all 0.3s ease"
          _hover={{
            background: '#c08fa3',
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          Kontakt aufnehmen
        </Button>
      </Box>
    </Box>
  );
}

export default Hero;
