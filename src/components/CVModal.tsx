import {
  Box,
  Grid,
  GridItem,
  Heading,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import Modal from './Modal';

const cvItemStyles = {
  bg: 'rgba(245, 230, 232, 0.15)',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  borderLeft: '3px solid transparent',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  _hover: {
    bg: 'rgba(245, 230, 232, 0.3)',
    borderLeftColor: 'var(--secondary-logo-color)',
    transform: 'translateX(3px)',
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)',
  },
};

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const fontSize = {
  base: '0.8rem',
  small: '0.75rem',
};

const furtherEducation = [
  {
    title: 'Notfall- und Reanimationstrainings',
    date: 'Regelmäßig',
  },
  {
    title: 'Akupunktur für Hebammen',
    date: '10.2024 bis heute',
  },
  {
    title: 'Körperarbeit in der Geburtsvorbereitung',
    date: '11.2025 - 01.2026',
  },
  {
    title: 'Babymassage nach Leboyer',
    date: '12.2025',
  },
  {
    title: 'K-Taping Gyn Plus',
    date: '06.2024',
  },
  {
    title: 'Versorgung von Geburtsverletzungen',
    date: '05.2024',
  },
  {
    title: 'Praxisanleiterin für Studierende',
    date: '01.-06.2024',
  },
  {
    title: 'Umgang und Kommunikation mit Trauerfällen (Stille Geburt)',
    date: '11.2023',
  },
];

