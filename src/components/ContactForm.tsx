import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';

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
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function ContactForm({
  isConsentGiven,
  setIsConsentGiven,
  errors,
  handleChange,
  handleSubmit,
}: ContactFormProps) {
  return (
    <Box bg="var(--secondary-color)" padding="2.5rem" borderRadius="15px">
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
              Ich stimme der Datenverarbeitung zu
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
  );
}

export default ContactForm;

