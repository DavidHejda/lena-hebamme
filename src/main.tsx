import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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
        background: 'white',
        color: 'black',
      },
      // You can add other global styles here
      body: {
        fontFamily: "'Ibm Plex Mono', sans-serif",
      },
    },
  },
});
console.log(theme);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
