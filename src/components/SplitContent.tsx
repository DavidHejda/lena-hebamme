import { Box, Flex, Image } from '@chakra-ui/react';

/**
 * SplitContent Component
 *
 * A reusable component that splits content into two sections (left and right).
 * Automatically handles responsive layout - stacks vertically on mobile, side-by-side on desktop.
 *
 * @param leftContent - The content to display on the left side
 * @param rightContent - The content to display on the right side
 * @param spacing - Optional spacing between the two sections (default: 8)
 * @param reverseOnMobile - Whether to reverse the order on mobile devices (default: false)
 * @param asSection - Whether to wrap in a section Box with padding and max-width (default: false)
 * @param bg - Background color for the section (default: 'white')
 * @param maxWidth - Maximum width of the container (default: '1200px')
 * @param backgroundLogo - Optional logo image source to display as background (default: undefined)
 * @param logoOpacity - Opacity of the background logo (default: 0.1)
 */
interface SplitContentProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  spacing?: number;
  reverseOnMobile?: boolean;
  asSection?: boolean;
  bg?: string;
  maxWidth?: string;
  backgroundLogo?: string;
  logoOpacity?: number;
}

function SplitContent({
  leftContent,
  rightContent,
  spacing = 8,
  reverseOnMobile = false,
  asSection = false,
  bg = 'white',
  maxWidth = '1200px',
  backgroundLogo,
  logoOpacity = 0.1,
}: SplitContentProps) {
  const content = (
    <Flex
      direction={{
        base: reverseOnMobile ? 'column-reverse' : 'column',
        md: 'row',
      }}
      gap={spacing}
      align={{ base: 'center', md: 'stretch' }}
      justify="space-between"
      width="100%"
      position="relative"
      zIndex="1"
    >
      <Box flex={{ base: '1', md: '1' }} width={{ base: '100%', md: 'auto' }}>
        {leftContent}
      </Box>
      <Box flex={{ base: '1', md: '1' }} width={{ base: '100%', md: 'auto' }}>
        {rightContent}
      </Box>
    </Flex>
  );

  if (asSection) {
    return (
      <Box
        as="section"
        bg={bg}
        py={{ base: '60px', md: '80px' }}
        px={{ base: '20px', md: '40px' }}
        position="relative"
        overflow="hidden"
      >
        {/* Background logo */}
        {backgroundLogo && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="100%"
            height="100%"
            opacity={logoOpacity}
            zIndex="0"
            pointerEvents="none"
          >
            <Image
              src={backgroundLogo}
              alt=""
              width="100%"
              height="100%"
              objectFit="contain"
              objectPosition="center"
            />
          </Box>
        )}
        <Box maxWidth={maxWidth} mx="auto" position="relative" zIndex="1">
          {content}
        </Box>
      </Box>
    );
  }

  return content;
}

export default SplitContent;