function CVModal({ isOpen, onClose }: CVModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="1100px"
      className="cv-modal"
      displayModalHeader={false}
    >
      <Box
        position="relative"
        minH="500px"
        maxH={{ base: 'calc(100vh - 40px)', lg: 'calc(100vh - 60px)' }}
        overflowY="auto"
        overflowX="visible"
        p={{ base: '1.5rem', md: '2rem' }}
        mx="10px"
        bgGradient="linear(to-b, rgba(255,255,255,0.98), rgba(255,255,255,1))"
      >
        {/* Three-column layout */}
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
          gap={4}
          position="relative"
          zIndex={1}
        >
          {/* Left Column - Bildung */}
          <GridItem>
            <Heading
              as="h3"
              fontSize="1.3rem"
              fontWeight="600"
              mb={4}
              color="#2c2c2c"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Box
                width="3px"
                height="24px"
                bg="var(--secondary-logo-color)"
                borderRadius="2px"
              />
              Bildung
            </Heading>

            <VStack align="stretch" spacing={3}>
              {/* Ausbildung zur Hebamme */}
              <Box {...cvItemStyles} p={{ base: '0.75rem', lg: '0.5rem', xl: '0.6rem' }}>
                <Text
                  fontSize="0.85rem"
                  fontWeight="600"
                  color="#2c2c2c"
                  mb={1}
                >
                  Ausbildung zur Hebamme
                </Text>
                <Text fontSize={fontSize.small} color="#666" mb={1}>
                  Akademie für Gesundheitsberufe Augsburg
                </Text>
                <Text fontSize={fontSize.small} color="#999" mb={1.5}>
                  September 2018 - August 2021
                </Text>
                <Box pl={2}>
                  <Text
                    fontSize={fontSize.small}
                    fontWeight="500"
                    color="#666"
                    mb={0.5}
                  >
                    Ausbildungsorte:
                  </Text>
                  <List spacing={0.3}>
                    <ListItem fontSize={fontSize.small} color="#666">
                      • Universitätsklinikum Augsburg
                    </ListItem>
                    <ListItem fontSize={fontSize.small} color="#666">
                      • Wertachkliniken Bobingen
                    </ListItem>
                    <ListItem fontSize={fontSize.small} color="#666">
                      • Klinikum Günzburg
                    </ListItem>
                    <ListItem fontSize={fontSize.small} color="#666">
                      • Klinikum Landsberg am Lech
                    </ListItem>
                  </List>
                </Box>
              </Box>

              {/* Bachelor Pharmazie */}
              <Box {...cvItemStyles} p={{ base: '0.75rem', lg: '0.5rem', xl: '0.6rem' }}>
                <Text
                  fontSize="0.85rem"
                  fontWeight="600"
                  color="#2c2c2c"
                  mb={1}
                >
                  Bachelor Pharmazie
                </Text>
                <Text fontSize={fontSize.small} color="#666" mb={1}>
                  Oktober 2015 – Mai 2018
                </Text>
                <Text
                  fontSize={fontSize.small}
                  color="#999"
                  mb={0.5}
                  fontStyle="italic"
                >
                  nicht abgeschlossen
                </Text>
                <Text fontSize={fontSize.small} color="#666">
                  Universität Innsbruck (AT)
                </Text>
              </Box>

              {/* Reifeprüfung */}
              <Box {...cvItemStyles} p={{ base: '0.75rem', lg: '0.5rem', xl: '0.6rem' }}>
                <Text
                  fontSize="0.85rem"
                  fontWeight="600"
                  color="#2c2c2c"
                  mb={1}
                >
                  Reifeprüfung
                </Text>
                <Text fontSize={fontSize.small} color="#666" mb={1}>
                  Juni 2015
                </Text>
                <Text fontSize={fontSize.small} color="#999">
                  Bundesgymnasium Nonntal, Salzburg (AT)
                </Text>
              </Box>
            </VStack>
          </GridItem>

          {/* Middle Column - Berufserfahrung */}
          <GridItem>
            <Heading
              as="h3"
              fontSize="1.3rem"
              fontWeight="600"
              mb={4}
              color="#2c2c2c"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Box
                width="3px"
                height="24px"
                bg="var(--secondary-logo-color)"
                borderRadius="2px"
              />
              Berufserfahrung
            </Heading>

            <VStack align="stretch" spacing={3}>
              {/* Hebamme im Kreißsaal */}
              <Box {...cvItemStyles} p={{ base: '0.75rem', lg: '0.5rem', xl: '0.6rem' }}>
                <Text
                  fontSize={fontSize.base}
                  fontWeight="600"
                  color="#2c2c2c"
                  mb={1}
                >
                  Hebamme im ärztlich geleiteten Kreißsaal und Hebammenkreißsaal
                </Text>
                <Text fontSize={fontSize.base} color="#666" mb={1}>
                  RKH Krankenhaus Bietigheim-Bissingen
                </Text>
                <Text fontSize={fontSize.base} color="#999" mb={1.5}>
                  Oktober 2021 – Mai 2025
                </Text>
                <Box pl={2}>
                  <List spacing={0.3}>
                    <ListItem fontSize={fontSize.small} color="#666">
                      • Dokumentationsbeauftragte
                    </ListItem>
                    <ListItem fontSize={fontSize.small} color="#666">
                      • Praxisanleiterin
                    </ListItem>
                  </List>
                </Box>
              </Box>

              {/* Freiberufliche Hebamme */}
              <Box {...cvItemStyles} p={{ base: '0.75rem', lg: '0.5rem', xl: '0.6rem' }}>
                <Text
                  fontSize={fontSize.base}
                  fontWeight="600"
                  color="#2c2c2c"
                  mb={1}
                >
                  Freiberufliche Hebamme
                </Text>
                <Text fontSize={fontSize.base} color="#666" mb={1}>
                  Schwangerschaftsberatung & Wochenbett
                </Text>
                <Text fontSize={fontSize.base} color="#999">
                  Februar 2024 – Mai 2025
                </Text>
              </Box>
            </VStack>
          </GridItem>

          {/* Right Column - Fort- und Weiterbildungen */}
          <GridItem>
            <Heading
              as="h3"
              fontSize="1.3rem"
              fontWeight="600"
              mb={4}
              color="#2c2c2c"
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Box
                width="3px"
                height="24px"
                bg="var(--secondary-logo-color)"
                borderRadius="2px"
              />
              Fort- und Weiterbildungen
            </Heading>

            <VStack align="stretch" spacing={1.5}>
              {furtherEducation.map((item, index) => (
                <Box key={index} {...cvItemStyles} py="0.35rem" px={{ base: '0.5rem', lg: '0.45rem' }} minH="auto">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    gap={2}
                  >
                    <Text
                      fontSize={fontSize.base}
                      fontWeight="600"
                      color="#2c2c2c"
                      flex="1"
                    >
                      {item.title}
                    </Text>
                    <Text
                      fontSize={fontSize.small}
                      color="#999"
                      whiteSpace="nowrap"
                      flexShrink={0}
                    >
                      {item.date}
                    </Text>
                  </Box>
                </Box>
              ))}
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </Modal>
  );
}

export default CVModal;
