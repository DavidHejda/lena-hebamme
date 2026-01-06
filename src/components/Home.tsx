import { Box } from "@chakra-ui/react";
import logo from "../assets/logo-soft.png";
import About from "./About";
import CarouselComponent from "./CarouselComponent";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ProfilePicture from "./ProfilePicture";
import Services from "./Services";
import SplitContent from "./SplitContent";
import { carouselImages } from "../data/carouselImages";

/**
 * Home Component
 *
 * Main home page content with all sections.
 * This component contains the original App content.
 */
function Home() {
  return (
    <Box id="home">
      <Header />
      <Hero />
      <SplitContent
        leftContent={<About />}
        rightContent={<ProfilePicture />}
        spacing={8}
        asSection={true}
        backgroundLogo={logo}
        logoOpacity={0.5}
        id="about"
      />
      <CarouselComponent images={carouselImages} />
      <Services />
      <Contact backgroundLogo={logo} logoOpacity={0.3} logoRepeat={true} />
      <Footer />
    </Box>
  );
}

export default Home;

