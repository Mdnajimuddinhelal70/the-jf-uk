import ContactCTA from "@/components/modules/Contact/ContactCTA";
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
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
