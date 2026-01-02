import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import useContactForm from '../hooks/useContactForm';

/**
 * Contact Component
 *
 * Displays contact information and a contact form.
 * Uses Chakra UI components for styling and layout.
 */

interface IErrors {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

const Contact = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const [errors, setErrors] = useState<IErrors>({
    name: '',
    email: '',
    phone: '',
    consent: false,
  });
  /**
   * Handles form submission
   */
  const { handleSubmit, handleChange } = useContactForm({
    isConsentGiven,
    errors,
    setErrors,
    setIsConsentGiven,
  });

  return (
    <Box
      id="contact"
      as="section"
      bg="white"
      py={{ base: '60px', md: '80px' }}
      px={{ base: '20px', md: '40px' }}
    >
      <Box maxWidth="1200px" mx="auto">
        <Heading
          as="h2"
          width="100%"
          backgroundColor="#d4a5b8"
          textAlign="center"
          padding="20px"
          mb={5}
          borderRadius="15px"
          boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.1)"
          fontSize={{ base: '1.75rem', md: '2rem' }}
          fontWeight="300"
        >
          Kontakt
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 16 }}
          mt={12}
        >
          {/* Contact Information */}
          <Box bg="#f5e6e8" padding="2.5rem" borderRadius="15px">
            <VStack align="stretch" spacing={8}>
              <Box>
                <Heading
                  as="h3"
                  fontSize="1.2rem"
                  mb={2}
                  color="#2c2c2c"
                  fontWeight="500"
                >
                  Telefon
                </Heading>
                <Text color="#666" lineHeight="1.6">
                  +49 XXX XXX XXXX
                </Text>
              </Box>

              <Box>
                <Heading
                  as="h3"
                  fontSize="1.2rem"
                  mb={2}
                  color="#2c2c2c"
                  fontWeight="500"
                >
                  E-Mail
                </Heading>
                <Text color="#666" lineHeight="1.6">
                  kontakt@example.de
                </Text>
              </Box>

              <Box>
                <Heading
                  as="h3"
                  fontSize="1.2rem"
                  mb={2}
                  color="#2c2c2c"
                  fontWeight="500"
                >
                  Sprechzeiten
                </Heading>
                <Text color="#666" lineHeight="1.6">
                  Montag – Donnerstag: 9:00 – 17:00 Uhr
                </Text>
                <Text color="#666" lineHeight="1.6">
                  Freitag: 9:00 – 15:00 Uhr
                </Text>
              </Box>

              <Box>
                <Heading
                  as="h3"
                  fontSize="1.2rem"
                  mb={2}
                  color="#2c2c2c"
                  fontWeight="500"
                >
                  Betreuungsgebiet
                </Heading>
                <Text color="#666" lineHeight="1.6">
                  Lorem Ipsum
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Contact Form */}
          <Box bg="#f5e6e8" padding="2.5rem" borderRadius="15px">
            <form onSubmit={handleSubmit}>
              <VStack align="stretch" spacing={6}>
                <FormControl isRequired>
                  <FormLabel
                    htmlFor="name"
                    color="#2c2c2c"
                    fontWeight="500"
                    mb={2}
                  >
                    Name
                  </FormLabel>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    required
                    padding="12px"
                    border="1px solid #e0e0e0"
                    borderRadius="8px"
                    fontSize="1rem"
                    backgroundColor="white"
                    onChange={handleChange}
                    _focus={{
                      borderColor: '#d4a5b8',
                      boxShadow: '0 0 0 3px rgba(212, 165, 184, 0.1)',
                    }}
                  />
                  {errors && errors.name && (
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    htmlFor="email"
                    color="#2c2c2c"
                    fontWeight="500"
                    mb={2}
                  >
                    E-Mail
                  </FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    padding="12px"
                    border="1px solid #e0e0e0"
                    borderRadius="8px"
                    fontSize="1rem"
                    backgroundColor="white"
                    onChange={handleChange}
                    _focus={{
                      borderColor: '#d4a5b8',
                      boxShadow: '0 0 0 3px rgba(212, 165, 184, 0.1)',
                    }}
                  />
                  {errors && errors.email && (
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel
                    htmlFor="phone"
                    color="#2c2c2c"
                    fontWeight="500"
                    mb={2}
                  >
                    Telefon
                  </FormLabel>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    padding="12px"
                    border="1px solid #e0e0e0"
                    borderRadius="8px"
                    fontSize="1rem"
                    backgroundColor="white"
                    onChange={handleChange}
                    _focus={{
                      borderColor: '#d4a5b8',
                      boxShadow: '0 0 0 3px rgba(212, 165, 184, 0.1)',
                    }}
                  />
                  {errors && errors.phone && (
                    <FormErrorMessage>{errors.phone}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    htmlFor="message"
                    color="#2c2c2c"
                    fontWeight="500"
                    mb={2}
                  >
                    Nachricht
                  </FormLabel>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    padding="12px"
                    border="1px solid #e0e0e0"
                    borderRadius="8px"
                    onChange={handleChange}
                    fontSize="1rem"
                    resize="vertical"
                    backgroundColor="white"
                    _focus={{
                      borderColor: '#d4a5b8',
                      boxShadow: '0 0 0 3px rgba(212, 165, 184, 0.1)',
                    }}
                  />
                </FormControl>
                <FormControl id="consent">
                  <Checkbox
                    isChecked={isConsentGiven}
                    onChange={(e) => setIsConsentGiven(e.target.checked)}
                    sx={{
                      '& > span:first-of-type': {
                        bg: 'white',
                        borderColor: '#e0e0e0',
                      },
                      '&[data-checked] > span:first-of-type': {
                        bg: '#d4a5b8',
                        borderColor: '#d4a5b8',
                      },
                    }}
                  >
                    I agree to data processing
                  </Checkbox>
                </FormControl>

                <Button
                  type="submit"
                  width="100%"
                  padding="15px"
                  background="#d4a5b8"
                  color="white"
                  border="none"
                  borderRadius="8px"
                  fontSize="1rem"
                  fontWeight="500"
                  cursor="pointer"
                  transition="all 0.3s ease"
                  isDisabled={!isConsentGiven}
                  _hover={{
                    background: '#c08fa3',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Nachricht senden
                </Button>
              </VStack>
            </form>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
