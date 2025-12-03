import { time, timeStamp } from "console";
import { desc } from "framer-motion/client";
import { text } from "stream/consumers";

export const homeLinks = [
  {
    link: "/#",
    label: "features",
  },
  {
    link: "/#",
    label: "about",
  },
  {
    link: "/#",
    label: "support",
  },
  {
    link: "/#",
    label: "docs",
  },
];

export const cardPatternStyling = [
  {
    id: 1,
    style:
      "border-t-0 rounded-b-[12px] min-h-[100px] h-full row-span-2  col-span-2 col-start-1 row-start-1",
  },
  {
    id: 2,
    style:
      "border-t-0 rounded-b-[12px] min-h-[50px] h-full col-span-2 col-start-3 row-span-1 col-start-3 row-start-1",
  },
  {
    id: 3,
    style:
      "border-t-0 border-r-0 rounded-bl-[12px]  min-h-[100px] h-full row-span-2 col-span-1 col-start-5 row-start-1",
  },
  {
    id: 4,
    style:
      "rounded-[12px] min-h-[100px] h-full row-span-2 col-span-2 col-start-1 row-start-3",
  },
  {
    id: 5,
    style:
      "rounded-[12px] min-h-[100px] h-full row-span-2 col-span-2 col-start-3 row-start-2",
  },
  {
    id: 6,
    style:
      "rounded-l-[12px] min-h-[100px] h-full row-span-2 col-span-1 col-start-5 row-start-3 border-r-0",
  },
  {
    id: 7,
    style:
      "rounded-[12px] min-h-[50px] h-full row-span-1 col-span-2 col-start-3 row-start-4",
  },
  {
    id: 8,
    style:
      "rounded-t-[12px] min-h-[50px] h-full row-span-2 col-span-2 col-start-1 row-start-5",
  },
  {
    id: 9,
    style:
      "rounded-t-[12px] min-h-[50px] h-full row-span-2 col-span-2 col-start-3 row-start-5",
  },
  {
    id: 10,
    style:
      "rounded-t-[12px] min-h-[50px] h-full row-span-2 col-span-2 col-start-5 row-start-5",
  },
];

export const notificationItems = [
  {
    id: 1,
    title: "New version deployed successfully! 🚀",
    description:
      "Your environment is now running v2.3 with improved response times and better logging.",
  },
  {
    id: 2,
    title: "Security update installed 🔐",
    description:
      "Session handling and token authentication have been improved for safer API requests.",
  },
  {
    id: 3,
    title: "New AI model integrated 🤖",
    description:
      "Your assistant now provides context-aware code suggestions and smarter troubleshooting.",
  },
  {
    id: 4,
    title: "System maintenance completed ✅",
    description:
      "All servers are back online. Performance and stability have been optimized.",
  },
];

export const quickSuggestions = [
  "How do I authenticate requests?",
  "Error handling for 404s",
  "Show me pagination examples",
];

export const companyLogos = [
  { name: "Luminous", src: "/assets/images/companyLogo.svg" },
  { name: "Acme Corp", src: "/assets/images/companyLogo1.svg" },
  { name: "Galileo", src: "/assets/images/companyLogo2.svg" },
  { name: "Epicurious", src: "/assets/images/companyLogo3.svg" },
  { name: "Nietzsch", src: "/assets/images/companyLogo4.svg" },
];

