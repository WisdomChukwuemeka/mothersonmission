// components/data.js
// ─────────────────────────────────────────────────────────
// SITE DATA
// All the content for the website lives here.
// If you want to change text, numbers, names, or descriptions
// — this is the ONLY file you need to edit.
// ─────────────────────────────────────────────────────────

// ── Site-wide navigation links ─────────────────────────────
export const navLinks = [
  // { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Programs",  href: "/programs" },
  { label: "Stories",   href: "/stories" },
  { label: "Team",      href: "/team" },
  { label: "Contact",   href: "/contact" },
];

// ── Impact statistics (shown on homepage & about page) ────
export const stats = [
  { value: 4800, suffix: "+",   label: "Mothers Empowered" },
  { value: 32,   suffix: "",    label: "States Reached" },
  { value: 120,  suffix: "+",   label: "Community Programs" },
  { value: 15,   suffix: "yrs", label: "Of Impact" },
];

// ── Four program pillars ───────────────────────────────────
export const programs = [
  {
    icon: "🌱",
    title: "Economic Empowerment",
    slug: "economic-empowerment",
    tagline: "Building sustainable livelihoods",
    description:
      "We equip mothers with vocational skills, micro-finance access, and entrepreneurship mentorship so they can build sustainable livelihoods for their families.",
    details: [
      "6-month vocational training in tailoring, baking, beauty, tech & more",
      "Access to interest-free micro-loans up to ₦500,000",
      "Ongoing business mentorship for 12 months post-graduation",
      "Market linkage and cooperative formation support",
    ],
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    textColor: "text-emerald-700",
  },
  {
    icon: "📚",
    title: "Education & Literacy",
    slug: "education-literacy",
    tagline: "Unlocking the power of knowledge",
    description:
      "Our adult literacy programs and scholarship schemes ensure every mother can read, write, and actively guide her children through formal education.",
    details: [
      "Free adult literacy classes (3 months intensive)",
      "Numeracy and digital literacy training",
      "Secondary school re-entry support for young mothers",
      "Scholarship fund for children of program graduates",
    ],
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    textColor: "text-blue-700",
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    slug: "health-wellness",
    tagline: "Healthy mothers, healthy nation",
    description:
      "Our maternal health clinics, nutritional support, and mental-health awareness programs drive healthier families and stronger communities.",
    details: [
      "Free antenatal & postnatal care at partner clinics",
      "Nutritional support packages for pregnant mothers",
      "Mental health awareness & counselling sessions",
      "Community health worker training programme",
    ],
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    textColor: "text-rose-700",
  },
  {
    icon: "🗣️",
    title: "Leadership & Advocacy",
    slug: "leadership-advocacy",
    tagline: "Amplifying mothers' voices",
    description:
      "Our civic training and platforms amplify mothers' voices in local governance, policy reform, and community leadership roles.",
    details: [
      "8-week civic leadership bootcamp",
      "Local government liaison and advocacy training",
      "Annual Mothers in Leadership summit",
      "Community ambassador network (2,000+ members)",
    ],
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
  },
];

// ── Testimonial stories ────────────────────────────────────
export const stories = [
  {
    name: "Amara Okonkwo",
    location: "Lagos, Lagos State",
    program: "Economic Empowerment",
    year: "2022",
    quote:
      "Before this program I sold groundnuts by the roadside. Today I run a catering business employing five women in my neighbourhood. My children now go to school with full stomachs and full hearts.",
    longStory:
      "Amara joined MNF in early 2022 after losing her husband and being left to care for three children alone. The six-month vocational program taught her food-processing and business management. She received a ₦300,000 micro-loan to launch 'Amara's Kitchen', which now supplies two local schools with daily lunches. In 2023 she was named a community ambassador and helps recruit new program participants.",
    image: "/images/placeholder-woman.jpg",
  },
  {
    name: "Fatima Al-Hassan",
    location: "Kano, Kano State",
    program: "Education & Literacy",
    year: "2023",
    quote:
      "At 38 I learned to read. I can now read my children's school reports, sign my own documents, and write letters to the local government. I am no longer invisible.",
    longStory:
      "Fatima grew up in a rural community where girls were not sent to school. She joined our literacy program after hearing about it from her neighbour. Within three months she could read and write in both Hausa and English. She went on to complete our digital literacy module and now manages social media for a women's cooperative of 40 members.",
    image: "/images/placeholder-woman.jpg",
  },
  {
    name: "Ngozi Eze",
    location: "Enugu, Enugu State",
    program: "Leadership & Advocacy",
    year: "2024",
    quote:
      "The leadership training turned a quiet mother into a ward councillor. I now champion water and sanitation projects for over 2,000 families. Change starts at home.",
    longStory:
      "Ngozi came to us as a shy mother of four with no formal secondary education. After completing our Leadership Bootcamp she ran for ward councillor and won with 68% of the vote. She has since pushed through two water-point installations and a girls' scholarship scheme in her ward, benefiting over 2,000 residents.",
    image: "/images/placeholder-woman.jpg",
  },
  {
    name: "Blessing Adeyemi",
    location: "Ibadan, Oyo State",
    program: "Health & Wellness",
    year: "2023",
    quote:
      "I lost my first child to preventable causes because I had no information. MNF gave me the knowledge to protect my second baby — and now I share that knowledge with ten other mothers every week.",
    longStory:
      "Blessing lost her firstborn to neonatal sepsis in 2021. When she joined our Health & Wellness program she was still grieving but determined. She completed the community health worker training and now conducts weekly prenatal education sessions in her local church hall, reaching an average of ten new mothers per week.",
    image: "/images/placeholder-woman.jpg",
  },
];

