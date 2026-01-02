import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { carouselImages } from '../data/carouselImages';
import Modal from './Modal';
import './ServicesCard.css';

/**
 * Service interface defining the structure of a service card
 */
interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  backgroundImage?: string;
}

/**
 * Services data array
 * Each service can optionally have a backgroundImage, otherwise uses carousel images
 */
const services: Service[] = [
  {
    id: '1',
    icon: '🤱',
    title: 'Hebammenberatung im Rahmen des Eltern-Kind-Passes',
    shortDescription:
      'Im Rahmen des Hebammengesprächs im Eltern-Kind-Pass können Schwangere zwischen der 18. und 22.',
    fullDescription:
      'Im Rahmen des Hebammengesprächs im Eltern-Kind-Pass können Schwangere zwischen der 18. und 22. Schwangerschaftswoche eine kostenlose Hebammenberatung in Anspruch nehmen. Dieses persönliche Gespräch bietet eine wertvolle Gelegenheit, sich mit einer Hebamme über alle Fragen rund um Schwangerschaft, Geburt, Wochenbett und Stillen auszutauschen. Die kosten von 67 Euro werden vollständig von der Krankenkasse übernommen.',
    backgroundImage: carouselImages[0]?.url,
  },
  {
    id: '2',
    icon: '👶',
    title: 'Geburtsbegleitung',
    shortDescription:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    fullDescription:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.\n\nTotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    backgroundImage: carouselImages[1]?.url,
  },
  {
    id: '3',
    icon: '💕',
    title: 'Wochenbettbetreuung',
    shortDescription:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    fullDescription:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    backgroundImage: carouselImages[2]?.url,
  },
  {
    id: '4',
    icon: '🍼',
    title: 'Stillberatung',
    shortDescription:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    fullDescription:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.\n\nTotam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\n\nSed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    backgroundImage: carouselImages[3]?.url,
  },
  {
    id: '5',
    icon: '🏥',
    title: 'Hausbesuche',
    shortDescription:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    fullDescription:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    backgroundImage: carouselImages[4]?.url,
  },
  {
    id: '6',
    icon: '💬',
    title: 'Beratung & Gespräche',
    shortDescription:
      'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    fullDescription:
      'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.\n\nSed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.\n\nSed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    backgroundImage: carouselImages[5]?.url,
  },
];

/**
 * Services Component
 *
 * Displays a grid of service cards with hover effects.
 * Each card has a background image, scales on hover, and reveals content with animations.
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
                className="service-card"
                maxWidth="35ch"
                color="white"
                backgroundImage={`url(${
                  service.backgroundImage || carouselImages[0]?.url
                })`}
                backgroundSize="cover"
                backgroundPosition="center"
                paddingTop="10rem"
                borderRadius="1rem"
                overflow="hidden"
                position="relative"
                cursor="pointer"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openModal(service);
                  }
                }}
              >
                {/* Card content with gradient overlay */}
                <Box
                  className="service-card-content"
                  padding="1.5rem"
                  background="linear-gradient(to bottom, hsl(0 0% 0% / 0), hsl(0 0% 0% / 0.4) 10%, hsl(0 0% 0% / 1))"
                >
                  <VStack align="stretch" spacing={4}>
                    {/* Service icon */}
                    <Box fontSize="3rem" textAlign="center">
                      {service.icon}
                    </Box>

                    {/* Title with animated underline */}
                    <Heading
                      as="h3"
                      className="service-card-title"
                      fontSize="1.5rem"
                      fontWeight="400"
                      position="relative"
                      width="max-content"
                      mx="auto"
                    >
                      {service.title}
                    </Heading>

                    {/* Body text - fades in on hover */}
                    <Text
                      className="service-card-body"
                      color="rgba(255, 255, 255, 0.8)"
                      lineHeight="1.6"
                    >
                      {service.shortDescription}
                    </Text>

                    {/* Button */}
                    <Button
                      as="button"
                      cursor="pointer"
                      display="inline-block"
                      textDecoration="none"
                      color="#2c2c2c"
                      background="#d4a5b8"
                      padding="0.5em 1.25em"
                      borderRadius="0.5em"
                      border="none"
                      fontSize="1rem"
                      fontWeight="500"
                      width="fit-content"
                      mx="auto"
                      mt={2}
                      onClick={() => openModal(service)}
                      _hover={{
                        backgroundColor: 'white',
                      }}
                      transition="background-color 300ms ease"
                    >
                      Mehr erfahren
                    </Button>
                  </VStack>
                </Box>
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
                <Text key={index} mb={4}>
                  {paragraph}
                </Text>
              ))}
          </Box>
        </Modal>
      )}
    </>
  );
}

export default Services;
