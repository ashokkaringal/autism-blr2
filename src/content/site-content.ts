export const programs = [
  {
    id: "early-intervention",
    titleKey: "early.title",
    ageKey: "early.age",
    bodyKey: "early.body",
    image: "/images/early-intervention.jpg",
    imageAlt: "Calm early intervention learning space with soft mats and low shelves",
  },
  {
    id: "special-education",
    titleKey: "special.title",
    ageKey: "special.age",
    bodyKey: "special.body",
    image: "/images/special-education.jpg",
    imageAlt: "Structured special education classroom with visual schedule board",
  },
  {
    id: "therapy-programs",
    titleKey: "therapy.title",
    ageKey: "therapy.age",
    bodyKey: "therapy.body",
    image: "/images/ot-room.jpg",
    imageAlt: "Occupational therapy room with fine-motor activity materials",
  },
  {
    id: "life-skills",
    titleKey: "life.title",
    ageKey: "life.age",
    bodyKey: "life.body",
    image: "/images/life-skills.jpg",
    imageAlt: "Life-skills training kitchen corner in a school setting",
  },
  {
    id: "parent-coaching",
    titleKey: "parent.title",
    ageKey: "parent.age",
    bodyKey: "parent.body",
    image: "/images/parent-workshop.jpg",
    imageAlt: "Parent coaching workshop room arranged for a calm group session",
  },
] as const;