export const faqContents = [
  {
    title: "Authentication",
    query: "168 queries",
    faqs: [
      {
        question: "How do I authenticate?",
        percentage: 12,
      },
      {
        question: "Rate limit errors",
        percentage: 8,
      },
      {
        question: "Webhook setup",
        percentage: 4,
      },
      {
        question: "Pagination examples",
        percentage: 15,
      },
    ],
  },
  {
    title: "Integration",
    query: "20 queries",
    faqs: [
      {
        question: "How do I integrate webhooks?",
        percentage: 10,
      },
      {
        question: "API endpoints",
        percentage: 7,
      },
      {
        question: "SDK installation",
        percentage: 5,
      },
      {
        question: "OAuth flow",
        percentage: 13,
      },
    ],
  },
  {
    title: "Best practices",
    query: "12 queries",
    faqs: [
      {
        question: "Caching strategies",
        percentage: 9,
      },
      {
        question: "Error handling",
        percentage: 6,
      },
      {
        question: "Security guidelines",
        percentage: 11,
      },
      {
        question: "Performance optimization",
        percentage: 14,
      },
    ],
  },
  {
    title: "Errors",
    query: "18 queries",
    faqs: [
      {
        question: "400 Bad Request",
        percentage: 16,
      },
      {
        question: "401 Unauthorized",
        percentage: 12,
      },
      {
        question: "429 Rate Limit",
        percentage: 8,
      },
      {
        question: "500 Server Error",
        percentage: 5,
      },
    ],
  },
];

export const complaintsImages = [
  {
    id: 1,
    src: "/assets/images/gdpr.svg",
    alt: "gdpr",
  },
  {
    id: 2,
    src: "/assets/images/iso.svg",
    alt: "soc-2",
  },
  {
    id: 3,
    src: "/assets/images/hipaa.svg",
    alt: "hipaa",
  },
];

export const encryptionSteps = [
  { id: 1, text: "AES-256-GCM encryption" },
  { id: 2, text: "Automatic key rotation" },
  { id: 3, text: "HSM-backed keys" },
];

export const auditLogs = [
  {
    id: 1,
    action: "Real-time logging",
  },
  { id: 2, action: "Tamper-proof records" },
  {
    id: 3,
    action: "SIEM integration",
  },
];

export const auditSteps = [
  {
    id: 1,
    mainIcon: "/assets/icons/user.svg",
    bgIcon: "/assets/icons/log-in-03.svg",
    action: "Login:",
    desc: "Logged in",
    timeStamp: "12:45pm",
    text: "by john@company.com",
  },
  {
    id: 2,
    mainIcon: "/assets/icons/book-stack.svg",
    bgIcon: "/assets/icons/code-01.svg",
    action: "Request:",
    desc: "ap1/v1/users",
    timeStamp: "01:17pm",
    text: "sent to",
  },
  {
    id: 3,
    mainIcon: "/assets/icons/globe.svg",
    bgIcon: "/assets/icons/shield-03.svg",
    action: "System:",
    desc: "security-vpc-03",
    timeStamp: "02:45pm",
    text: "logs synced to SIEM node",
  },
  {
    id: 4,
    mainIcon: "/assets/icons/framer.svg",
    bgIcon: "/assets/icons/shield-off.svg",
    action: "Audit:",
    desc: "no tampering detected",
    timeStamp: "03:15pm",
    text: "integrity hash verified",
  },
];

export const socialHandles = [
  {
    name: "facebook",
    link: "#",
    imgUrl: "/assets/icons/facebook.svg",
  },
  {
    name: "Twitter",
    link: "#",
    imgUrl: "/assets/icons/x.svg",
  },
  {
    name: "instagram",
    link: "#",
    imgUrl: "/assets/icons/instagram.svg",
  },
  {
    name: "linkedin",
    link: "#",
    imgUrl: "/assets/icons/linkedin.svg",
  },
  {
    name: "youtube",
    link: "#",
    imgUrl: "/assets/icons/youtube.svg",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      {
        name: "API documentation",
        url: "#",
      },
      {
        name: "Changelog automation",
        url: "#",
      },
      {
        name: "Audit & compliance",
        url: "#",
      },
      {
        name: "Integration monitoring",
        url: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog",
        url: "#",
      },
      {
        name: "Developer docs",
        url: "#",
      },
      {
        name: "Status page",
        url: "#",
      },
      {
        name: "Help center",
        url: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About",
        url: "#",
      },
      {
        name: "Careers",
        url: "#",
      },
      {
        name: "Security",
        url: "#",
      },
      {
        name: "Contact",
        url: "#",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Privacy policy",
        url: "#",
      },
      {
        name: "Terms of service",
        url: "#",
      },
      {
        name: "Data protection",
        url: "#",
      },
    ],
  },
];
