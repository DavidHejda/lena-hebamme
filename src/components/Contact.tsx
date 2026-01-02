import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import useContactForm from '../hooks/useContactForm';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

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
          as="h1"
          fontSize={{ base: '2rem', md: '3.5rem' }}
          fontWeight="300"
          mb={12}
          letterSpacing="2px"
          textAlign="center"
        >
          Kontakt
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 16 }}
          mt={12}
        >
          <ContactInfo />
          <ContactForm
            isConsentGiven={isConsentGiven}
            setIsConsentGiven={setIsConsentGiven}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Contact;