export const programOptions = [
  { value: "early-intervention", label: "Early Intervention (2–6)" },
  { value: "special-education", label: "Special Education (6–18)" },
  { value: "therapy-services", label: "Therapy Services" },
  { value: "life-skills", label: "Life Skills & Vocational Training" },
  { value: "parent-coaching", label: "Parent Coaching" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const hiringRoles = [
  "Special Educator",
  "ABA Therapist",
  "Speech Therapist",
  "Occupational Therapist",
  "Shadow Teacher",
  "Parent Coach",
  "Behavior Interventionist",
] as const;

export const siteImages = {
  hero: {
    src: "/images/hero-classroom.jpg",
    alt: "Calm autism-friendly classroom with soft light and organized learning materials",
  },
  welcome: {
    src: "/images/school-reception.jpg",
    alt: "Welcoming school reception with soft seating and warm natural light",
  },
  sensory: {
    src: "/images/sensory-room.jpg",
    alt: "Sensory integration room with soft lighting and calming equipment",
  },
  speech: {
    src: "/images/speech-therapy.jpg",
    alt: "Speech therapy space with picture cards and communication supports",
  },
  outdoor: {
    src: "/images/outdoor-play.jpg",
    alt: "Shaded outdoor play area at an inclusive school campus",
  },
} as const;

export const galleryItems = [
  {
    id: "therapy",
    categoryKey: "therapy",
    label: "Therapy room",
    image: "/images/ot-room.jpg",
    alt: "Occupational therapy room with activity tables and equipment",
  },
  {
    id: "sensory",
    categoryKey: "sensory",
    label: "Sensory gym",
    image: "/images/sensory-room.jpg",
    alt: "Sensory gym with soft lighting and calming equipment",
  },
  {
    id: "classroom",
    categoryKey: "classroom",
    label: "Classroom activities",
    image: "/images/special-education.jpg",
    alt: "Structured classroom ready for learning activities",
  },
  {
    id: "outdoor",
    categoryKey: "outdoor",
    label: "Outdoor play",
    image: "/images/outdoor-play.jpg",
    alt: "Outdoor play area with trees and soft play equipment",
  },
  {
    id: "workshops",
    categoryKey: "workshops",
    label: "Parent workshops",
    image: "/images/parent-workshop.jpg",
    alt: "Parent workshop room prepared for a coaching session",
  },
  {
    id: "family",
    categoryKey: "family",
    label: "Teacher and family interaction",
    image: "/images/school-reception.jpg",
    alt: "Welcoming school reception for family visits",
  },
] as const;

export const blogPosts = [
  {
    slug: "understanding-autism",
    title: "Understanding Autism",
    summary: "A calm introduction for parents beginning their learning journey.",
    topic: "autism",
    body: [
      "Autism is a neurodevelopmental difference that affects communication, sensory processing, and social interaction in unique ways for each child.",
      "Early, structured support and family partnership can help children build skills at their own pace.",
      "This article is informational and is not a clinical diagnosis or treatment plan.",
    ],
  },
  {
    slug: "sensory-needs-at-home",
    title: "Sensory Needs at Home",
    summary: "Practical, low-stress ideas for sensory-friendly home routines.",
    topic: "sensory",
    body: [
      "Many children benefit from predictable sensory breaks, quieter spaces, and clear visual cues.",
      "Start with one change at a time and notice what helps your child feel settled.",
      "Ask your therapy team before trying strategies that may not fit your child’s plan.",
    ],
  },
  {
    slug: "bangalore-support-resources",
    title: "Bangalore Autism Support Resources",
    summary: "A starter list of local support themes for Bangalore families.",
    topic: "bangalore",
    body: [
      "Local families often look for schools, therapy centres, parent groups, and assessment pathways in Bangalore.",
      "Verify current contact details and service claims directly with each organization.",
      "Our team can help you understand what questions to ask during a school visit.",
    ],
  },
] as const;

export const socialStories = [
  {
    slug: "my-first-day",
    title: "My First Day at School",
    steps: [
      {
        title: "I arrive at school",
        text: "I walk into school with my parent or caregiver. The space feels calm.",
      },
      {
        title: "I hang my bag",
        text: "I put my bag in my place. I know where my things go.",
      },
      {
        title: "I meet my teacher",
        text: "My teacher greets me. I can wave, smile, or say hello.",
      },
      {
        title: "I follow my schedule",
        text: "I look at my visual schedule so I know what comes next.",
      },
    ],
  },
  {
    slug: "meeting-my-teacher",
    title: "Meeting My Teacher",
    steps: [
      {
        title: "My teacher says hello",
        text: "My teacher uses a calm voice and looks friendly.",
      },
      {
        title: "I can take my time",
        text: "It is okay if I need a moment before I respond.",
      },
      {
        title: "We look at pictures",
        text: "We may use pictures or objects to help us talk.",
      },
      {
        title: "I know I am safe",
        text: "My teacher helps me feel safe at school.",
      },
    ],
  },
  {
    slug: "therapy-time",
    title: "Therapy Time",
    steps: [
      {
        title: "It is therapy time",
        text: "I go to the therapy room when it is on my schedule.",
      },
      {
        title: "We warm up",
        text: "We start with a short sensory or movement activity.",
      },
      {
        title: "We practice skills",
        text: "We practice communication, movement, or learning tasks.",
      },
      {
        title: "We finish together",
        text: "We review what we did, then I return to my next activity.",
      },
    ],
  },
] as const;

export const visualSchedules = [
  {
    id: "school-day",
    title: "School day",
    steps: [
      { id: "arrival", label: "Arrival", icon: "door" },
      { id: "circle", label: "Circle Time", icon: "users" },
      { id: "therapy", label: "Therapy", icon: "heart" },
      { id: "snack", label: "Snack", icon: "apple" },
      { id: "play", label: "Play", icon: "smile" },
      { id: "home", label: "Home", icon: "home" },
    ],
  },
] as const;

export const testimonials = [
  {
    id: "1",
    quote:
      "The routines helped our child feel safer. We always knew what to expect.",
    attribution: "Parent in Bangalore (placeholder)",
  },
  {
    id: "2",
    quote:
      "Therapists explained goals in plain language and partnered with us at home.",
    attribution: "Parent (placeholder — pending approval)",
  },
] as const;

export const teamCategories = [
  "Special educators",
  "Speech therapists",
  "Occupational therapists",
  "ABA therapists",
  "Shadow teachers",
  "Parent coaches",
] as const;
