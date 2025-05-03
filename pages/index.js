import AboutUs from "components/home-page/about-us/about-us";
import Hero from "components/home-page/hero/hero";
import MissionAndVisson from "components/home-page/mission-and-vision/mission-and-vision";
import Brands from "components/home-page/brands/brands";
import ContactUs from "components/home-page/contact-us/contact-us";
import Footer from "components/home-page/footer/footer";

export default function HomePage() {
  return (
    <>
      <Hero onClick="#contact-us" />
      <AboutUs />
      <Brands />
      <MissionAndVisson />
      <ContactUs />
      <Footer/>
    </>
  );
}
