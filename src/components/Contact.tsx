import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import logo from '../assets/logo-soft.png';
import useContactForm from '../hooks/useContactForm';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

/**
 * Contact Component
 *
 * Displays contact information and a contact form.
 * Uses Chakra UI components for styling and layout.
 *
 * @param backgroundLogo - Optional logo image source to display as background (default: logo-soft.png)
 * @param logoOpacity - Opacity of the background logo (default: 0.1)
 * @param logoRepeat - Whether to repeat the logo instead of containing it (default: false)
 */

interface IErrors {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

interface ContactProps {
  backgroundLogo?: string;
  logoOpacity?: number;
  logoRepeat?: boolean;
}

const Contact = ({
  backgroundLogo,
  logoOpacity = 0.6,
  logoRepeat = false,
}: ContactProps = {}) => {
  // Use default logo if none provided
  const logoSource = backgroundLogo || logo;
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
      position="relative"
      overflow="hidden"
    >
      {/* Background logo */}
      {logoSource && (
        <Box
          position="absolute"
          top={logoRepeat ? '0' : '50%'}
          left={logoRepeat ? '0' : '50%'}
          transform={logoRepeat ? 'none' : 'translate(-50%, -50%)'}
          width="100%"
          height="100%"
          opacity={logoOpacity}
          zIndex="0"
          pointerEvents="none"
          backgroundImage={logoRepeat ? `url(${logoSource})` : 'none'}
          backgroundRepeat={logoRepeat ? 'repeat' : 'no-repeat'}
          backgroundSize={logoRepeat ? 'auto' : 'contain'}
          // backgroundPosition="center"
        >
          {!logoRepeat && (
            <Image
              src={logoSource}
              alt=""
              width="100%"
              height="100%"
              objectFit="contain"
              objectPosition="center"
            />
          )}
        </Box>
      )}
      <Box maxWidth="1200px" mx="auto" position="relative" zIndex="1">
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
