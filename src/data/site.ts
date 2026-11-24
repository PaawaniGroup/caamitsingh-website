/**
 * SINGLE SOURCE OF CONTENT
 * ------------------------------------------------------------------
 * Every piece of text, every team member and every service on the site
 * lives in this file. Edit here; pages and components pick it up.
 *
 * Search for "PLACEHOLDER" to find the values you must replace
 * (phone, email, address, hours, WhatsApp number, map, site URL).
 */

// ---------------------------------------------------------------------------
// Firm + contact details
// ---------------------------------------------------------------------------
export const firm = {
  name: "Singh Amit & Associates",
  shortName: "SA&A",
  tagline: "Chartered Accountants & Legal Advisors",
  signature: "Your Trust. Our Expertise. Your Growth.",
  city: "Roorkee",
  region: "Uttarakhand",
  country: "India",
  /** PLACEHOLDER: production URL. Can also be set with NEXT_PUBLIC_SITE_URL. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com",
};

export const contact = {
  /** PLACEHOLDER: replace with the firm's real details. */
  isPlaceholder: true,
  phoneDisplay: "+91 00000 00000", // PLACEHOLDER
  phoneTel: "+910000000000", // PLACEHOLDER
  email: "info@example.com", // PLACEHOLDER
  whatsapp: "910000000000", // PLACEHOLDER (country code + number, digits only)
  addressLines: ["[Office address line 1]", "[Locality / Landmark]", "Roorkee, Uttarakhand – [PIN code]"], // PLACEHOLDER
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 6:00 PM" }, // PLACEHOLDER
    { days: "Sunday", time: "Closed" }, // PLACEHOLDER
  ],
  /** PLACEHOLDER: Google Maps embed URL (Share → Embed a map → copy the src). Leave empty to show the map placeholder. */
  mapEmbedUrl: "",
  /** Optional: a form endpoint (e.g. Formspree). When empty the form opens the visitor's email app. */
  formEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "",
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

