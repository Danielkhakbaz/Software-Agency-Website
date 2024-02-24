import Landing from "components/app/landing/landing";
import AboutTeam from "components/app/about-team/about-team";
import Skills from "components/app/skills/skills";
import Clients from "components/app/clients/clients";
import Testimonials from "components/app/testimonials/testimonials";
import ContactUs from "components/app/contact-us/contact-us";

const HomePage = async () => {
  return (
    <>
      <Landing />
      <AboutTeam />
      <Skills />
      <Clients />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default HomePage;
