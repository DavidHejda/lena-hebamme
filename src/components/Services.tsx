import {
  Box,
  Button,
  Heading,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import {
  faBaby,
  faHandsHoldingChild,
  faHouseMedical,
  faLink,
  faPersonBreastfeeding,
  faPersonPregnant,
  faSpa,
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
  fullDescription?: string;
  costs?: string[];
  links?: {
    title: string;
    url: string;
  }[];
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
      'Im Rahmen des Hebammengesprächs können Schwangere zwischen der 18. und 22. SSW eine kostenlose Hebammenberatung in Anspruch nehmen.',
    fullDescription:
      'Im Rahmen des Hebammengesprächs im Eltern-Kind-Pass können Schwangere zwischen der 18. und 22. Schwangerschaftswoche eine kostenlose Hebammenberatung in Anspruch nehmen. Dieses persönliche Gespräch bietet eine wertvolle Gelegenheit, sich mit einer Hebamme über alle Fragen rund um Schwangerschaft, Geburt, Wochenbett und Stillen auszutauschen.',

    costs: [
      'Die Kosten von 67 Euro werden vollständig von der Krankenkasse übernommen.',
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
      'Da ich Wahlhebamme bin kommen dabei für ca. eine Stunde Kosten von 85 Euro auf dich zu. Die Krankenkasse übernimmt bei Kassenleistungen 80% des Kassentarifs.',
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
      'Individuelle Stillvorbereitung mit Zeit für eure Fragen - Für einen sicheren, entspannten und gelungenen Stillstart.',
    fullDescription:
      'In Geburtsvorbereitungskursen kommt das Thema Stillen oft zu kurz. Ich nehme mir daher gerne extra Zeit, um mit dir – und auf Wunsch auch mit deinem Partner – die wichtigsten Schritte für einen gelungenen Stillstart zu besprechen. Gemeinsam klären wir Fragen, und schaffen Sicherheit für die ersten Wochen.',

    costs: [
      'Die Kosten richten sich nach Umfang und beginnen bei 90 Euro pro Stunde.',
    ],
  },
  {
    id: '4',
    icon: <FontAwesomeIcon icon={faBaby} color="var(--primary-color)" />,
    title: 'Wochenbettvisite',
    shortDescription:
      'Ich begleite euch in den ersten Tagen nach der Geburt direkt zu Hause und stehe mit Rat und Tat zur Seite.',
    fullDescription:
      'Ich begleite euch in den ersten Tagen nach der Geburt direkt zu Hause und stehe mit Rat und Tat zur Seite. Wir besprechen Themen wie Stillen, Versorgung des Babys und den Alltag mit dem Neugeborenen, ich beantworte eure Fragen und gebe wertvolle Tipps für den Start ins Familienleben.',
    costs: [
      'Die Kosten richten sich je nach Umfang zwischen 85 bis 100 Euro. Die Krankenkasse übernimmt bei Kassenleistungen 80% des Kassentarifs.',
    ],
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
      'Akupunktur bietet Unterstützung in der Schwangerschaft, rund um die Geburt und im Wochenbett.',
    fullDescription:
      'Akupunktur kann Schwangerschaftsbeschwerden wie Übelkeit, Rückenschmerzen, Schlafprobleme oder Ödeme lindern. Die geburtsvorbereitende Akupunktur unterstützt die Reifung des Muttermundes, verkürzt nachweislich die Geburtsdauer und sorgt für einen sanften Start in die Geburt. So begleite ich dich gezielt zu mehr Wohlbefinden und Sicherheit in dieser besonderen Zeit.',
    costs: [
      'Die Behandlung ist derzeit noch kostenfrei, da ich mich noch in Ausbildung befinde.',
    ],
  },
  {
    id: '7',
    icon: <FontAwesomeIcon icon={faSpa} color="var(--primary-color)" />,
    title: 'Babymassage nach Leboyer ',
    shortDescription:
      'Die Babymassage nach Leboyer ist eine sanfte, liebevolle Form der Berührung, die die Bindung zwischen Eltern und Kind stärkt. ',
    fullDescription:
      'Die Babymassage nach Leboyer ist eine sanfte, liebevolle Form der Berührung, die die Bindung zwischen Eltern und Kind stärkt. Sie unterstützt das Wohlbefinden des Babys, kann bei Unruhe, Bauchschmerzen oder Schlafproblemen helfen und vermittelt Geborgenheit. Ich zeige dir die Massagegriffe in ruhiger Atmosphäre, sodass du sie sicher und entspannt in euren Alltag integrieren kannst. ',
    costs: [
      'Im Kurs (6 Mal) 120 Euro',
      'Einzeltermin zu Hause mit Hebammenberatung (90-120min) 120 Euro',
    ],
  },
  {
    id: '8',
    icon: (
      <FontAwesomeIcon icon={faHouseMedical} color="var(--primary-color)" />
    ),
    title: 'Hausgeburt',
    shortDescription:
      'Ab dem Frühling 2026 möchte ich Frauen und Familien dabei begleiten, ihr Kind geborgen, selbstbestimmt und in vertrauter Umgebung zu Hause zur Welt zu bringen.',
    fullDescription:
      'Ab dem Frühling 2026 möchte ich Frauen und Familien dabei begleiten, ihr Kind geborgen, selbstbestimmt und in vertrauter Umgebung zu Hause zur Welt zu bringen. Eine Hausgeburt schenkt Raum für Ruhe, Vertrauen und den eigenen Rhythmus. Wenn du dir diese Form der Geburt wünschst, freue ich mich über eine unverbindliche Interessensmeldung, um dich frühzeitig kennenzulernen und gemeinsam zu schauen, ob dieser Weg für euch passt. ',
  },

  {
    id: '9',
    icon: <FontAwesomeIcon icon={faLink} color="var(--primary-color)" />,
    title: 'Links',
    shortDescription:
      'Eine Sammlung hilfreicher und vertrauenswürdiger Links, die euch auf dem Weg ins Elternwerden informieren und unterstützen.',
    links: [
      {
        title: 'Hebammenleistungen, die die Krankenkasse übernimmt',
        url: 'https://hebammen.at/eltern/kosten/',
      },
      {
        title: 'Vertragshebammen der ÖGK',
        url: 'https://www.gesundheitskasse.at/cdscontent/?contentid=10007.870469&portal=oegkportal',
      },
      {
        title: 'Arzneimitttel in der Schwangerschaft',
        url: 'https://www.embryotox.de/arzneimittel',
      },
      {
        title: 'S3 Leitlinie vaginale Geburt am Termin',
        url: 'https://register.awmf.org/de/leitlinien/detail/015-083',
      },
      {
        title: 'Familienberatung',
        url: 'https://www.familienberatung.gv.at/',
      },
      {
        title: 'Frühehilfen',
        url: 'https://fruehehilfen.at/',
      },
      {
        title: 'Gewalt gegen Frauen 0800 222 555',
        url: 'https://www.frauenhelpline.at/',
      },
      {
        title: 'Unterstützung bei Fehl- und Todgeburt',
        url: 'https://www.12wochen.at',
      },
      {
        title: 'Rotes Kreuz (Erste Hilfe am Kind)',
        url: 'https://www.roteskreuz.at/wien/ich-will-helfen/erste-hilfe-bei-kindern',
      },
      {
        title: 'Johanniter (Erste Hilfe am Kind)',
        url: 'https://www.johanniter.at/kurse-ausbildungen/kurse-von-a-bis-z/erste-hilfe-am-kind',
      },
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
        bg="var(--secondary-color)"
        py={{ base: '60px', md: '80px' }}
        px={{ base: '20px', md: '40px' }}
      >
        <Box maxWidth="1200px" mx="auto">
          <Heading
            as="h1"
            fontSize={{ base: '2rem', md: '3.5rem' }}
            fontWeight="300"
            mb={12}
            letterSpacing="2px"
            textAlign="center"
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
                    fontSize={{ base: '1.3rem', md: '1.5rem' }}
                    mb={4}
                    color="#2c2c2c"
                    fontWeight={{ base: '500', md: '400' }}
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
            {selectedService.fullDescription && (
              <>
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
              </>
            )}

            {selectedService.links && (
              <>
                {selectedService.links.map((link, index) => (
                  <Box key={index}>
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="#666"
                      fontWeight="300"
                      textAlign="left"
                    >
                      {link.title}
                    </Link>
                  </Box>
                ))}
              </>
            )}
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
