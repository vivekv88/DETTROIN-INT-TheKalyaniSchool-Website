export const siteConfig = {
  name: "The Kalyani School",
  tagline: "The Happy Place",
  subTagline: "Driven by Students, Guided by Experts",
  phone: ["+91 8149117666", "+91 8149118666", "+91 8149119666"],
  email: "info@thekalyanischool.edu.in",
  address: "Manjari (Budruk), Near Hadapsar, Pune 412307.",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21402.445490243!2d73.95539580222288!3d18.508393844859864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c266d7bffd79%3A0xe25dff81976e4c90!2sThe%20Kalyani%20School%20-%20CBSE%20School%20In%20Pune!5e0!3m2!1sen!2sin!4v1742470736173!5m2!1sen!2sin",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const awards = [
  {
    title: "QS I-GAUGE",
    description:
      "The Kalyani School has achieved a DIAMOND+ level in the QS I-GAUGE rating for Indian schools.",
  },
  {
    title: "Education World: C-Fore Rankings",
    description:
      "Ranked 1st in Pune amongst all CBSE schools for following the National Curriculum.",
  },
  {
    title: "National Green School Rankings",
    description:
      "Honoured with the Platinum Category of The Climate Project Foundation's Green Campus Programme Award, 2025.",
  },
  {
    title: "Education World India School Rankings",
    description:
      "Ranked 1st in Pune & 6th in Maharashtra under the CO-ED Day Schools Category, 2023-24.",
  },
  {
    title: "IC3 Institute",
    description: "Awarded accreditation level Grade A+ by the IC3 Institute.",
  },
];

export const services = [
  {
    title: "Pedagogy & Teaching Methodology",
    description:
      "A CBSE-aligned approach that blends structured curriculum with experiential, student-led learning.",
    href: "/services#pedagogy",
  },
  {
    title: "Pre-Primary School",
    description:
      "A nurturing first step into formal education, built around play, curiosity, and confidence.",
    href: "/services#pre-primary",
  },
  {
    title: "Primary School",
    description:
      "Strong foundations in literacy, numeracy, and inquiry through an engaging, activity-rich classroom.",
    href: "/services#primary",
  },
  {
    title: "Middle School",
    description:
      "Deepened subject exploration paired with growing independence and critical thinking.",
    href: "/services#middle",
  },
  {
    title: "Secondary School",
    description:
      "Rigorous academics preparing students for board examinations and future pathways.",
    href: "/services#secondary",
  },
  {
    title: "Sr. Secondary School",
    description:
      "Stream specialisation with dedicated mentorship for competitive exams and higher education.",
    href: "/services#sr-secondary",
  },
];

export const quickHighlights = [
  {
    title: "Mission, Vision & Core Values",
    description: "The principles that guide every classroom and every decision.",
  },
  {
    title: "Environment & Community Outreach",
    description: "Sustainability and service woven into everyday school life.",
  },
  {
    title: "After School Activities",
    description: "Sport, art, and clubs that let every child find their thing.",
  },
  {
    title: "Bus Routes",
    description: "Safe, well-planned transport connecting every corner of Pune.",
  },
];

export const activities = [
  { title: "Founder's Day Celebration 2024" },
  { title: "Sports Day 2025" },
  { title: "Mad About Literature 2024" },
  { title: "Graduation Day 2025" },
  { title: "Sr. KG Graduation Day" },
  { title: "Investiture Ceremony 2024" },
];

export const aboutSections = [
  {
    title: "The Kalyani School",
    description:
      "A school built on the belief that every child, parent, and teacher should feel valued, heard, and inspired.",
  },
  {
    title: "Our Legacy",
    description:
      "Years of academic excellence rooted in the vision of a harmonious, stimulating environment for all.",
  },
  {
    title: "Message from the Director-Trustee",
    description:
      "A word from our leadership on the school's philosophy and its promise to every family.",
  },
  {
    title: "Message from the Director-Principal",
    description: "Guiding the academic vision that shapes every classroom at TKS.",
  },
  {
    title: "Facilities",
    description:
      "Modern infrastructure designed to support holistic, future-ready learning.",
  },
  {
    title: "Our Faculty",
    description: "Experienced educators guiding students with care and expertise.",
  },
];
