import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactSplitEmail from '@/components/sections/contact/ContactSplitEmail';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FooterBasic from '@/components/sections/footer/FooterBasic';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialDetailedCards from '@/components/sections/testimonial/TestimonialDetailedCards';
import { Heart, Home, Users } from "lucide-react";

export default function App() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarCentered
          logo="PawsAdopt"
          navItems={[
            { name: "About", href: "#about" },
            { name: "Process", href: "#features" },
            { name: "Stories", href: "#testimonials" },
            { name: "FAQ", href: "#faq" },
          ]}
          ctaButton={{
            text: "Adopt Now",            href: "#contact"}}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          tag="Finding Forever Homes"
          title="Give a Second Chance to a Loyal Friend"
          description="Join our mission to rescue and rehome animals in need. Discover the joy of adoption and find your new best friend today."
          primaryButton={{ text: "Browse Adoptions", href: "#contact" }}
          secondaryButton={{ text: "Volunteer", href: "#about" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ia4j49"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeaturesSplit
          tag="Our Mission"
          title="Compassion in Every Paw"
          description="We are dedicated to providing medical care, nutrition, and love to every animal until they find their perfect home. Our shelter is a haven for pets in transition."
          items={[
            { icon: Heart, title: "Compassionate Care", description: "Professional veterinary and behavioral support." },
            { icon: Home, title: "Safe Haven", description: "A comfortable, stress-free environment." },
            { icon: Users, title: "Community Focus", description: "Connecting animals with loving local families." },
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=qmov8p"
        />
      </div>

      <div id="features" data-section="features">
        <FeaturesComparison
          tag="Adoption Process"
          title="Making Adoption Simple"
          description="We have streamlined our process to ensure every adoption is a match made in heaven."
          negativeItems={["High application fees", "Long wait times", "Complex paperwork"]}
          positiveItems={["Transparent adoption fees", "Supportive staff guidance", "Post-adoption support"]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricsSimpleCards
          tag="Our Impact"
          title="Making a Difference"
          description="Your support creates real-world positive outcomes for local animals."
          metrics={[
            { value: "1,200+", description: "Animals rescued per year" },
            { value: "95%", description: "Successful adoption rate" },
            { value: "500+", description: "Active local volunteers" },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialDetailedCards
          tag="Success Stories"
          title="Heartwarming Transformations"
          description="Hear from the wonderful families who opened their homes to our rescue animals."
          testimonials={[
            { title: "Perfect Match", quote: "Our puppy brought so much energy to our home. The shelter process was so smooth!", name: "Sarah J.", role: "Adoptive Parent", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=sg8ivv" },
            { title: "Lifesaver", quote: "We weren't sure about adopting, but the team here made us feel so confident and supported.", name: "Mark D.", role: "Pet Owner", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9ral2a" },
            { title: "So Grateful", quote: "My cat is the sweetest companion. The support after adoption was unexpected and helpful.", name: "Elena R.", role: "Adopter", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=xz2rh2" },
            { title: "Wonderful Experience", quote: "Great communication and genuinely caring staff. Could not ask for better support.", name: "David K.", role: "Pet Owner", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=sy16a1" },
            { title: "Highly Recommend", quote: "Adopting here was the best decision we made all year. Simply life-changing.", name: "Lisa B.", role: "Volunteer & Adopter", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ar9s77" },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          tag="Common Questions"
          title="Preparing for Your New Friend"
          description="Here are some common answers to help you navigate the adoption process."
          items={[
            { question: "How do I start the adoption process?", answer: "You can start by browsing our available animals online or visiting us in person during open hours." },
            { question: "Are all animals vaccinated?", answer: "Yes, every animal is fully vetted and vaccinated prior to adoption." },
            { question: "Can I return a pet if it's not a match?", answer: "We encourage a trial period, and our team is always available to help solve adjustment issues." },
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=tmvqjj"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofMarquee
          tag="Community Partners"
          title="Supported By Our Community"
          description="We are grateful for the ongoing support from our local partners."
          names={["City Veterinary Clinic", "Paws & Play Grooming", "Local Pet Supplies", "Downtown Rescue League", "County Humane Society", "Regional Adoption Network", "Future Pet Founders"]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitEmail
          tag="Adopt Today"
          title="Start Your Journey"
          description="Join our newsletter to see new arrivals, upcoming adoption events, and ways you can help."
          inputPlaceholder="your.email@example.com"
          buttonText="Subscribe"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=0ncxuq"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBasic
          columns={[
            { title: "About", items: [{ label: "Our Mission", href: "#about" }, { label: "Meet the Team", href: "#" }, { label: "Careers", href: "#" }] },
            { title: "Support", items: [{ label: "Donate", href: "#" }, { label: "Volunteer", href: "#" }, { label: "Contact", href: "#contact" }] },
            { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
          ]}
          leftText="© 2024 PawsAdopt. All rights reserved."
          rightText="Designed with compassion."
        />
      </div>
    </>
  );
}
