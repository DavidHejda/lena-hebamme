import {
  Box,
  Modal as ChakraModal,
  Heading,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
  displayModalHeader?: boolean;
}

function Modal({
  isOpen,
  onClose,
  children,
  icon,
  title,
  maxWidth = '600px',
  className = '',
  displayModalHeader = true,
}: ModalProps) {
  useEffect(() => {
    const header = document.querySelector('.header');

    if (isOpen) {
      // Hide header only when CV modal is open
      if (className.includes('cv-modal') && header) {
        (header as HTMLElement).style.display = 'none';
      }
    } else {
      // Show header again when modal closes
      if (header) {
        (header as HTMLElement).style.display = '';
      }
    }

    return () => {
      if (header) {
        (header as HTMLElement).style.display = '';
      }
    };
  }, [isOpen, className]);

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="xl"
      motionPreset="slideInBottom"
    >
      <ModalOverlay bg="rgba(0, 0, 0, 0.6)" />
      <ModalContent
        maxW={maxWidth}
        className={className}
        borderRadius="15px"
        boxShadow="0 10px 40px rgba(0, 0, 0, 0.2)"
        maxH="90vh"
        overflow="hidden"
        display="flex"
        flexDirection="column"
      >
        <ModalCloseButton
          size="lg"
          borderRadius="50%"
          _hover={{
            background: 'var(--secondary-color)',
            color: 'var(--text-dark)',
          }}
        />
        {displayModalHeader && (icon || title) && (
          <ModalHeader
            textAlign="center"
            borderBottom="1px solid var(--primary-logo-color-light)"
            pb={6}
            pt={10}
          >
            {icon && (
              <Box fontSize="4rem" mb={4}>
                {icon}
              </Box>
            )}
            {title && (
              <Heading
                as="h4"
                fontSize="2rem"
                color="var(--text-dark)"
                fontWeight="400"
                margin={0}
              >
                {title}
              </Heading>
            )}
          </ModalHeader>
        )}
        <ModalBody
          padding={displayModalHeader ? '2rem 2.5rem' : '0'}
          overflowY="auto"
          flex="1"
          color="var(--text-light)"
          lineHeight="1.8"
          fontSize="1.1rem"
        >
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}

export default Modal;