// ── Team members ───────────────────────────────────────────
export const team = [
  {
    name: "Dr. Chioma Adeyinka",
    role: "Executive Director",
    bio: "Dr. Adeyinka has 20 years of experience in women's development. She holds a PhD in Social Policy from the University of Lagos and previously led programmes at UN Women Nigeria.",
    image: "/images/placeholder-woman.jpg",
    linkedin: "#",
  },
  {
    name: "Barrister Kemi Olatunji",
    role: "Director of Advocacy & Legal Affairs",
    bio: "A human-rights lawyer and gender advocate, Kemi has argued landmark cases on women's land rights and has trained over 500 community paralegals across Nigeria.",
    image: "/images/placeholder-woman.jpg",
    linkedin: "#",
  },
  {
    name: "Mr. Emeka Nwosu",
    role: "Director of Programs",
    bio: "Emeka brings 15 years of NGO programme management experience. He oversees delivery of all four pillars and manages our network of 120+ facilitators nationwide.",
    image: "/images/placeholder-woman.jpg",
    linkedin: "#",
  },
  {
    name: "Mrs. Halima Garba",
    role: "Head of Community Outreach",
    bio: "A native of Kaduna, Halima leads our northern expansion strategy and manages relationships with 200+ community gatekeepers and traditional rulers.",
    image: "/images/placeholder-woman.jpg",
    linkedin: "#",
  },
  {
    name: "Mr. Tunde Fashola",
    role: "Finance & Operations Manager",
    bio: "Tunde is a certified accountant with experience in INGO financial management. He ensures every donor naira is tracked, reported, and maximised for impact.",
    image: "/images/placeholder-woman.jpg",
    linkedin: "#",
  },
  {
    name: "Ms. Adaeze Obi",
    role: "Communications Lead",
    bio: "Adaeze tells the stories of our mothers to the world. She has a background in documentary journalism and has won two awards for impact storytelling in development.",
    image: "/images/placeholder-woman.jpg",
    linkedin: "#",
  },
];

// ── FAQ entries ────────────────────────────────────────────
export const faqs = [
  {
    q: "Who can apply to your programs?",
    a: "Any mother aged 18 and above residing in Nigeria is eligible. Priority is given to widows, single mothers, and women from low-income households.",
  },
  {
    q: "Are the programs free of charge?",
    a: "Yes. All our core programs are fully funded through donations and grants. Participants only need commitment and a willingness to grow.",
  },
  {
    q: "How long do the programs last?",
    a: "Program durations range from 3-month intensive workshops to 12-month mentorship journeys, depending on the track.",
  },
  {
    q: "How can I donate or support?",
    a: "You can make a one-time or recurring donation on our Donate page. We accept bank transfers, cards, and mobile money.",
  },
  {
    q: "Do you operate outside Nigeria?",
    a: "Our primary focus is Nigeria. We are actively exploring West African expansion partnerships for 2026.",
  },
  {
    q: "How do I volunteer?",
    a: "Fill out the volunteer form on our Volunteer page. We welcome skills in teaching, healthcare, business mentorship, communications, and more.",
  },
];

// ── Partner organisations ──────────────────────────────────
export const partners = [
  "UNICEF", "UN Women", "USAID", "World Bank", "Ford Foundation", "CBN", "NDDC",
];
