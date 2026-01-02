import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import extendTheme from the correct location for Chakra UI v2+ or v3+
// Try this import if you're on Chakra UI v2+:
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// If the above doesn't work, try importing from '@chakra-ui/react' as:
// import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// But: In recent Chakra UI versions, extendTheme is no longer exported from '@chakra-ui/react' directly,
// so you usually need to import it from '@chakra-ui/theme' as shown above.

// Configure your theme here
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      'html, body': {
        paddingTop: '2rem', // Adjust the padding to match the height of your Navbar
        background: 'white',
        color: 'black',
      },
      // You can add other global styles here
      body: {
        fontFamily: "'Ibm Plex Mono', sans-serif", // Replace with your default font
      },
    },
  },
});
console.log(theme);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
