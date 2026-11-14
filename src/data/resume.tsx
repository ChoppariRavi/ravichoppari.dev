import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Ravi Choppari",
  initials: "RC",
  url: "https://ravichoppari.dev",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/Hyderabad,+Telangana",
  description:
    "Senior Full-Stack Engineer & Lead UI Architect (14+ yrs) specializing in Next.js, Micro-Frontends, Conversational AI, and zero-latency web apps.",
  summary:
    "Seasoned Senior Full-Stack Engineer & Lead Architect with over 14 years of experience in UI/UX architecture, MERN/MEAN stacks, and Enterprise Java applications[cite: 3]. I specialize in digital modernization, AI-powered code refactoring, and scalable Micro-frontend ecosystems using Module Federation[cite: 3]. Available for **fractional architecture and high-performance web sprints (10–15 hrs/week async)**.",
  avatarUrl: "",
  skills: [
    { name: "React / React Native", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Java / Spring Boot", icon: Java },
    { name: "Python", icon: Python },
    { name: "Docker", icon: Docker },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@ravichoppari.dev",
    tel: "+91 703-669-4802",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ChoppariRavi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "mailto:hello@ravichoppari.dev",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "Email",
        url: "mailto:hello@ravichoppari.dev",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://smartholdpoker.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:hello@ravichoppari.dev",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Verizon",
      href: "https://www.verizon.com",
      badges: ["Lead Architect", "Micro-Frontends"],
      location: "Hyderabad / USA",
      title: "Senior Software Engineer / Lead Architect",
      logoUrl: "",
      start: "May 2021",
      end: "Present",
      description:
        "Spearheaded end-to-end digital modernization of Visible.com from legacy monoliths to a modular Next.js/React ecosystem, improving Time to Interactive (TTI) by 60% and reducing technical debt by 30% via AI-assisted refactoring[cite: 4]. Architected Module Federation micro-frontends for 99.9% uptime and engineered an omnichannel Salesforce Service Cloud & Dialogflow CX ecosystem with React Native (85% iOS/Android code reuse) and GCP BigQuery analytics[cite: 4].",
    },
    {
      company: "Copart India Technology Center",
      badges: ["Team Lead"],
      href: "https://www.copart.com",
      location: "Hyderabad, India",
      title: "Senior Developer / Lead",
      logoUrl: "",
      start: "Sep 2018",
      end: "May 2021",
      description:
        "Directed planning, architecture, and global rollout of yard management portals across the USA, Spain, and Germany[cite: 4]. Managed a cross-functional team of 12 engineers building scalable applications with React.js, Redux, Webpack, Ruby, MariaDB, and SQL while championing Test-Driven Development (TDD)[cite: 4].",
    },
    {
      company: "Infosys",
      href: "https://www.infosys.com",
      badges: ["Full-Stack"],
      location: "Hyderabad, India",
      title: "Developer / Full-Stack Engineer",
      logoUrl: "",
      start: "Sep 2016",
      end: "Sep 2018",
      description:
        "Developed enterprise telecom infrastructure solutioning portals using AngularJS, React.js, Redux, Java Spring Boot, and MongoDB[cite: 4]. Refactored critical modules into responsive, modular components achieving 90%+ unit test coverage[cite: 4].",
    },
    {
      company: "SPsoft, C&K Managements & KEENTECH",
      href: "https://ravichoppari.dev",
      badges: ["Enterprise Web"],
      location: "Hyderabad, India",
      title: "Software Developer",
      logoUrl: "",
      start: "Jan 2012",
      end: "Aug 2016",
      description:
        "Built product-based MVC student management systems (AngularJS), accessible global e-learning platforms for The World Bank and IIRS (Indian Institute of Remote Sensing), and interactive gamified corporate training modules for Aditya Birla Group[cite: 4].",
    },
  ],
  education: [
    {
      school: "Jawaharlal Nehru Technological University (JNTU)",
      href: "https://jntuh.ac.in",
      degree: "Bachelor of Engineering (B.E.) in Electronics & Communication[cite: 3]",
      logoUrl: "",
      start: "2006",
      end: "2010",
    },
  ],
  projects: [
    {
      title: "Smart Hold Poker — 9/6 GTO Trainer",
      href: "https://smartholdpoker.com",
      dates: "2026 - Present",
      active: true,
      description:
        "Re-architected a Python/FastAPI probability solver into a zero-backend, 100% client-side TypeScript & Next.js combinatorial engine. Evaluates all 32 hold permutations against a 47-card deck in under 3ms with 0.00 Cumulative Layout Shift (CLS) and $0/month runtime server cost.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Combinatorics Engine",
        "Vercel Edge",
      ],
      links: [
        {
          type: "Live App",
          href: "https://smartholdpoker.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "EV Calculator",
          href: "https://smartholdpoker.com/calculator/video-poker-expected-value",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Visible.com Micro-Frontend Modernization",
      href: "https://www.visible.com",
      dates: "2021 - Present",
      active: true,
      description:
        "Led architectural transition from legacy monolithic front-ends to decentralized Next.js & Module Federation micro-frontends[cite: 4]. Achieved 60% faster Time to Interactive (TTI), 30% reduction in technical debt, and 99.9% production availability[cite: 4].",
      technologies: [
        "Next.js",
        "React.js",
        "Module Federation",
        "TypeScript",
        "Cursor AI",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Omnichannel Conversational AI & Support SDK",
      href: "https://ravichoppari.dev",
      dates: "2022 - Present",
      active: true,
      description:
        "Architected an enterprise customer support ecosystem integrating Dialogflow CX, Salesforce Service Cloud, custom Lightning Web Components (LWC), and a unified React Native SDK with 85% cross-platform logic sharing[cite: 4].",
      technologies: [
        "React Native",
        "Dialogflow CX",
        "Salesforce LWC",
        "GCP BigQuery",
        "Node.js",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;