export const scheduleDays = [
  {
    id: 1,
    title: "Day 1",
    subtitle: "Kickoff & Cloud/Web3",
    date: "October 16, 2026",
    theme: "Cloud Infrastructures, Distributed Web & Global Kickoff"
  },
  {
    id: 2,
    title: "Day 2",
    subtitle: "AI Hack & System Design",
    date: "October 17, 2026",
    theme: "24-Hour Hackathon Sprint, LLMs, Agents & System Architecture"
  },
  {
    id: 3,
    title: "Day 3",
    subtitle: "Code Finals & Awards",
    date: "October 18, 2026",
    theme: "Hackathon Pitches, Grand Finals, Networking & Award Gala"
  }
];

export const filterCategories = [
  "All",
  "Keynote",
  "Workshop",
  "Hackathon",
  "Competition",
  "Talk",
  "Gaming/Fun"
];

export const scheduleEvents = [
  // DAY 1
  {
    id: "s1-1",
    day: 1,
    category: "Keynote",
    level: "All Levels",
    time: "09:00 AM - 10:30 AM",
    title: "Grand Opening & Keynote: The Future of Developer Ecosystems",
    description: "Inauguration by GDG Leads & University Officials followed by a visionary keynote on AI-driven software development, modern open ecosystems, and community innovation.",
    speaker: "Dr. Ananya Patnaik",
    speakerRole: "Lead Cloud Architect & GDG Mentor • Google Developer Student Clubs",
    speakerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    location: "Main Auditorium (Auditorium 101)",
    trackColor: "red",
    popular: true
  },
  {
    id: "s1-2",
    day: 1,
    category: "Workshop",
    level: "Intermediate",
    time: "11:00 AM - 01:00 PM",
    title: "Building Production Cloud Systems with Google Cloud & Kubernetes",
    description: "Deep dive into multi-region deployments, autoscaling containerized workloads with GKE, and best practices for cost-optimized cloud native architecture.",
    speaker: "Rahul Sen",
    speakerRole: "Google Developer Expert (Cloud) & Principal SRE",
    speakerAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    location: "Tech Lab Alpha (C-Block 304)",
    trackColor: "blue",
    popular: false
  },
  {
    id: "s1-3",
    day: 1,
    category: "Talk",
    level: "All Levels",
    time: "02:00 PM - 03:15 PM",
    title: "Architecting Ultra-Fast Web Applications: Vite, Edge & WebAssembly",
    description: "Learn how the modern web stack eliminates latency with edge compute, streaming SSR, and compiling compute-heavy logic to WebAssembly.",
    speaker: "Sneha Mohapatra",
    speakerRole: "Frontend Architect & Web Standards Advocate",
    speakerAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    location: "Seminar Hall 2",
    trackColor: "yellow",
    popular: false
  },
  {
    id: "s1-4",
    day: 1,
    category: "Competition",
    level: "All Levels",
    time: "03:45 PM - 05:30 PM",
    title: "Speed Coding Arena: Algorithmic Duel 2026",
    description: "High-octane competitive programming contest with live leaderboard, lightning rounds, and instant swag rewards for top algorithmic problem solvers.",
    speaker: "GDG Competitive Programming Cell",
    speakerRole: "Moderated by CodeChef & LeetCode Campus Leads",
    speakerAvatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80",
    location: "Central Computer Center 1 & 2",
    trackColor: "green",
    popular: true
  },
  {
    id: "s1-5",
    day: 1,
    category: "Gaming/Fun",
    level: "All Levels",
    time: "06:00 PM - 07:30 PM",
    title: "Developer Networking Lounge & Retro Cyber Arcade",
    description: "Connect with mentors, peers, and sponsor representatives over snacks, live retro arcade competitions, and tech trivia challenges.",
    speaker: "Community Experience Team",
    speakerRole: "GDG SOA Organizers",
    speakerAvatar: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=200&q=80",
    location: "Open Atrium / Student Recreation Arena",
    trackColor: "blue",
    popular: false
  },

  // DAY 2
  {
    id: "s2-1",
    day: 2,
    category: "Keynote",
    level: "All Levels",
    time: "09:00 AM - 10:15 AM",
    title: "Autonomous AI Agents & Multimodal Intelligence in 2026",
    description: "Explore the bleeding edge of foundation models, Gemini API capabilities, tool-augmented reasoning, and orchestrating cooperative agent swarms.",
    speaker: "Priya Sharma",
    speakerRole: "Staff AI Research Engineer & Gemini Ecosystem Lead",
    speakerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    location: "Main Auditorium (Auditorium 101)",
    trackColor: "blue",
    popular: true
  },
  {
    id: "s2-2",
    day: 2,
    category: "Hackathon",
    level: "All Levels",
    time: "10:30 AM (24-Hour Sprint Start)",
    title: "24-Hour Hack Sprint: Problem Statements Revealed & Coding Begins",
    description: "The marquee hackathon begins! 1,500+ developers brainstorm, prototype, and build production MVPs across AI, Cloud, HealthTech, and Web3 with 24h mentorship.",
    speaker: "GDG Hackathon Jury & Mentors",
    speakerRole: "Supported by Google Cloud, GitHub & Postman",
    speakerAvatar: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=200&q=80",
    location: "Convention Hall & Innovation Arena",
    trackColor: "red",
    popular: true
  },
  {
    id: "s2-3",
    day: 2,
    category: "Workshop",
    level: "Advanced",
    time: "01:30 PM - 03:30 PM",
    title: "API-First Architecture & Testing with Postman & Microservices",
    description: "Hands-on session mastering API design contracts, automated mocks, security assertions, and CI/CD test automation pipelines with Postman Collections.",
    speaker: "Aman Verma",
    speakerRole: "Head of Developer Ecosystem • Postman",
    speakerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    location: "Lab Beta (ITER Research Wing)",
    trackColor: "yellow",
    popular: false
  },
  {
    id: "s2-4",
    day: 2,
    category: "Talk",
    level: "Intermediate",
    time: "04:30 PM - 05:45 PM",
    title: "High-Scale System Design: Surviving 10 Million Requests/Sec",
    description: "Case studies from big-tech engineering teams on distributed caching, partition tolerance, database sharding, and resilience under traffic spikes.",
    speaker: "Vikramaditya Roy",
    speakerRole: "Principal Architect, Distributed Systems",
    speakerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    location: "Main Auditorium",
    trackColor: "green",
    popular: true
  },
  {
    id: "s2-5",
    day: 2,
    category: "Gaming/Fun",
    level: "All Levels",
    time: "11:00 PM - 12:30 AM",
    title: "Midnight Energy Surge: Music, Pizza & Lightning Mini-Hacks",
    description: "Late-night refreshments, gaming showdowns, and live code golf rounds to keep hackathon participants energized and inspired.",
    speaker: "GDG Student Activities Board",
    speakerRole: "Host team",
    speakerAvatar: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=200&q=80",
    location: "Innovation Arena & Cafeteria",
    trackColor: "yellow",
    popular: false
  },

  // DAY 3
  {
    id: "s3-1",
    day: 3,
    category: "Hackathon",
    level: "All Levels",
    time: "10:30 AM",
    title: "Hack Sprint Code Freeze & Submission Deadline",
    description: "Official submission cutoff on the portal! Repositories locked, demo video links submitted, and preliminary evaluation commences.",
    speaker: "Judging Panel & Mentors",
    speakerRole: "Senior Engineers & Venture Mentors",
    speakerAvatar: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=200&q=80",
    location: "Hackathon Portal & Main Stage",
    trackColor: "red",
    popular: true
  },
  {
    id: "s3-2",
    day: 3,
    category: "Competition",
    level: "All Levels",
    time: "11:30 AM - 02:00 PM",
    title: "Top 10 Finalist Project Pitches & Live Demos",
    description: "The top 10 hackathon teams present their live working solutions on the main stage in front of industry judges, VCs, and the full audience.",
    speaker: "Top Finalist Teams & Grand Jury",
    speakerRole: "Open to All Attendees",
    speakerAvatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80",
    location: "Main Auditorium (Auditorium 101)",
    trackColor: "blue",
    popular: true
  },
  {
    id: "s3-3",
    day: 3,
    category: "Keynote",
    level: "All Levels",
    time: "03:00 PM - 04:30 PM",
    title: "Grand Award Ceremony, Swag Distribution & Closing Gala",
    description: "Declaration of the Hack Sprint winners (₹1,50,000+ Prize Pool), track bounties, distribution of exclusive GDG swag packages, and official closing celebrations.",
    speaker: "University Leadership & GDG Leads",
    speakerRole: "Siksha 'O' Anusandhan & Google Developer Group",
    speakerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    location: "Main Auditorium (Auditorium 101)",
    trackColor: "green",
    popular: true
  }
];