// ---------------------------------------------------------------------------
// Home page micro-copy and stats
// ---------------------------------------------------------------------------
export const home = {
  hero: {
    eyebrow: "Chartered Accountants & Legal Advisors",
    title: "Chartered Accountants & Legal Advisors in Roorkee",
    sub: "Audit, taxation, GST, corporate law and compliance under one roof, delivered by a multidisciplinary team of Chartered Accountants, Company Secretaries and Advocates.",
  },
  stats: [
    { value: 13, suffix: "+", label: "Years of Experience" },
    { value: 43, suffix: "", label: "Professionals & Staff" },
    { value: 6, suffix: "", label: "Practice Areas" },
    { text: "CA · CS · Advocates", label: "Multidisciplinary Team" },
  ] as Array<{ value?: number; suffix?: string; text?: string; label: string }>,
  whyChooseTiles: [
    { icon: "UserCheck", title: "Partner-led supervision", text: "The Managing Partner personally oversees key audit and assurance engagements and professional quality reviews." },
    { icon: "HeartHandshake", title: "Personalised attention", text: "Every engagement begins with understanding each client's unique requirements." },
    { icon: "Lock", title: "Confidentiality", text: "Confidentiality guides every professional engagement we undertake." },
    { icon: "ShieldCheck", title: "Ethical practices", text: "Integrity and ethical practice are central to how we work." },
    { icon: "Clock", title: "Timely delivery", text: "Accurate, timely and dependable professional services." },
    { icon: "Layers", title: "Integrated CA + CS + Legal expertise", text: "Chartered Accountants, Company Secretaries and Advocates providing coordinated solutions under one roof." },
  ],
  industries: [
    { icon: "Factory", label: "Manufacturing" },
    { icon: "Landmark", label: "Banking" },
    { icon: "HardHat", label: "Infrastructure" },
    { icon: "Building2", label: "Real Estate" },
    { icon: "GraduationCap", label: "Education" },
    { icon: "HeartPulse", label: "Healthcare" },
    { icon: "Building", label: "Government Organisations" },
  ],
  process: [
    { title: "Understand", text: "Understanding each client's business and unique requirements." },
    { title: "Analyse", text: "Identifying financial and regulatory challenges." },
    { title: "Advise", text: "Practical solutions that support informed decision-making." },
    { title: "Comply", text: "Accurate and timely regulatory compliance." },
    { title: "Support", text: "Long-term relationships built on trust, transparency and consistent quality." },
  ],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const about = {
  heading: "About Us",
  subheading: "Singh Amit & Associates | Chartered Accountants & Legal Advisors",
  paragraphs: [
    "Singh Amit & Associates is a professionally established Chartered Accountancy firm in Roorkee, Uttarakhand, offering comprehensive financial, taxation, auditing, accounting, and business advisory services to individuals, businesses, corporate entities, and institutions. With a strong commitment to integrity, professional excellence, and client satisfaction, we provide reliable and practical solutions tailored to the evolving needs of our clients.",
    "Under the leadership of CA Amit Singh (FCA, LL.B., ICAI Gold Medalist), who brings over 13 years of professional experience, our firm has developed expertise in audit and assurance, Income Tax consultancy, GST compliance, corporate taxation, accounting, company registration, regulatory compliance, and financial advisory services.",
    "Our strength lies in our multidisciplinary team of 43 professionals and staff, comprising experienced Chartered Accountants, Company Secretaries, Advocates, and finance professionals. This integrated expertise enables us to provide coordinated financial, taxation, corporate law, and compliance solutions under one roof.",
    "As a CA firm in Roorkee, we serve clients across Uttarakhand and neighbouring regions, with professional experience spanning manufacturing, banking, infrastructure, real estate, education, healthcare, government organisations, and other business sectors. We combine technical expertise, modern technology, and a client-focused approach to deliver accurate, timely, and dependable professional services.",
  ],
  /** "At a glance" fact list: only facts stated in the firm's content. */
  facts: [
    { label: "Firm", value: "Singh Amit & Associates" },
    { label: "Profession", value: "Chartered Accountants & Legal Advisors" },
    { label: "Location", value: "Roorkee, Uttarakhand" },
    { label: "Serving", value: "Uttarakhand and neighbouring regions" },
    { label: "Founder & Managing Partner", value: "CA Amit Singh, FCA, LL.B." },
    { label: "Professional Experience", value: "13+ years" },
    { label: "Professionals & Staff", value: "43" },
    { label: "Practice Areas", value: "6" },
  ],
  whyHeading: "Why Choose Singh Amit & Associates?",
  whyParagraphs: [
    "At Singh Amit & Associates, we believe that professional excellence goes beyond statutory compliance. Our approach focuses on understanding each client's business, identifying financial and regulatory challenges, and providing practical solutions that support informed decision-making and sustainable growth.",
    "Our team brings hands-on experience in GST registration and return filing, Income Tax returns, tax audits, statutory and internal audits, company and LLP registration, ROC compliance, TDS compliance, EPF and ESIC services, financial reporting, and business advisory.",
    "What distinguishes our firm is our commitment to personalized attention, partner-led supervision, confidentiality, ethical practices, and timely service delivery. By combining professional knowledge with practical business understanding, we strive to build long-term relationships based on trust, transparency, and consistent quality.",
  ],
  values: [
    { icon: "ShieldCheck", title: "Integrity", text: "Ethical practice guides every professional engagement." },
    { icon: "BookOpenCheck", title: "Technical Excellence", text: "Technical expertise combined with practical business understanding." },
    { icon: "Lock", title: "Confidentiality", text: "Client information is treated with confidentiality in every assignment." },
    { icon: "Smile", title: "Client Satisfaction", text: "Dependable professional solutions tailored to each client's requirements." },
  ],
  commitment: {
    heading: "Our Commitment",
    paragraphs: [
      "At Singh Amit & Associates, every professional engagement is guided by our commitment to integrity, technical excellence, confidentiality, and client satisfaction.",
      "We believe in understanding the unique requirements of each client and delivering dependable professional solutions that support regulatory compliance, informed decision-making, and sustainable business growth.",
    ],
  },
};

// ---------------------------------------------------------------------------
// Founder
// ---------------------------------------------------------------------------
export const founder = {
  heading: "Meet Our Founder & Managing Partner",
  name: "CA Amit Singh",
  shortName: "Amit Singh",
  initials: "AS",
  credentialsLine: "FCA, LL.B. | ICAI Gold Medalist | Founder & Managing Partner",
  badges: ["FCA", "LL.B.", "ICAI Gold Medalist"],
  bio: [
    "CA Amit Singh is the Founder and Managing Partner of Singh Amit & Associates, a Chartered Accountancy firm based in Roorkee, Uttarakhand. With over 13 years of professional experience, he brings expertise in audit and assurance, direct and indirect taxation, corporate law, financial consultancy, and business advisory services.",
    "A Fellow Chartered Accountant, Law Graduate, and recipient of the prestigious ICAI Gold Medal, CA Amit Singh combines financial expertise with legal knowledge to provide practical, reliable, and comprehensive professional solutions.",
    "Under his leadership, Singh Amit & Associates has developed a multidisciplinary team of 43 professionals and staff, including Chartered Accountants, Company Secretaries, Advocates, and finance professionals, serving clients across diverse industries such as banking, manufacturing, infrastructure, healthcare, education, and government institutions.",
    "As the firm's Managing Partner, he personally oversees key audit and assurance engagements, professional quality reviews, and client relationships, ensuring that every assignment reflects the firm's commitment to integrity, accuracy, confidentiality, and professional excellence.",
  ],
  philosophy:
    "His professional philosophy centres on understanding each client's unique requirements, ensuring regulatory compliance, managing financial risks, and delivering meaningful advice that supports informed business decisions and long-term growth.",
  /** Expertise tags: taken from the bio above. */
  expertise: [
    "Audit & Assurance",
    "Direct Taxation",
    "Indirect Taxation",
    "Corporate Law",
    "Financial Consultancy",
    "Business Advisory",
  ],
};

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
export type SubService = { title: string; description: string };
export type Service = {
  slug: string;
  number: number;
  icon: string;
  title: string;
  shortTitle: string;
  tagline: string;
  intro: string[];
  includesLead: string;
  subServices: SubService[];
  objective: string;
  seoTitle: string;
  seoDescription: string;
};

export const servicesIntro = {
  heading: "Our Professional Services",
  subheading: "Comprehensive Financial, Taxation, Legal & Business Advisory Solutions",
  paragraphs: [
    "At Singh Amit & Associates, we provide a comprehensive range of professional services designed to address the financial, taxation, regulatory, and legal requirements of businesses, entrepreneurs, and individuals.",
    "Our multidisciplinary team of Chartered Accountants, Company Secretaries, Advocates, and finance professionals combines technical expertise with practical industry knowledge to deliver reliable, efficient, and client-focused solutions.",
    "From taxation and audit to company incorporation, real estate approvals, trademark protection, and financial compliance, we assist our clients at every stage of their business journey.",
  ],
};

export const services: Service[] = [
  {
    slug: "taxation-services",
    number: 1,
    icon: "Calculator",
    title: "Taxation Services",
    shortTitle: "Taxation",
    tagline: "Direct & Indirect Taxation | GST | Income Tax | Tax Advisory",
    intro: [
      "Our taxation practice provides professional guidance to individuals, businesses, and corporate entities in managing their direct and indirect tax obligations. We focus on accurate compliance, effective tax planning, and practical advisory solutions in accordance with applicable tax laws.",
    ],
    includesLead: "Our services include:",
    subServices: [
      { title: "GST Registration & Compliance", description: "GST registration, amendments, cancellation, return filing, reconciliation, and ongoing regulatory compliance." },
      { title: "GST Advisory & Litigation", description: "Assistance with GST notices, departmental assessments, audits, appeals, and tax disputes through appropriately qualified professionals." },
      { title: "Income Tax Return Filing", description: "Preparation and filing of income tax returns for individuals, businesses, firms, and companies." },
      { title: "Income Tax Planning & Advisory", description: "Tax-efficient financial planning, regulatory guidance, and advisory on income tax matters." },
      { title: "TDS & TCS Compliance", description: "Tax deduction and collection compliance, quarterly return filing, reconciliations, and related advisory." },
      { title: "Income Tax Assessments & Appeals", description: "Assistance in responding to departmental notices, assessments, appeals, and related proceedings." },
    ],
    objective: "Our objective is to simplify taxation complexities while helping clients maintain compliance and make informed financial decisions.",
    seoTitle: "GST Consultant & Income Tax Services in Roorkee",
    seoDescription: "GST registration and returns, income tax filing, TDS & TCS compliance and tax advisory from Chartered Accountants and Advocates in Roorkee, Uttarakhand.",
  },
  {
    slug: "audit-assurance-services",
    number: 2,
    icon: "ClipboardCheck",
    title: "Audit & Assurance Services",
    shortTitle: "Audit & Assurance",
    tagline: "Statutory Audit | Internal Audit | Stock Audit | Due Diligence",
    intro: [
      "Our Audit and Assurance practice is focused on enhancing financial transparency, strengthening internal controls, and improving the reliability of financial information.",
      "We conduct independent, systematic, and risk-focused reviews in accordance with applicable professional standards and regulatory requirements.",
    ],
    includesLead: "Our services include:",
    subServices: [
      { title: "Statutory Audit", description: "Independent examination of financial statements and statutory reporting in accordance with applicable laws and auditing standards." },
      { title: "Internal Audit", description: "Evaluation of internal controls, operational processes, risk management practices, and regulatory compliance." },
      { title: "Stock Audit", description: "Verification of inventory, stock records, valuation practices, and related financial documentation." },
      { title: "Concurrent Audit", description: "Ongoing review of transactions, processes, and compliance for banks and other organisations." },
      { title: "Financial Due Diligence", description: "Examination of financial records, liabilities, regulatory exposures, and business information to support lending, investment, and commercial decisions." },
    ],
    objective: "Our audit approach emphasises independence, accuracy, professional judgement, and meaningful recommendations.",
    seoTitle: "Statutory, Internal & Stock Audit Services in Roorkee",
    seoDescription: "Statutory audit, internal audit, stock audit, concurrent audit and financial due diligence by Chartered Accountants in Roorkee, Uttarakhand.",
  },
  {
    slug: "real-estate-regulatory-approvals",
    number: 3,
    icon: "Building2",
    title: "Real Estate & Regulatory Approvals",
    shortTitle: "Real Estate & Approvals",
    tagline: "RERA | HRDA Approvals | Property Documentation",
    intro: [
      "We provide professional assistance in real estate regulatory compliance, development approvals, and property-related documentation.",
      "Our team supports developers, businesses, property owners, and individuals in navigating procedural requirements and maintaining compliance with applicable regulations.",
    ],
    includesLead: "Our services include:",
    subServices: [
      { title: "RERA Registration & Compliance", description: "Assistance with real estate project registration, regulatory filings, documentation, and ongoing compliance requirements." },
      { title: "HRDA Approvals", description: "Support with applications and documentation relating to building plans, map sanctions, and development approvals before the relevant development authority." },
      { title: "Property Registry & Documentation", description: "Assistance in preparing and reviewing property-related documents, deeds, and registration documentation through qualified legal professionals." },
    ],
    objective: "We aim to make regulatory procedures more organised, transparent, and manageable for our clients.",
    seoTitle: "RERA Registration & HRDA Approvals in Uttarakhand",
    seoDescription: "RERA registration and compliance, HRDA approvals and property documentation support for developers and property owners in Roorkee and Uttarakhand.",
  },
  {
    slug: "corporate-company-law-services",
    number: 4,
    icon: "Landmark",
    title: "Corporate & Company Law Services",
    shortTitle: "Corporate & Company Law",
    tagline: "Company Registration | ROC Compliance | Company Revival | Corporate Advisory",
    intro: [
      "Our Corporate and Company Law practice provides structured professional support throughout the business lifecycle, from incorporation and statutory compliance to corporate restructuring and revival.",
      "We assist entrepreneurs, startups, companies, and business organisations in understanding and fulfilling their corporate regulatory responsibilities.",
    ],
    includesLead: "Our services include:",
    subServices: [
      { title: "Company & LLP Registration", description: "Assistance with incorporation of Private Limited Companies, Limited Liability Partnerships (LLPs), and One Person Companies (OPCs)." },
      { title: "ROC & MCA Compliance", description: "Preparation and filing of statutory returns, annual filings, and event-based forms with the Registrar of Companies." },
      { title: "Company Revival & Restoration", description: "Assistance with restoration of companies struck off from the register, including documentation and applicable legal proceedings." },
      { title: "Corporate Advisory", description: "Guidance on business structuring, corporate governance, regulatory requirements, and MSME-related matters." },
    ],
    objective: "Our objective is to support businesses with sound corporate structures, disciplined compliance practices, and practical regulatory guidance.",
    seoTitle: "Company Registration & ROC Compliance in Uttarakhand",
    seoDescription: "Company and LLP registration, ROC and MCA compliance, company revival and corporate advisory from Company Secretaries and CAs in Roorkee, Uttarakhand.",
  },
  {
    slug: "trademark-intellectual-property-services",
    number: 5,
    icon: "Stamp",
    title: "Trademark & Intellectual Property Services",
    shortTitle: "Trademark & IP",
    tagline: "Trademark Registration | Brand Protection | Trademark Litigation",
    intro: [
      "A business identity is one of its most valuable assets. Our Trademark and Intellectual Property services help businesses and entrepreneurs protect their brands through appropriate registration, compliance, and dispute-resolution support.",
      "We assist clients with trademark-related procedures and documentation, working with qualified legal professionals where required.",
    ],
    includesLead: "Our services include:",
    subServices: [
      { title: "Trademark Registration", description: "Trademark search, application preparation, filing, and assistance with examination objections." },
      { title: "Trademark Litigation & Disputes", description: "Professional support in trademark opposition, disputes, and related legal proceedings." },
      { title: "Trademark Advisory", description: "Guidance on trademark availability, renewal, and ongoing brand protection requirements." },
    ],
    objective: "Our focus is to help businesses establish and maintain their brand identity through structured intellectual property support.",
    seoTitle: "Trademark Registration Services in Roorkee",
    seoDescription: "Trademark search, registration, advisory and dispute support for businesses and entrepreneurs in Roorkee, Uttarakhand, with qualified legal professionals.",
  },
  {
    slug: "finance-statutory-compliance-services",
    number: 6,
    icon: "Banknote",
    title: "Finance & Statutory Compliance Services",
    shortTitle: "Finance & Compliance",
    tagline: "Loan Documentation | CMA & DPR | EPF | ESIC",
    intro: [
      "Our Finance and Compliance practice assists businesses in financial documentation, funding-related requirements, and employee-related statutory compliance.",
      "We provide structured financial and regulatory support to help organisations maintain accurate records, meet statutory obligations, and prepare relevant documentation for financial institutions.",
    ],
    includesLead: "Our services include:",
    subServices: [
      { title: "Loan Documentation & Advisory", description: "Assistance in preparing financial information and supporting documents for business loans and credit facilities." },
      { title: "CMA Data & Project Reports", description: "Preparation of Credit Monitoring Arrangement (CMA) data, Detailed Project Reports (DPR), financial projections, and related documentation." },
      { title: "EPF Registration & Compliance", description: "Assistance with Employees' Provident Fund registration, periodic returns, contribution-related compliance, and regulatory documentation." },
      { title: "ESIC Registration & Compliance", description: "Support for Employees' State Insurance registration, statutory returns, and ongoing compliance requirements." },
    ],
    objective: "We focus on organised financial reporting, timely compliance, and practical support for business operations.",
    seoTitle: "CMA Data, DPR, EPF & ESIC Services in Roorkee",
    seoDescription: "Loan documentation, CMA data, project reports, EPF and ESIC registration and compliance support for businesses in Roorkee, Uttarakhand.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------
export type TeamMember = {
  name: string;
  initials: string;
  credentials: string;
  role: string;
  bio: string;
};
export type TeamGroup = { id: string; title: string; icon: string; blurb: string; members: TeamMember[] };

export const teamIntro = {
  heading: "Meet Our Professional Team",
  subheading: "Expertise. Integrity. Commitment.",
  text: "At Singh Amit & Associates, our strength lies in our multidisciplinary team of experienced Chartered Accountants, Company Secretaries, Advocates, and finance professionals. Led by CA Amit Singh, our professionals bring specialised expertise across taxation, audit, corporate law, regulatory compliance, and financial advisory, delivering reliable and client-focused professional solutions.",
};

export const teamGroups: TeamGroup[] = [
  {
    id: "leadership",
    title: "Our Leadership & Chartered Accountants",
    icon: "Award",
    blurb: "Founder, partners and Chartered Accountants",
    members: [
      {
        name: "CA Amit Singh",
        initials: "AS",
        credentials: "FCA, LL.B.",
        role: "Founder & Managing Partner",
        bio: "CA Amit Singh is the Founder and Managing Partner of Singh Amit & Associates, bringing over 13 years of professional experience in audit and assurance, taxation, corporate law, financial consultancy, and business advisory. An ICAI Gold Medalist and Law Graduate, he leads the firm's professional engagements with a strong focus on quality, integrity, and client relationships.",
      },
      {
        name: "CA Bhanupriya Arora",
        initials: "BA",
        credentials: "FCA",
        role: "Partner – Taxation & Financial Reporting",
        bio: "With over a decade of professional experience, CA Bhanupriya Arora specialises in income tax advisory, GST compliance, tax audits, and financial reporting. She provides guidance on tax planning, regulatory compliance, and tax dispute resolution while overseeing accounting engagements and the preparation of financial statements.",
      },
      {
        name: "CA Shobhit Gupta",
        initials: "SG",
        credentials: "FCA",
        role: "Partner – Taxation & Financial Advisory",
        bio: "CA Shobhit Gupta is a Fellow Chartered Accountant with professional experience in taxation, financial management, accounting, and regulatory compliance. He provides financial and compliance advisory services, supporting businesses and organisations in maintaining sound financial practices and fulfilling statutory obligations.",
      },
      {
        name: "CA Muskan",
        initials: "M",
        credentials: "ACA",
        role: "Chartered Accountant",
        bio: "CA Muskan is a qualified Chartered Accountant specialising in accounting, taxation, financial reporting, and regulatory compliance. She contributes to financial statement preparation, financial analysis, and statutory compliance, supporting accurate reporting and effective financial management.",
      },
    ],
  },
  {
    id: "company-secretaries",
    title: "Our Company Secretaries",
    icon: "ScrollText",
    blurb: "Corporate governance and secretarial compliance",
    members: [
      {
        name: "CS Monika Bhandari",
        initials: "MB",
        credentials: "CS, LL.B.",
        role: "Company Secretary",
        bio: "CS Monika Bhandari is an experienced Company Secretary and Law Graduate with over eight years of professional experience in corporate governance, company law, and regulatory compliance. Her expertise includes ROC filings, corporate restructuring, legal documentation, secretarial compliance, and applicable SEBI regulations.",
      },
      {
        name: "CS Arpita",
        initials: "A",
        credentials: "CS",
        role: "Company Secretary",
        bio: "CS Arpita specialises in corporate governance, statutory compliance, and company law matters. Her professional responsibilities include ROC filings, corporate documentation, secretarial compliance, and regulatory requirements under the Companies Act, 2013, helping businesses maintain organised corporate records and compliance.",
      },
    ],
  },
  {
    id: "legal-professionals",
    title: "Our Legal Professionals",
    icon: "Scale",
    blurb: "Advocates in GST, compliance, RERA and contracts",
    members: [
      {
        name: "Advocate Mayank Pal",
        initials: "MP",
        credentials: "Advocate",
        role: "GST & Indirect Taxation",
        bio: "Advocate Mayank Pal specialises in Goods and Services Tax matters, including GST registration, return filing, assessments, departmental notices, input tax credit disputes, and tax litigation. He also advises on GST implications relating to supply-chain and cross-border transactions.",
      },
      {
        name: "Advocate Aditi Prasad",
        initials: "AP",
        credentials: "Advocate",
        role: "Legal Compliance & Taxation",
        bio: "Advocate Aditi Prasad works in legal compliance and taxation, assisting clients with GST-related matters, regulatory filings, assessments, audits, and departmental proceedings. Her practice also includes legal research, documentation, and compliance support.",
      },
      {
        name: "Advocate Geetika Sachdeva",
        initials: "GS",
        credentials: "Advocate",
        role: "RERA, Real Estate & Contracts",
        bio: "Advocate Geetika Sachdeva focuses on real estate law, RERA compliance, and contractual documentation. Her areas of practice include real estate project registration, regulatory filings, property-related documentation, and the drafting and review of business and real estate contracts.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Contact page / form
// ---------------------------------------------------------------------------
export const contactPage = {
  heading: "Contact Us",
  intro: "For information about our professional services, please use the form below or reach the office using the details provided. We will respond to your enquiry in due course.",
  formNote: "This form is for general information enquiries only. Please do not send confidential or sensitive documents through this form.",
};

// ---------------------------------------------------------------------------
// Legal pages (entry modal, Disclaimer, Privacy Policy)
// ---------------------------------------------------------------------------
export const disclaimer = {
  modalTitle: "Disclaimer",
  modalIntro:
    "Please read the following before proceeding. By clicking “I Agree”, you acknowledge and confirm that:",
  points: [
    "This website is intended solely to provide information about Singh Amit & Associates, Chartered Accountants & Legal Advisors. It is not advertising, and it is not a solicitation, invitation or inducement of any kind to seek or obtain professional work.",
    "You are seeking information about the firm of your own accord, and there has been no solicitation of any kind by the firm or any of its members.",
    "Any information obtained or material accessed on this website is at your own volition. Its transmission, receipt or use does not create a professional-client relationship.",
    "The content of this website is general in nature and is not professional, legal or tax advice. You should obtain advice specific to your circumstances before acting on any information.",
  ],
  pageSections: [
    {
      heading: "Purpose of this website",
      paragraphs: [
        "This website is intended solely to provide information about Singh Amit & Associates, Chartered Accountants & Legal Advisors, Roorkee, Uttarakhand. It is not intended to be, and must not be construed as, advertising or a solicitation or invitation of any kind to seek professional work.",
      ],
    },
    {
      heading: "Visitor’s acknowledgement",
      paragraphs: [
        "By accessing this website, the visitor acknowledges and confirms that there has been no advertisement, personal communication, solicitation, invitation or inducement of any sort from the firm or any of its members, and that the visitor is seeking information about the firm of their own accord.",
      ],
    },
    {
      heading: "No professional-client relationship",
      paragraphs: [
        "Any information obtained or material accessed from this website is entirely at the visitor’s own volition. The transmission, receipt or use of this website, or of any enquiry sent through it, does not create a professional-client relationship between the visitor and the firm.",
      ],
    },
    {
      heading: "General information only",
      paragraphs: [
        "The content of this website is general in nature and is provided for information purposes. It is not professional, legal or tax advice and should not be relied upon as such. Laws and regulations change, and their application depends on specific facts. Visitors should obtain advice specific to their circumstances before acting on any information.",
      ],
    },
    {
      heading: "Accuracy and links",
      paragraphs: [
        "While reasonable care is taken to keep the information current, the firm makes no representation or warranty as to its completeness or accuracy and accepts no liability for any loss arising from reliance on it. Any external links are provided for convenience and do not imply endorsement.",
      ],
    },
  ],
};

export const privacy = {
  updated: "[Date to be confirmed]", // PLACEHOLDER
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        "This Privacy Policy explains how Singh Amit & Associates (“the firm”, “we”) handles personal information collected through this website. We respect your privacy and handle information in a confidential and responsible manner.",
      ],
    },
    {
      heading: "Information we collect",
      paragraphs: [
        "We collect only the information you choose to provide through the contact form or by contacting the office directly: your name, phone number, email address, the service you are enquiring about and the content of your message.",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: [
        "Information you provide is used to respond to your enquiry and to maintain a record of that correspondence. We do not sell or rent personal information to third parties.",
      ],
    },
    {
      heading: "Confidentiality",
      paragraphs: [
        "Confidentiality is central to our professional practice. Information shared with the firm is accessible only to those who need it to respond to your enquiry. Please do not send sensitive documents or financial details through the website contact form.",
      ],
    },
    {
      heading: "Retention and your choices",
      paragraphs: [
        "Enquiry information is retained for as long as needed to respond and to meet professional and legal record-keeping obligations. You may contact the office to ask for correction or deletion of the personal information you have provided, subject to those obligations.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "We take reasonable steps to protect information against unauthorised access or disclosure. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        "For any question about this policy or about information you have provided, please write to the firm using the contact details given on the Contact page.",
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Photography (files in /public/images). Captions state only what is visible in the photo.
// Confirm the team's consent to publish these photographs before launch.
// ---------------------------------------------------------------------------
export type Photo = { src: string; alt: string; caption: string; width: number; height: number };
const photo = (file: string, alt: string, caption: string, width = 2000, height = 1333): Photo => ({ src: `/images/${file}.jpg`, alt, caption, width, height });

export const photos = {
  team: photo("team-group", "The team of Singh Amit & Associates seated together on the office terrace", "The team of Singh Amit & Associates"),
  corridor: photo("office-corridor", "Open-plan office corridor with workstations and indoor plants", "The firm's office"),
  desk: photo("office-desk", "Two associates reviewing documents at a desk", "Associates reviewing documents"),
  workstations: photo("office-workstations", "Accounts and compliance workstations in the office", "Accounts and compliance team at work"),
  meeting: photo("meeting-room", "CA Amit Singh with team members around the conference table", "Team review meeting"),
  meeting2: photo("meeting-room-2", "Team members taking notes at a meeting in the conference room", "Team members in a working session"),
  training: photo("training-session", "A team member presenting at an internal training session", "Internal training session at the office"),
  diwaliSeated: photo("diwali-team-seated", "Team members seated together at the Diwali celebration", "Diwali celebration with the team"),
  diwaliVenue: photo("diwali-venue", "Terrace venue decorated for the team's Diwali celebration", "Venue for the team's Diwali celebration", 1920, 1080),
  diwaliTeam: photo("diwali-team-2", "Team members standing together at the Diwali celebration", "Team members at the Diwali celebration"),
  diwaliRangoli: photo("diwali-rangoli", "Flower rangoli with lit diyas at the Diwali celebration", "Rangoli and diyas at the Diwali celebration"),
  wofa: photo("wofa-signage", "CA Amit Singh standing in front of the WOFA 2.0 backdrop", "CA Amit Singh at WOFA 2.0, organised by the Institute of Chartered Accountants of India"),
  founder: photo("wofa-founder", "CA Amit Singh in front of the WOFA 2.0 signage", "CA Amit Singh at WOFA 2.0"),
};

export const lifeAtFirm = {
  eyebrow: "Life at the firm",
  heading: "Events & Gatherings",
  intro: "The workplace, internal training sessions, professional events and team celebrations at Singh Amit & Associates.",
  items: [photos.wofa, photos.training, photos.diwaliSeated, photos.diwaliVenue, photos.diwaliTeam, photos.diwaliRangoli],
};
