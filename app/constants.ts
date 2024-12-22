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
    since: "Sep 2022 - present",
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
          "Developed React Native SDK for comprehensive Forex card management for IDFC bank app.",
          "Implemented core exchange rate management functionality.",
        ],
      },
      {
        title: "Account Aggregator Portal",
        bullets: [
          "Engineered end-to-end React web application for financial data aggregation.",
          "Implemented WebSocket communication with bank servers and developed a sophisticated multi-bank consent mechanism with OTP verification.",
        ],
      },
    ],
  },
];
