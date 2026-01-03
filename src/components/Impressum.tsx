import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import './Impressum.css';
import Modal from './Modal';

interface ImpressumProps {
  isOpen: boolean;
  onClose: () => void;
}

function Impressum({ isOpen, onClose }: ImpressumProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="800px"
      className="impressum-modal"
      displayModalHeader={true}
      title="Impressum"
    >
      <Box className="impressum-content">
        <VStack align="stretch" spacing={6}>
          <Text>
            Die Inhalte dieser Website werden sorgfältig erstellt und regelmäßig
            aktualisiert, dennoch wird keine Haftung für Richtigkeit,
            Vollständigkeit und Aktualität übernommen. Für Schäden, die aus der
            Nutzung oder Nichtnutzung der bereitgestellten Informationen
            entstehen, wird – soweit gesetzlich zulässig – keine Haftung
            übernommen.
          </Text>

          <Text>
            Für Inhalte externer Websites, auf die über Links verwiesen wird,
            wird keine Verantwortung oder Haftung übernommen, da diese außerhalb
            des Einflussbereichs liegen. Bei Bekanntwerden rechtswidriger
            Inhalte werden entsprechende Links umgehend entfernt.
          </Text>

          <Text>
            Alle Inhalte dieser Website unterliegen dem Urheberrecht; eine
            Nutzung oder Veränderung ohne Zustimmung der Rechteinhaberin ist
            nicht gestattet.
          </Text>

          <Box>
            <Heading as="h3" fontSize="1.2rem" fontWeight="600" mb={2}>
              Name:
            </Heading>
            <Text>Lena Tiefenthaler</Text>
          </Box>

          <Box>
            <Heading as="h3" fontSize="1.2rem" fontWeight="600" mb={2}>
              Berufsbezeichnung:
            </Heading>
            <Text>Hebamme</Text>
          </Box>

          <Box>
            <Heading as="h3" fontSize="1.2rem" fontWeight="600" mb={2}>
              Adresse:
            </Heading>
            <VStack align="flex-start" spacing={0}>
              <Text>Salzachweg 49a</Text>
              <Text>5061 Elsbethen</Text>
              <Text>Österreich</Text>
            </VStack>
          </Box>

          <Box>
            <Heading as="h3" fontSize="1.2rem" fontWeight="600" mb={2}>
              Kontakt:
            </Heading>
            <VStack align="flex-start" spacing={0}>
              <Text>Telefon: 0660 6705003</Text>
              <Text>E-Mail: hebammetiefenthaler@gmail.com</Text>
            </VStack>
          </Box>

          <Box>
            <Heading as="h3" fontSize="1.2rem" fontWeight="600" mb={2}>
              Mitgliedschaft:
            </Heading>
            <Text>
              Mitglied des österreichischen Hebammengremiums (ÖHG) seit August
              2025 mit der Mitgliednummer 4504
            </Text>
          </Box>

          <Box>
            <Heading as="h3" fontSize="1.2rem" fontWeight="600" mb={2}>
              Berufsrechtliche Vorschriften:
            </Heading>
            <Text>Hebammengesetz (HebG)</Text>
          </Box>

          <Box>
            <Heading as="h3" fontSize="1.2rem" fontWeight="600" mb={2}>
              Berufshaftpflicht- und Rechtsschutzversicherung:
            </Heading>
            <Text>
              Mitversichert in der Gruppenhaftpflicht- und
              Rechtsschutzversicherung über das Österreichisches Hebammengremium
              seit 05.01.2026
            </Text>
          </Box>

          <Box>
            <Heading as="h3" fontSize="1.2rem" fontWeight="600" mb={2}>
              Logo © Hermann Vogtenhuber
            </Heading>
          </Box>
        </VStack>
      </Box>
    </Modal>
  );
}

export default Impressum;
