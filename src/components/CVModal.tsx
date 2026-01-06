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
import './CVModal.css';
import Modal from './Modal';

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
      <Box className="cv-modal-content">
        {/* Three-column layout */}
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }}
          gap={4}
          className="cv-content"
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
              <Box className="cv-item">
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
              <Box className="cv-item">
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
              <Box className="cv-item">
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
              <Box className="cv-item">
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
              <Box className="cv-item">
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
                <Box key={index} className="cv-item cv-item-compact">
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
