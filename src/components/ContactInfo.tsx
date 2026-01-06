import { Box, Heading, Text, VStack } from '@chakra-ui/react';

/**
 * ContactInfo Component
 *
 * Displays contact information including phone, email, hours, and service area.
 */

const contactInformation = [
  {
    label: 'E-Mail',
    value: ['hebammetiefenthaler@gmail.com'],
  },
  {
    label: 'Telefon',
    value: ['+43 660 6705003'],
  },
  {
    label: 'Telefonzeiten',
    value: [
      'Montag – Donnerstag: 9:00 – 17:00 Uhr',
      'Freitag: 9:00 – 15:00 Uhr',
    ],
  },
  {
    label: 'Betreuungsgebiet',
    value: ['Salzburg und Umgebung'],
  },
];

const ContactInfo = () => {
  return (
    <Box
      bg="var(--primary-logo-color-background)"
      padding="2.5rem"
      borderRadius="15px"
    >
      <VStack align="stretch" spacing={8}>
        {contactInformation.map((item) => (
          <Box key={item.label}>
            <Heading
              as="h3"
              fontSize="1.2rem"
              mb={2}
              color="var(--text-dark)"
              fontWeight="500"
            >
              {item.label}
            </Heading>
            {item.value.map((value) => (
              <Text key={value} color="var(--text-light)" lineHeight="1.6">
                {value}
              </Text>
            ))}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ContactInfo;
