import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

/**
 * ContactForm Component
 *
 * Displays a contact form with validation and submission handling.
 */

interface IErrors {
  name: string;
  email: string;
  phone: string;
  consent: boolean;
}

interface ContactFormProps {
  isConsentGiven: boolean;
  setIsConsentGiven: (value: boolean) => void;
  errors: IErrors;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function ContactForm({
  isConsentGiven,
  setIsConsentGiven,
  errors,
  handleChange,
  handleSubmit,
}: ContactFormProps) {
  const [messageLength, setMessageLength] = useState(0);
  const maxLength = 1000;

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setMessageLength(value.length);
      handleChange(e);
    }
  };

  return (
    <Box
      bg="var(--primary-logo-color-background)"
      padding="2.5rem"
      borderRadius="15px"
    >
      <form onSubmit={handleSubmit}>
        <VStack align="stretch" spacing={6}>
          <FormControl isRequired>
            <FormLabel
              htmlFor="name"
              color="var(--text-dark)"
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
                borderColor: 'var(--primary-logo-color)',
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
              color="var(--text-dark)"
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
                borderColor: 'var(--primary-logo-color)',
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
              color="var(--text-dark)"
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
                borderColor: 'var(--primary-logo-color)',
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
              maxLength={maxLength}
              padding="12px"
              border="1px solid #e0e0e0"
              borderRadius="8px"
              onChange={handleMessageChange}
              fontSize="1rem"
              resize="vertical"
              backgroundColor="white"
              _focus={{
                borderColor: 'var(--primary-logo-color)',
                boxShadow: '0 0 0 3px rgba(212, 165, 184, 0.1)',
              }}
            />
            <Text
              fontSize="0.875rem"
              color={messageLength >= maxLength ? '#e53e3e' : '#666'}
              textAlign="right"
              mt={1}
            >
              {messageLength} / {maxLength} Zeichen
            </Text>
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
                  bg: 'var(--primary-logo-color)',
                  borderColor: 'var(--primary-logo-color)',
                },
              }}
            >
              Ich stimme der Datenverarbeitung zu
            </Checkbox>
          </FormControl>

          <Button
            type="submit"
            width="100%"
            padding="15px"
            background="var(--primary-logo-color-light)"
            color="white"
            border="none"
            borderRadius="8px"
            fontSize="1rem"
            fontWeight="500"
            cursor="pointer"
            transition="all 0.3s ease"
            isDisabled={!isConsentGiven}
            _hover={{
              background: 'var(--primary-logo-color-dark)',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            }}
          >
            Nachricht senden
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default ContactForm;
