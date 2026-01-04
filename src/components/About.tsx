import { Box, Heading, Text, VStack } from '@chakra-ui/react';

/**
 * About Component
 *
 * Displays information about the person.
 * Contains only the text content without any layout splitting.
 */

const textSections = [
  'Ich bin ein Mensch mit viel Herz, Klarheit und innerer Ruhe. Offenheit, Ehrlichkeit und Verlässlichkeit prägen mich – ebenso wie die Fähigkeit, auch in intensiven Situationen ruhig zu bleiben und den Überblick zu bewahren. Ich lache viel und gerne, mein Lachen ist herzlich und ansteckend.',
  'Ausgleich finde ich in der Natur – beim Wandern, an Seen und draußen unterwegs mit meiner schwarzen Labradorhündin, die mich seit vier Jahren begleitet. Das Unterwegssein, das Reisen und das Vertrauen in den eigenen Weg haben mich geprägt: Ob als Au-pair in Island oder zuletzt mehrere Monate mit Dachzelt und Hund in Skandinavien und im Baltikum. Diese Erfahrungen haben mir gezeigt, wie wichtig innere Ruhe, Mut und Verbundenheit sind.',
  'Ich bin engagiert und zuverlässig. Menschen beschreiben mich als Powerfrau mit Herz – jemand, auf den man zählen kann, der Sicherheit ausstrahlt und zugleich warm und nahbar ist. Ich habe einen guten Blick für das große Ganze und verliere dabei die Details nicht aus den Augen.',
  'All das macht mich zu dem Menschen, der ich bin.',
];

function About() {
  return (
    <Box width="100%" id="about">
      <Heading
        as="h1"
        fontSize={{ base: '2rem', md: '3.5rem' }}
        fontWeight="300"
        mb={8}
        letterSpacing="2px"
        textAlign="center"
        // fontFamily="'Cormorant', serif"
        // letterSpacing="2px"
        // letterSpacing="-2px"
        // fontFamily="'Playfair Display', serif"
      >
        Über Mich
      </Heading>

      <VStack align="stretch" spacing={6}>
        {textSections.map((text, index) => (
          <Text
            key={index}
            fontWeight="300"
            lineHeight="1.5"
            fontSize={{ base: '1.2rem' }}
            textAlign="justify"
            color="gray.700"
          >
            {text}
          </Text>
        ))}
      </VStack>
    </Box>
  );
}

export default About;
