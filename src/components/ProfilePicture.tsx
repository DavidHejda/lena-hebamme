import { Box, Button, Image, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import CVModal from './CVModal';

/**
 * ProfilePicture Component
 *
 * Displays a circular profile picture with a button to open CV modal.
 *
 * @param imageUrl - URL path to the profile picture (default: '/images/6.jpg')
 * @param size - Size of the circular picture in pixels (default: { base: '250px', md: '350px' })
 */
interface ProfilePictureProps {
  imageUrl?: string;
  size?: { base: string; md: string };
}

function ProfilePicture({
  imageUrl = '/images/6.jpg',
  size = { base: '250px', md: '350px' },
}: ProfilePictureProps) {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <>
      <VStack
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        minHeight={{ base: '300px', md: '400px' }}
        spacing={6}
      >
        <Box
          position="relative"
          width={size}
          height={size}
          borderRadius="50%"
          overflow="hidden"
          boxShadow="lg"
        >
          <Image
            src={imageUrl}
            alt="Profile"
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="50%"
          />
        </Box>
        <Button
          onClick={() => setIsCVModalOpen(true)}
          background="#d4a5b8"
          color="white"
          border="none"
          borderRadius="8px"
          fontSize={{ base: '0.9rem', md: '1rem' }}
          fontWeight="500"
          padding={{ base: '12px 24px', md: '15px 30px' }}
          cursor="pointer"
          transition="all 0.3s ease"
          _hover={{
            background: '#c08fa3',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }}
        >
          Lebenslauf anzeigen
        </Button>
      </VStack>
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </>
  );
}

export default ProfilePicture;
