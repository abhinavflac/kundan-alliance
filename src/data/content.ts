/**
 * KUNDAN ALLIANCE — Homepage content
 * ----------------------------------
 * Single source of truth for the homepage. Replace placeholders as
 * official information is confirmed.
 */

/* ——— Navigation ——— */
export const navLinks = [
  { label: "Alliance", href: "#legacy" },
  { label: "Dates", href: "#stages" },
  { label: "Jury", href: "#jury" },
  { label: "Awards", href: "#honours" },
  { label: "Contact", href: "#secretariat" },
];

/* ——— 01 · Hero — Weekly salute ——— */
export type Performer = {
  name: string;
  agency: string;
  units: string;
  value: string;
  week: string;
  img: string;
  line: string;
};

export const performers: Performer[] = [
  {
    name: "Vikramaditya Sharma",
    agency: "Apex Realty Advisory",
    units: "08",
    value: "₹14.20 Cr",
    week: "WEEK 32 · JULY 2026",
    img: "/images/performer-1.jpg",
    line: "Closed the season's cleanest luxury tranche with three repeat-buyer conversions.",
  },
  {
    name: "Ananya Deshmukh",
    agency: "Vanguard Capital Realtors",
    units: "11",
    value: "₹19.50 Cr",
    week: "WEEK 33 · JULY 2026",
    img: "/images/performer-2.jpg",
    line: "The alliance's fastest week on record — eleven units, zero cooling-off exits.",
  },
  {
    name: "Rajeshwar Kulkarni",
    agency: "Heritage Prime Consultants",
    units: "09",
    value: "₹16.80 Cr",
    week: "WEEK 34 · AUGUST 2026",
    img: "/images/performer-3.jpg",
    line: "Nineteen years in the field, and still the quietest closer on the register.",
  },
];

/* ——— 02 · Legacy ——— */
export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 35, suffix: "+", label: "Years of Legacy" },
  { value: 46, suffix: "", label: "Landmark Developments" },
  { value: 18000, suffix: "+", label: "Families Homed" },
  { value: 640, suffix: "+", label: "Alliance Partners" },
];

export type Pillar = { numeral: string; title: string; copy: string };

export const pillars: Pillar[] = [
  {
    numeral: "I",
    title: "Audited Meritocracy",
    copy: "Every declared closure, ledger and turnover figure is independently verified by Ernst & Young. No influence, no discretion — only evidence.",
  },
  {
    numeral: "II",
    title: "Accelerated Tier Rewards",
    copy: "Laureates ascend the Alliance Tier ladder — enhanced commission slabs, first-look inventory windows and preferential allocation rights.",
  },
  {
    numeral: "III",
    title: "Permanent Hall of Fame",
    copy: "Winners are engraved in perpetuity on the Kundan Wall of Honour at SB Road — a permanent record of the alliance that built the skyline.",
  },
];

export type Milestone = {
  year: string;
  label: string;
  copy: string;
};

export const milestones: Milestone[] = [
  {
    year: "1991",
    label: "The First Address",
    copy: "Kundan Spaces is founded in Pune with a single 28-unit residential address on Law College Road.",
  },
  {
    year: "2004",
    label: "The Alliance Begins",
    copy: "The formal channel partner programme is instituted — 40 founding agencies enrol.",
  },
  {
    year: "2013",
    label: "Vertical Ambition",
    copy: "The group delivers its first 32-storey tower, redefining the Pune skyline.",
  },
  {
    year: "2021",
    label: "The Luxury Turn",
    copy: "Presidia and Grandeur launch, establishing Kundan in the ultra-premium bracket.",
  },
  {
    year: "2026",
    label: "A Permanent Honour",
    copy: "The Alliance Channel Partner Awards are instituted, audited by Ernst & Young.",
  },
];

/* ——— 03 · Stages ——— */
export type Stage = {
  day: string;
  month: string;
  year: string;
  stage: string;
  title: string;
  copy: string;
};

export const stages: Stage[] = [
  {
    day: "01",
    month: "August",
    year: "2026",
    stage: "Stage I",
    title: "Nominations Open",
    copy: "The registry opens to all MahaRERA-certified alliance partners. Self-nomination and Kundan sales-desk nomination both permitted.",
  },
  {
    day: "30",
    month: "September",
    year: "2026",
    stage: "Stage II",
    title: "Submission Deadline",
    copy: "Portfolios, closure ledgers and RERA attestations must be lodged by 23:59 IST. No extensions shall be granted.",
  },
  {
    day: "10",
    month: "October",
    year: "2026",
    stage: "Stage III",
    title: "EY Audit & Jury Sitting",
    copy: "Ernst & Young verifies every declared transaction. The Jury Council convenes in camera to seal the final register.",
  },
  {
    day: "24",
    month: "October",
    year: "2026",
    stage: "Stage IV",
    title: "The Grand Gala Night",
    copy: "A black-tie ceremony of honour. Eighteen categories, three podium tiers, one permanent Hall of Fame induction.",
  },
];

/* ——— 04 · Jury ——— */
export type Jury = {
  name: string;
  role: string;
  house: string;
  img: string;
  bio: string;
  creds: string[];
  quote: string;
};

