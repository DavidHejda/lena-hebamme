import { Box, Button, Image, Text, VStack } from '@chakra-ui/react';
import lenaLogo from '../assets/Lena_Logo.png';
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
  'Gerne begleite ich dich und deine Familie auf eurem selbstbestimmten Weg durch Schwangerschaft, Geburt und den Start ins Familienleben im Raum Salzburg und Umgebung. Mit Aufmerksamkeit, Herz und Erfahrung bin ich für euch da – so, wie ihr es gerade braucht.',
];

function Hero() {
  return (
    <Box
      id="home"
      as="section"
      py={{ base: '80px', md: '120px' }}
      px={{ base: '20px', md: '40px' }}
      textAlign="center"
      color="#2c2c2c"
      position="relative"
      overflow="hidden"
      scrollMarginTop="0px"
    >
      <Box maxWidth="1200px" mx="auto" position="relative" zIndex="1" mb={0}>
        <Image
          src={lenaLogo}
          alt="Lena Hebamme Logo"
          height="200px"
          width="auto"
          objectFit="contain"
          objectPosition="center"
          justifySelf="center"
        />
        {/* </Heading> */}

        {/* Single column layout - currently active */}
        <VStack align="stretch" spacing={6} maxWidth="800px" mx="auto" mb={8}>
          {textSections.map((text, index) => (
            <Text
              key={index}
              fontWeight="300"
              fontSize={{ base: '1.2rem' }}
              lineHeight="1.5"
              textAlign="justify"
            >
              {text}
            </Text>
          ))}
        </VStack>

        <Button
          as="a"
          href="#contact"
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
