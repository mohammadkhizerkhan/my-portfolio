import { icons } from "@/components/icons";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#opensource" },
  { label: "Education", href: "#education" },
];

export const socialLinks = [
  {
    href: "https://github.com/mohammadkhizerkhan",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/mohammadkhizer-khan/",
    label: "LinkedIn",
  },
  {
    href: "https://x.com/khizerkhan_07",
    label: "TwitterX",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Java Spring Boot",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "HTML",
  "CSS",
  "Grafana",
  "Prometheus",
  "Git",
];

export const experienceContent = [
  {
    icon: icons.m2p,
    name: "M2P Fintech",
    since: "Sep 2022 - July 2025",
    projects: [
      {
        title: "Forex Prepaid Multi-Tenant Product (Full-Stack Development)",
        bullets: [
          "Implemented dynamic form layouts using schema-driven architecture for validation, leveraging React with RTK-query to optimize API handling, global state management, and caching strategies in frontend.",
          "Developed business logic and comprehensive REST APIs to onboard banks and issue cards with risk checks, seamlessly integrating with core banking system APIs.",
          "Developed a custom Java logger to mask PII data in production, ensuring customer identity data is not exposed.",
          "Enhanced system reliability with Prometheus and Grafana, tracking business failures, customer onboardings, transaction failures, and application performance, while adding alerts for critical production issues.",
          "Conducted load testing using k6 and implemented TLS security for MongoDB microservices.",
          "Created analytical reports enabling banks to verify records and reconcile transaction failures.",
          "Mentored junior and intern developers, providing code reviews, technical guidance, actively contributed to team growth byconducting 25+ technical interviews during hiring drives."
        ],
      },
      {
        title: "VISAPAY",
        bullets: [
          "Developed cash-in/cash-out transactions with secure code validation from app, Ensured real-time delivery of SMS/email/in-app notifications by orchestrating asynchronous Kafka based message pipelines to a centralized notification service",
          "Enabled onboarding of external bank accounts by implementing custom fuzzy name matching, dKYC validations, and support foraccount add/update/close workflows, enriching the platform’s interoperability.",
          "Led successful soundbox integration by implementing AES-GCM encryption and mTLS handshake for merchant transaction sound alerts, improving user confidence at merchant outlets.",
          "Automated three-phase consumer closure for stale accounts using Spring Batch with scheduled cron jobs, ensuring performance by chunk-wise processing and delivering final closure reports via email to clients.",
          "Enabled end-to-end mutual TLS (mTLS) integration between VisaPay microservices and external partners like African banks to eliminate MITM vulnerabilities and secure all communication. ensuring PCI DSS compliance.",
          "Integrated Visa core APIs using ML encryption, securely handling API keys, tokens, and ML keys obtained from the Visa Developer Portal for secure transaction execution.",
          "Built VisaPay Agent Portal using Next.js with server-side rendering, enabling bank agents to efficiently handle consumer management."
        ],
      },
      {
        title: "SBIC 'Splito' React Native BNPL Application",
        bullets: [
          "Implemented core features: customer onboarding, card bill payment with Bill Desk SDK, reward tracking, MPIN authentication with reset functionality.",
          "Enhanced security via native Android SDK integration through bridge architecture, SSL pinning, and SIM card event monitoring.",
          "Developed reusable core components, such as debounced slider for handling EMI amounts, ensuring a smooth UX.",
        ],
      },
      {
        title: "IDFC Bank Forex Card Management SDK",
        bullets: [
          "Developed React Native SDK for Forex card management, enabling multi-currency wallet transfers (e.g., CDF → USD → AED), transaction history, and dispute management, designed for seamless integration into the parent app.",
        ],
      },
      {
        title: "Account Aggregator Portal",
        bullets: [
          "Built Account Aggregator Portal from scratch using React, implementing WebSocket-based communication with banks, OTP-driven multi-bank consent flow, and complex state management for dynamic account linking, selection, and consent generation.",
        ],
      },
    ],
  },
];
