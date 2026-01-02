import {
  Box,
  Button,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import {
  faBaby,
  faHandsHoldingChild,
  faPersonBreastfeeding,
  faPersonPregnant,
  faTape,
  faYinYang,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from './Modal';

/**
 * Service interface defining the structure of a service card
 */
interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  costs?: string[];
}

/**
 * Services data array
 */
const services: Service[] = [
  {
    id: '1',
    icon: (
      <FontAwesomeIcon
        icon={faHandsHoldingChild}
        color="var(--primary-color)"
      />
    ),
    title: 'Hebammenberatung im Rahmen des Eltern-Kind-Passes',
    shortDescription:
      'Im Rahmen des Hebammengesprächs im Eltern-Kind-Pass können Schwangere zwischen der 18. und 22.',
    fullDescription:
      'Im Rahmen des Hebammengesprächs im Eltern-Kind-Pass können Schwangere zwischen der 18. und 22. Schwangerschaftswoche eine kostenlose Hebammenberatung in Anspruch nehmen. Dieses persönliche Gespräch bietet eine wertvolle Gelegenheit, sich mit einer Hebamme über alle Fragen rund um Schwangerschaft, Geburt, Wochenbett und Stillen auszutauschen.',

    costs: [
      'Die kosten von 67 Euro werden vollständig von der Krankenkasse übernommen.',
    ],
  },
  {
    id: '2',
    icon: (
      <FontAwesomeIcon icon={faPersonPregnant} color="var(--primary-color)" />
    ),
    title: 'Schwangerschaftsberatung',
    shortDescription:
      'In einer persönlichen Beratung klären wir deine Fragen, nehmen gemeinsam Unsicherheiten und gehen gerne auf deine individuellen Wunschthemen ein.',
    fullDescription:
      'In einer persönlichen Beratung klären wir deine Fragen, nehmen gemeinsam Unsicherheiten und gehen gerne auf deine individuellen Wunschthemen ein. Je nach Bedarf kann ich folgende Untersuchungen und Kontrollen durchführen: Leopolds Handgriffe zur Lagebestimmung deines Kindes, Herztonkontrolle mit Dopton, Wachstumskontrolle deines Kindes, Blutdruckmessung, Inspektion der Brust und bei Bedarf auch eine vaginale Untersuchung. ',
    costs: [
      'Da ich Wahlhebamme bin kommen dabei für ca. eine Stunde kosten von 85 Euro auf dich zu.',
    ],
  },
  {
    id: '3',
    icon: (
      <FontAwesomeIcon
        icon={faPersonBreastfeeding}
        color="var(--primary-color)"
      />
    ),
    title: 'Stillvorbereitung: ',
    shortDescription:
      'In Geburtsvorbereitungskursen kommt das Thema Stillen oft zu kurz.',
    fullDescription:
      'In Geburtsvorbereitungskursen kommt das Thema Stillen oft zu kurz. Ich nehme mir daher gerne extra Zeit, um mit dir – und auf Wunsch auch mit deinem Partner – die wichtigsten Schritte für einen gelungenen Stillstart zu besprechen. Gemeinsam klären wir Fragen, und schaffen Sicherheit für die ersten Wochen.',

    costs: [
      'Die Kosten richten sich nach Umfang und beginnen bei 100 Euro pro Stunde.',
    ],
  },
  {
    id: '4',
    icon: <FontAwesomeIcon icon={faBaby} color="var(--primary-color)" />,
    title: 'Wochenbettvisite',
    shortDescription:
      'Ich begleite euch in den ersten Tagen nach der Geburt direkt zu Hause und stehe mit Rat und Tat zur Seite.',
    fullDescription:
      'Ich begleite euch in den ersten Tagen nach der Geburt direkt zu Hause und stehe mit Rat und Tat zur Seite. Wir besprechen Themen wie Stillen, Versorgung des Babys und den Alltag mit dem Neugeborenen, beantworte eure Fragen und gebe wertvolle Tipps für den Start ins Familienleben.',
    costs: ['Die kosten richten sich je nach Umfang zwischen 95 bis 120 Euro.'],
  },
  {
    id: '5',
    icon: <FontAwesomeIcon icon={faTape} color="var(--primary-color)" />,
    title: 'Taping in Schwangerschaft und Wochenbett',
    shortDescription:
      'Taping kann werdenden und frischgebackenen Müttern gezielt Unterstützung und Entlastung bieten',
    fullDescription:
      'Taping kann werdenden und frischgebackenen Müttern gezielt Unterstützung und Entlastung bieten. In der Schwangerschaft helfe ich mit speziellen Tape-Anlagen, um Rücken, Becken und Gelenke zu entlasten und beschwerdefrei durch die Wochen zu kommen. Im Wochenbett kann Taping den Rückbildungsprozess, die Körperhaltung und muskuläre Stabilität fördern. Sogar Neugeborene können von Tapes, sei es bei Bauchbeschwerden oder Stillproblemen profitieren. Ich zeige dir, wie die Tapes wirken, setze sie gezielt ein.',
    costs: ['Taping ohne Termin: 30 Euro', 'In der Beratung/Visite: 15 Euro'],
  },
  {
    id: '6',
    icon: <FontAwesomeIcon icon={faYinYang} color="var(--primary-color)" />,
    title: 'Akupunktur',
    shortDescription:
      'Akupunktur kann Schwangerschaftsbeschwerden wie Übelkeit, Rückenschmerzen, Schlafprobleme oder Ödeme lindern.',
    fullDescription:
      'Akupunktur kann Schwangerschaftsbeschwerden wie Übelkeit, Rückenschmerzen, Schlafprobleme oder Ödeme lindern. Die geburtsvorbereitende Akupunktur unterstützt die Reifung des Muttermundes, verkürzt nachweislich die Geburtsdauer und sorgt für einen sanften Start in die Geburt. So begleite ich dich gezielt zu mehr Wohlbefinden und Sicherheit in dieser besonderen Zeit. Ich wende Akupunktur bereits an und begleite dich gerne dabei – die Behandlung ist derzeit noch kostenfrei, da ich mich noch in Ausbildung befinde.',
    costs: [
      'Die Behandlung ist derzeit noch kostenfrei, da ich mich noch in Ausbildung befinde.',
    ],
  },
];

/**
 * Services Component
 *
 * Displays a grid of service cards with hover effects.
 * Each card shows service information and opens a modal with full details on click.
 */
function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  /**
   * Opens the modal with the selected service details
   */
  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  /**
   * Closes the modal
   */
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Box
        id="services"
        as="section"
        bg="#fafafa"
        py={{ base: '60px', md: '80px' }}
        px={{ base: '20px', md: '40px' }}
      >
        <Box maxWidth="1200px" mx="auto">
          <Heading
            as="h2"
            fontSize={{ base: '2rem', md: '2.5rem' }}
            textAlign="center"
            mb={12}
            color="#2c2c2c"
            fontWeight="300"
            letterSpacing="1px"
          >
            Meine Leistungen
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mt={12}>
            {services.map((service) => (
              <Box
                key={service.id}
                bg="white"
                padding="2.5rem"
                borderRadius="15px"
                textAlign="center"
                boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)"
                display="flex"
                flexDirection="column"
                transition="all 0.3s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <VStack align="stretch" spacing={4} flex="1">
                  {/* Service icon */}
                  <Box fontSize="3rem" mb={4}>
                    {service.icon}
                  </Box>

                  {/* Service title */}
                  <Heading
                    as="h3"
                    fontSize="1.5rem"
                    mb={4}
                    color="#2c2c2c"
                    fontWeight="400"
                  >
                    {service.title}
                  </Heading>

                  {/* Service description */}
                  <Text color="#666" lineHeight="1.6" mb={6} flexGrow="1">
                    {service.shortDescription}
                  </Text>

                  {/* Button */}
                  <Button
                    background="#d4a5b8"
                    color="white"
                    border="none"
                    padding="12px 30px"
                    borderRadius="25px"
                    fontSize="1rem"
                    fontWeight="500"
                    cursor="pointer"
                    transition="all 0.3s ease"
                    mt="auto"
                    onClick={() => openModal(service)}
                    _hover={{
                      background: '#c08fa3',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    Mehr erfahren
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* Modal for service details */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={closeModal}
          title={selectedService.title}
          icon={selectedService.icon}
        >
          <Box whiteSpace="pre-line">
            {selectedService.fullDescription
              .split('\n\n')
              .map((paragraph, index) => (
                <Text
                  key={index}
                  mb={4}
                  color="#666"
                  fontWeight="300"
                  lineHeight="1.6"
                  textAlign="justify"
                >
                  {paragraph}
                </Text>
              ))}

            {selectedService.costs && (
              <>
                <Text fontSize="1.2rem" fontWeight="bold" mb={4}>
                  Kosten:
                </Text>
                <Box>
                  <UnorderedList mb={4} ml={4}>
                    {selectedService.costs.map((cost, index) => (
                      <ListItem
                        key={index}
                        mb={2}
                        color="#666"
                        fontWeight="300"
                        lineHeight="1.6"
                        textAlign="left"
                      >
                        {cost}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
}

export default Services;
