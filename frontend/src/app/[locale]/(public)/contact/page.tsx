import ContactFAQ from "@/components/modules/Contact/ContactFAQ";
import ContactHero from "@/components/modules/Contact/ContactHero";
import ContactLocation from "@/components/modules/Contact/ContactLocation";
import AboutContactSection from "@/components/modules/Contact/ContactSection";

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <AboutContactSection />
      <ContactLocation />
      <ContactFAQ />
    </div>
  );
};

export default ContactPage;