export const jury: Jury[] = [
  {
    name: "Mukesh Chhabra",
    role: "Veteran Real-Estate Columnist",
    house: "Chief Pen of the Council",
    img: "/images/jury-1.jpg",
    bio: "For more than three decades, Mr. Chhabra has chronicled India's property market from inside the newsroom — the booms, the corrections, and everything the headlines miss. His columns have become the quiet benchmark that developers, regulators and channel partners cite when the market needs a sober voice.",
    creds: [
      "25+ years in property journalism",
      "Markets & policy columnist",
      "Author of landmark market analyses",
    ],
    quote: "I do not reward noise. I reward the partners whose ledgers survive a second reading.",
  },
  {
    name: "Gaurav Gera",
    role: "Property Journalist & Analyst",
    house: "Custodian of the Register",
    img: "/images/jury-2.jpg",
    bio: "Known for dissecting transaction data that others only headline, Mr. Gera joins the council as its custodian of the register. His desk is the last one a figure visits before it becomes a ranking — and he is unfriendly to any number that does not reconcile.",
    creds: [
      "Deep transaction-data reporting",
      "NRI & affordable-housing specialist",
      "Live market-desk coverage",
    ],
    quote: "The EY audit is my first editor. I only get to speak when the numbers are silent.",
  },
  {
    name: "Kubbra Sait",
    role: "Senior Property Journalist",
    house: "Voice of the Buyer",
    img: "/images/jury-3.jpg",
    bio: "On the property desk for over two decades, Ms. Sait has reported the sale from the side it matters most — the buyer's. She anchors the council's Customer Experience and Repeat Purchase verticals, and her question at every table is the same: would the customer come back?",
    creds: [
      "20+ years on the property beat",
      "Award vertical: Customer Experience",
      "Consumer-rights correspondent",
    ],
    quote: "A partner is only as good as the family who calls them again. I judge on that call.",
  },
  {
    name: "Dhruv Chitgopekar",
    role: "Real-Estate Media Specialist",
    house: "Watchman of Reach",
    img: "/images/jury-4.jpg",
    bio: "Mr. Chitgopekar tracks how the market is told its own story — from launch-day campaigns to the press releases that follow the closing. He chairs the Digital Marketing and Press & PR disciplines, and he distinguishes, with some amusement, between reach and results.",
    creds: [
      "Digital & PR accountability reviews",
      "Award verticals: Marketing, Press & PR",
      "Alliance media strategy",
    ],
    quote: "Beautiful campaigns are common. Verifiable ones are what we honour.",
  },
];

/* ——— 05 · Honours ——— */
export type Category = { no: string; name: string; blurb: string };

export const categories: Category[] = [
  { no: "01", name: "Overall Best Channel Partner", blurb: "The season's single greatest all-round force." },
  { no: "02", name: "Highest Sales Velocity", blurb: "Units per week, audited to the decimal." },
  { no: "03", name: "Luxury Segment Excellence", blurb: "Closings above the ₹3 Cr threshold." },
  { no: "04", name: "Affluent Homes Leader", blurb: "The ₹1–3 Cr band, volume and mix." },
  { no: "05", name: "Commercial & Office Sales", blurb: "Footfalls to fully-let floors." },
  { no: "06", name: "Institutional Tie-Up Partner", blurb: "Corporate channels & bulk mandates." },
  { no: "07", name: "Regional Star Partner", blurb: "Growth outside the metro core." },
  { no: "08", name: "New Launch Champion", blurb: "Launch-week velocity, first to market." },
  { no: "09", name: "Repeat Purchase Campaign", blurb: "Converting homeowners into investors." },
  { no: "10", name: "Customer Experience Award", blurb: "CSAT scores and grievance closure time." },
  { no: "11", name: "Digital Marketing Excellence", blurb: "Qualified leads, tracked and verifiable." },
  { no: "12", name: "Architect of Mega Deals", blurb: "The single largest closed transaction." },
  { no: "13", name: "Fastest Turnaround Partner", blurb: "First visit to file, measured in days." },
  { no: "14", name: "Relationship Banking Partner", blurb: "Loan tie-ups that convert at scale." },
  { no: "15", name: "Press & PR Collaboration", blurb: "Media moments that move the market." },
  { no: "16", name: "Training & Enablement Partner", blurb: "Bench strength that compounds." },
  { no: "17", name: "Emerging Alliance Rookie", blurb: "First-year partners who defied the odds." },
  { no: "18", name: "Legacy Alliance Partner", blurb: "A decade and more on the register." },
];

export type Tier = {
  rank: string;
  name: string;
  cash: string;
  tone: "gold" | "silver" | "bronze";
  rewards: string[];
};

export const tiers: Tier[] = [
  {
    rank: "1st Rank",
    name: "Gold Master",
    cash: "₹5,00,000",
    tone: "gold",
    rewards: [
      "Cash prize of ₹5,00,000",
      "24K Gold Vermeil Jaipur trophy",
      "2-person international trip",
      "Priority inventory rights for 2027 launches",
    ],
  },
  {
    rank: "2nd Rank",
    name: "Silver Laureate",
    cash: "₹2,50,000",
    tone: "silver",
    rewards: [
      "Cash prize of ₹2,50,000",
      "Sterling silver trophy",
      "Luxury resort stay, two nights",
    ],
  },
  {
    rank: "3rd Rank",
    name: "Bronze Honour",
    cash: "₹1,00,000",
    tone: "bronze",
    rewards: [
      "Cash prize of ₹1,00,000",
      "Engraved bronze plaque",
      "Immediate alliance tier upgrade",
    ],
  },
];

/* ——— 06 · Secretariat ——— */
export const queryTypes = [
  "Nomination Submission",
  "Eligibility & Tier Rules",
  "MahaRERA Verification",
  "Event & Logistics",
  "Press & Media",
  "Sponsorship & Partnerships",
  "Other Enquiry",
];

/* ——— Marquee ticker ——— */
export const marqueeItems = [
  "18 Disciplines",
  "EY-Audited Dossiers",
  "₹8,50,000 In Prizes",
  "Gala Night · 24 Oct 2026",
  "Grand Ballroom, Pune",
  "Zero Discretion",
  "Hall of Fame · SB Road HQ",
  "640+ Alliance Partners",
];
