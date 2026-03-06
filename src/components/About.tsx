import { Box, Heading, Text, VStack } from '@chakra-ui/react';

/**
 * About Component
 *
 * Displays information about the person.
 * Contains only the text content without any layout splitting.
 */

// const textSections = [
//   'Ich bin ein Mensch mit viel Herz, Klarheit und innerer Ruhe. Offenheit, Ehrlichkeit und Verlässlichkeit prägen mich – ebenso wie die Fähigkeit, auch in intensiven Situationen ruhig zu bleiben und den Überblick zu bewahren. Ich lache viel und gerne, mein Lachen ist herzlich und ansteckend.',
//   'Ausgleich finde ich in der Natur – beim Wandern, an Seen und draußen unterwegs in Salzburg und Umgebung mit meiner schwarzen Labradorhündin, die mich seit vier Jahren begleitet. Das Unterwegssein, das Reisen und das Vertrauen in den eigenen Weg haben mich geprägt: Ob als Au-pair in Island oder zuletzt mehrere Monate mit Dachzelt und Hund in Skandinavien und im Baltikum. Diese Erfahrungen haben mir gezeigt, wie wichtig innere Ruhe, Mut und Verbundenheit sind.',
//   'Ich bin engagiert und zuverlässig. Menschen beschreiben mich als Powerfrau mit Herz – jemand, auf den man zählen kann, der Sicherheit ausstrahlt und zugleich warm und nahbar ist. Ich habe einen guten Blick für das große Ganze und verliere dabei die Details nicht aus den Augen.',
//   'All das macht mich zu dem Menschen, der ich bin.',
// ];

const textSections = [
  "Mein Name ist Lena Tiefenthaler, ich bin Wahlhebamme im Raum Salzburg.",
  <><i>„Ljósmóðir – Lichtmutter"</i> So nennen die Isländer:innen ihre Hebammen. Ein Wort, das mich tief berührt hat und das beschreibt, wofür ich stehe: Licht in einen der intensivsten und kostbarsten Momente des Lebens zu bringen."</>,
   "Menschen beschreiben mich als Powerfrau mit Herz – jemand, auf den man zählen kann, der Sicherheit ausstrahlt und zugleich warm und nahbar ist. Offenheit, Ehrlichkeit und Verlässlichkeit prägen meine Arbeit ebenso wie meine Fähigkeit, auch in intensiven Momenten ruhig zu bleiben und den Überblick zu bewahren.",
   "Geboren in der Landesklinik Hallein, aufgewachsen in Elsbethen, führte mich mein beruflicher Weg zur Hebammenausbildung in Augsburg. Danach sammelte ich knapp vier Jahre wertvolle Erfahrung im Kreißsaal in Baden-Württemberg – sowohl im ärztlich geleiteten als auch im Hebammenkreißsaal. In dieser Zeit durfte ich mehr als 300 Geburten begleiten. Parallel dazu war ich ab 2024 als freiberufliche Hebamme in Schwangerschaft und Wochenbett tätig.",
   "Ausgleich und Kraft finde ich in der Natur – beim Wandern, an Seen, unterwegs in Salzburg und Umgebung mit meiner Labradorhündin. Das Reisen und das Vertrauen in den eigenen Weg haben mich geprägt: als Au-pair in Island, wo ich die Bedeutung des Wortes Ljósmóðir kennenlernte, und zuletzt mehrere Monate mit Dachzelt und Hund in Skandinavien und im Baltikum. "
]

function About() {
  return (
    <Box width="100%">
      <Heading
        as="h2"
        fontSize={{ base: '2rem', md: '3.5rem' }}
        fontWeight="300"
        mb={8}
        letterSpacing="2px"
        textAlign="center"
        fontFamily="'Playfair Display', serif"
        color="#2c2c2c"
      >
        Über Mich
      </Heading>

      <VStack align="stretch" spacing={3}>
        {textSections.map((text, index) => (
          <Text
            key={index}
            fontWeight="300"
            lineHeight="1.4"
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
