import { Box } from '@chakra-ui/react';
import './App.css';
import logo from './assets/logo-soft.png';
import About from './components/About';
import CarouselComponent from './components/CarouselComponent';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfilePicture from './components/ProfilePicture';
import Services from './components/Services';
import SplitContent from './components/SplitContent';
import { carouselImages } from './data/carouselImages';

function App() {
  return (
    <Box id="home">
      <Header />
      <Hero />
      <SplitContent
        leftContent={<About />}
        rightContent={<ProfilePicture />}
        spacing={8}
        asSection={true}
        bg="var(--secondary-color)"
      />
      <CarouselComponent images={carouselImages} />
      <Services />
      <Contact backgroundLogo={logo} logoOpacity={0.3} logoRepeat={true} />
      <Footer />
    </Box>
  );
}

export default App;
