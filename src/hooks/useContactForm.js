import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import useValidation from './useValidation';

const useContactForm = ({
  errors,
  setErrors,
  isConsentGiven,
  setIsConsentGiven,
}) => {
  const toast = useToast();

  const { validateEmail } = useValidation();

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Please enter your name.';
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Please enter your email address.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    // Phone is optional, so no validation needed
    if (!formData.message) newErrors.message = 'Please enter your message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Also clear the error for this field if it exists
    if (errors && errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (!isConsentGiven) {
      toast({
        title: 'Missing consent',
        description: 'Please check the consent to process personal data.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!formspreeEndpoint) {
      toast({
        title: 'Configuration error',
        description:
          'Form submission endpoint is not configured. Please contact the administrator.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.error('VITE_FORMSPREE_ENDPOINT is not set');
      return;
    }

    const form = e.target;
    const formDataToSend = new FormData(form);

    fetch(formspreeEndpoint, {
      method: 'POST',
      body: formDataToSend,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          toast({
            title: 'Message sent.',
            description:
              'I have received your message and will contact you as soon as possible.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          e.target.reset(); // Reset the form after submission
          setIsConsentGiven(false); // Reset the consent checkbox
          setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form data state
        } else {
          return response.json().then((data) => {
            console.error('Form submission error:', data);
            toast({
              title: 'An error occurred',
              description:
                data.error || 'Unable to send message. Please try again later.',
              status: 'error',
              duration: 5000,
              isClosable: true,
            });
          });
        }
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        toast({
          title: 'An error occurred.',
          description: 'Unable to send message. Please try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };
  return { handleChange, handleSubmit };
};

export default useContactForm;
