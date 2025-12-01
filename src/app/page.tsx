"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Zap, Shield, Lock, Key, Eye, DollarSign, Sparkles, Users, Star, HelpCircle, Linkedin, Twitter, Github, Globe } from 'lucide-react';

export default function CryptoPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="CryptoVault"
          navItems={[
            { name: "Platform", id: "platform" },
            { name: "Security", id: "security" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" }
          ]}
          button={{
            text: "Get Started",
            href: "contact"
          }}
          className="rounded-full backdrop-blur-sm border border-accent/20"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="The Premium Crypto Trading Platform"
          description="Secure, fast, and intuitive digital asset management for professional traders and institutional investors"
          tag="Next Generation Trading"
          tagIcon={Zap}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584344183-ulj9gcgv.jpg",
              imageAlt: "Bitcoin and blockchain technology"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584344980-hsq4a20r.jpg",
              imageAlt: "Secure digital wallet"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584345805-72iqqh3v.jpg",
              imageAlt: "Trading dashboard"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584346609-1wz0urxy.jpg",
              imageAlt: "Blockchain network"
            }
          ]}
          buttons={[
            {
              text: "Start Trading",
              href: "contact"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="platform" data-section="platform">
        <AboutPhoneTimeline
          tag="Platform Features"
          title="Experience the Future of Trading"
          description="Our advanced platform combines institutional-grade security with user-friendly interfaces, giving you complete control over your digital assets with real-time market data and lightning-fast execution speeds."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584347907-u91qg2va.jpg",
            imageAlt: "Trading interface mobile app"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584348441-lyvbi435.jpg",
            imageAlt: "Wallet management dashboard"
          }}
          buttons={[
            {
              text: "Explore Features",
              href: "#platform"
            },
            {
              text: "Download App",
              onClick: () => console.log('download')
            }
          ]}
        />
      </div>

      <div id="security" data-section="security">
        <FeatureCardTwo
          title="Security First Approach"
          description="Enterprise-level protection for your assets"
          tag="Security"
          tagIcon={Shield}
          features={[
            {
              title: "Military-Grade Encryption",
              description: "256-bit SSL encryption protects all your data in transit and at rest",
              icon: Lock
            },
            {
              title: "Multi-Signature Wallets",
              description: "Require multiple approvals for any transaction over set limits",
              icon: Key
            },
            {
              title: "Cold Storage Protection",
              description: "95% of user funds stored in offline cold wallets",
              icon: Shield
            },
            {
              title: "24/7 Monitoring",
              description: "Real-time threat detection and automated response systems",
              icon: Eye
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your trading needs"
          tag="Pricing Plans"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              price: "Free",
              name: "Starter",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "#"
                }
              ],
              features: [
                "Up to 5 trades per day",
                "Basic market data",
                "Email support",
                "Mobile app access"
              ]
            },
            {
              id: "pro",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$99/month",
              name: "Professional",
              buttons: [
                {
                  text: "Start Now",
                  href: "contact"
                },
                {
                  text: "Chat Sales",
                  href: "#"
                }
              ],
              features: [
                "Unlimited trades",
                "Advanced analytics",
                "Priority support",
                "API access",
                "Custom alerts"
              ]
            },
            {
              id: "enterprise",
              price: "Custom",
              name: "Enterprise",
              buttons: [
                {
                  text: "Contact Us",
                  href: "contact"
                },
                {
                  text: "Schedule Demo",
                  href: "#"
                }
              ],
              features: [
                "Dedicated account manager",
                "White-label solutions",
                "Custom integrations",
                "Institutional rates",
                "24/7 Premium support"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Leadership"
          description="Industry veterans with decades of combined experience in crypto and finance"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          members={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Founder & CEO",
              description: "Former head of trading at major crypto exchange with 15+ years in digital assets",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584349071-gmiyfxt6.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Chief Technology Officer",
              description: "Blockchain architect and security expert from leading fintech companies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584349751-o3505rxm.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Github,
                  url: "https://github.com"
                }
              ]
            },
            {
              id: "3",
              name: "Emily Watson",
              role: "Chief Operating Officer",
              description: "Operations leader scaling global fintech platforms to millions of users",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584350352-4aiqvo6k.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Globe,
                  url: "https://example.com"
                }
              ]
            },
            {
              id: "4",
              name: "David Park",
              role: "Chief Financial Officer",
              description: "Crypto economist and institutional market specialist with Harvard MBA",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584350930-1wwiwa2u.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Trusted by Industry Leaders"
          description="See what professional traders say about our platform"
          tag="Client Success"
          tagIcon={Star}
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "James Mitchell",
              role: "Portfolio Manager",
              company: "Quantum Capital",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584351668-v9shag45.jpg"
            },
            {
              id: "2",
              name: "Lisa Anderson",
              role: "Crypto Trader",
              company: "Digital Ventures",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584352420-67er8a8d.png"
            },
            {
              id: "3",
              name: "Robert Chang",
              role: "Hedge Fund Manager",
              company: "Future Assets",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584352925-cmr0txxk.jpg"
            },
            {
              id: "4",
              name: "Victoria Sterling",
              role: "Investment Director",
              company: "Elite Investments",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764584353666-6c3jutit.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our platform and services"
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How do I secure my account?",
              content: "We recommend enabling two-factor authentication via authenticator app, setting up a strong password, and using biometric login on mobile. We also support hardware wallet integration for maximum security."
            },
            {
              id: "2",
              title: "What are the trading fees?",
              content: "Trading fees start at 0.1% for makers and 0.15% for takers on our Professional plan. Enterprise clients receive custom rates. See our pricing page for complete fee schedule."
            },
            {
              id: "3",
              title: "How fast are withdrawals?",
              content: "Withdrawals are processed instantly for users with standard verification. Larger withdrawals may require additional verification and can take 24-48 hours for regulatory compliance."
            },
            {
              id: "4",
              title: "Is my cryptocurrency insured?",
              content: "Yes, we maintain $250M in crypto insurance through Lloyd's of London. Additionally, 95% of user funds are stored in cold storage wallets with multi-signature protection."
            },
            {
              id: "5",
              title: "Can I trade 24/7?",
              content: "Yes, crypto markets never close. Our platform operates 24/7/365, allowing you to trade at any time. Market data updates in real-time without interruption."
            },
            {
              id: "6",
              title: "What currencies are supported?",
              content: "We support Bitcoin, Ethereum, and 200+ other cryptocurrencies. Trading pairs include major fiat currencies (USD, EUR, GBP) and stablecoins (USDC, USDT, DAI)."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get Started Today"
          description="Join thousands of traders on the most advanced crypto platform. Fill out the form and our team will contact you within 24 hours."
          inputs={[
            {
              name: "fullName",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "company",
              type: "text",
              placeholder: "Company Name",
              required: false
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your trading needs and experience",
            rows: 4,
            required: true
          }}
          buttonText="Request Access"
          onSubmit={() => console.log('Form submitted')}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="CryptoVault"
          columns={[
            {
              items: [
                { label: "Platform", href: "platform" },
                { label: "Security", href: "security" },
                { label: "Pricing", href: "pricing" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Team", href: "team" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              items: [
                { label: "Support", href: "contact" },
                { label: "Documentation", href: "#" },
                { label: "API Docs", href: "#" }
              ]
            },
            {
              items: [
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Discord", href: "#" },
                { label: "LinkedIn", href: "https://linkedin.com" }
              ]
            },
            {
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}