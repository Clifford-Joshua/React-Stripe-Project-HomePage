import image1 from "../assets/Images/P1.jpg";
import image2 from "../assets/Images/P2.jpg";
import image3 from "../assets/Images/P3.jpeg";
import image4 from "../assets/Images/P4.jpeg";
import image5 from "../assets/Images/P5.jpg";
import image6 from "../assets/Images/P6.jpg";
import image7 from "../assets/Images/P7.jpg";
import image8 from "../assets/Images/P8.jpg";
import image9 from "../assets/Images/P9.jpg";
import abs from "../assets/Images/Abstraction.jpg";
import quantum from "../assets/Images/quantum.jpg";
import typo from "../assets/Images/Typography.jpg";

import Bank from "../assets/Images/Bank.jpg";

// =======================================================
// Slide
import Connect from "../assets/Images/Connect.png";
import Payment from "../assets/Images/Payment.png";
import Bwn from "../assets/Images/bmw-landscape.png";
import Amazon from "../assets/Images/home-enterprise-amazon-portrait.png";
import Girltype from "../assets/Images/home-enterprise-maersk-portrait.png";
import Construct from "../assets/Images/home-enterprise-twilio.png";
import AmazonWhite from "../assets/Images/amazon-white.png";
import BwnWhite from "../assets/Images/BMW-white.png";
import MaerskWhite from "../assets/Images/maersk-white.png";
import TwilioWhite from "../assets/Images/twilio-white.png";

import AmazonLogo from "../assets/Images/Amazon-Logo.png";
import AmazonGray from "../assets/Images/amazon-gray.png";
import BmwLogo from "../assets/Images/bmw.png";
import BmwGray from "../assets/Images/Bmw-gray.png";
import MaerskLogo from "../assets/Images/maersk-logo.png";
import MaerskGray from "../assets/Images/maersk-gray.png";
import TwilioLogo from "../assets/Images/twilio-logo.png";
import TwiliGray from "../assets/Images/twilio-gray.png";

export const LocalData = ["Products", "Solutions", "Developers", "Resources"];

export const slideData = [
  {
    price: 130,
    tag: [2000, 4000, 500, 10000],
    image: [image1, image2, image3, image4],
    color: ["red", "gray", "green", "gray"],
    bank: ["Opay", "PalmPAy", "MoniePoint", "UBA"],
    names: ["Ava Cole", "Leo Park", "Max Reid", "James paul"],
    transaction: ["failed", "pending", "successful", "pending"],
  },
  {
    price: 230,
    tag: [1500, 3200, 800, 4000],
    image: [image4, image5, image6, image8],
    color: ["gray", "green", "red", "green"],
    bank: ["Kuda", "MtnMomo", "SmartCash", "Opay"],
    names: ["Zoe Lane", "Eli Ross", "Mia Stone", "Rock Lee"],
    transaction: ["pending", "successful", "failed", "successful"],
  },
  {
    price: 330,
    tag: [2200, 4100, 600, 20000],
    bank: ["UBA", "UN", "FBank", "FBnk"],
    color: ["red", "green", "red", "gray"],
    image: [image7, image8, image9, image2],
    names: ["Kai West", "Liv Gray", "Ben Tate", "zoe lee"],
    transaction: ["failed", "successful", "failed", "pending"],
  },
];

export const BillData = [
  {
    title: "Typography",
    img: typo,
    names: ["Standard", "Professional", "Enterprise"],
    bgcolor: ["white", "skyblue", "white"],
    btnColor: "#ac04d6",
    content: [
      [
        "12 months historical data",
        "4 hrs data refresh",
        "500+ third party integration",
      ],
      [
        "24 months historical data",
        "1 hr data refresh",
        "1000+ third party integration",
        "simple reporting",
      ],
      [
        "unlimited historical data",
        "15 min data refresh",
        "2000+ third party integration",
        "Advanced reporting",
        "priority support",
      ],
    ],
  },
  {
    title: "Abstraction",
    img: abs,
    names: ["Basic", "Premium"],
    bgcolor: ["white", "skyblue"],
    btnColor: "#0505a8",
    content: [
      ["Unlimited access web content", "Exclusive subscriber content"],
      [
        "Unlimited access web content",
        "Monthly print issues",
        "Exclusive subscriber content",
      ],
    ],
  },
  {
    title: "quantum",
    img: quantum,
    names: ["Web"],
    bgcolor: "white",
    btnColor: "#30df05",
    content: [
      ["Up to 3 fonts", "50k requests", "5 domains", "Unlimited access"],
    ],
  },
];

export const connectData = [
  {
    total: "$120.00",
    status: "pending",
    color: "gray",
    price: "$194.000",
    company: "Brilo Tech",
  },
  {
    total: "$80.00",
    status: "completed",
    color: "#30df05",
    price: "$104.000",
    company: "Nuvex Systems",
  },
  {
    total: "$200.00",
    status: "failed",
    color: "red",
    price: "$94.000",
    company: "Zylo Studio",
  },
];

export const ATMCARD = [
  {
    serial_number: 7564,
    bank: "Zenith ",
    logo: Bank,
    color: "red",
    card_type: "Visa Debit",
    owner: "John Doe",
    number: "5399 1234 5678 9010",
    month_year: "07/25",
    expiry_date: "July 2025",
  },
  {
    serial_number: 7565,
    bank: "Access",
    logo: Bank,
    color: "blue",
    card_type: "Verve Card",
    owner: "Jane Smith",
    number: "5061 3456 7890 2345",
    month_year: "03/26",
    expiry_date: "March 2026",
  },
  {
    serial_number: 7566,
    bank: "GTB",
    color: "black",
    logo: Bank,
    card_type: "Mastercard Debit",
    owner: "Michael Johnson",
    number: "5222 4567 8910 1234",
    month_year: "12/24",
    expiry_date: "December 2024",
  },
];

export const SupportData = [
  {
    title: "AI",
    text: "Artificial Intelligence (AI) enables machines to mimic human thinking, learning, and problem-solving. It's used in automation, predictions, smart assistants, and decision-making across industries.",
    social: ["OpenAI", "CURSOR", "ANTHROPIC"],
  },
  {
    title: "Saas",
    text: "Software as a Service (SaaS) delivers applications via the internet. Users subscribe and access services remotely, enabling scalability, regular updates, and easier collaboration.",
    social: ["slack", "twillo", "Linear"],
  },
  {
    title: "Marketplace",
    text: "A marketplace is a digital platform where buyers and sellers connect to exchange goods or services. It offers variety, convenience, and competitive pricing.",
    social: ["BLOOMNATION", "instacart", "deliverco"],
  },
  {
    title: "Banking-as-a-service",
    text: "BaaS allows non-banks to offer financial services using bank APIs. It enables embedded payments, accounts, and lending within apps or platforms.",
    social: ["Karat", "shopify", "PERSONA"],
  },
  {
    title: "Ecommerce",
    text: "Ecommerce is online buying and selling of products or services. It allows 24/7 shopping, global access, and supports business growth through digital platforms.",
    social: ["Glassler", "dermalogical", "INDOCHINO"],
  },
  {
    title: "Crypto",
    text: "Crypto is digital money secured by cryptography and powered by blockchain. It supports peer-to-peer transactions, decentralization, and financial innovations like DeFi and NFTs.",
    social: ["Blockchain.com", "Braintrust", "Magic"],
  },
  {
    title: "Creator economy",
    text: "The creator economy empowers individuals to earn by sharing content, skills, or influence online through ads, subscriptions, sponsorships, and digital products on various platforms.",
    social: ["X", "spotify", "substack"],
  },
];

export const EnterprisesData = [
  {
    id: 1,
    head_text: "Millions",
    head_para: "BMW owners using ConnectedDrive Store",
    body_text: "350+",
    body_para: "US dealerships",
    footer_text: "Products used",
    icon1: Payment,
    icon2: Connect,
    icon1_text: "Payments",
    icon2_text: "Connect",
    background: Bwn,
    nav_img: BwnWhite,
    closing_text: "Learn why BMW chose Stripe to power ecommerce and payments",
    linear: `to bottom,
                rgba(0, 0, 255, 0.245),
                rgba(0, 0, 255, 0.468),
                rgba(0, 0, 255, 0.626),
                rgba(0, 0, 255, 0.83)`,
    color: "blue",
    img: BmwLogo,
    grayImg: BmwGray,
  },
  {
    id: 2,
    head_text: "5+",
    head_para:
      "Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.",
    body_text: "50+",
    body_para: "Payment methods available on Stripe",
    footer_text: "Products used",
    icon1: Payment,
    icon2: Connect,
    icon1_text: "Payments",
    icon2_text: "Connect",
    background: Amazon,
    nav_img: AmazonWhite,
    closing_text: "See how Amazon simplified cross-border payments with Stripe",
    linear: `to bottom,
     rgba(255, 166, 0, 0.245),
     rgba(255, 166, 0, 0.468),
     rgba(255, 166, 0, 0.626),
     rgba(255, 166, 0, 0.83)`,
    color: "orange",
    img: AmazonLogo,
    grayImg: AmazonGray,
  },
  {
    id: 3,
    head_text: "130",
    head_para: "Countries in logistics network",
    body_text: "$10+",
    body_para: "Billion worth of goods moved around the world each year",
    footer_text: "Products used",
    icon1: Payment,
    icon2: Connect,
    icon1_text: "Payments",
    icon2_text: "Connect",
    background: Girltype,
    nav_img: MaerskWhite,
    closing_text:
      "See how Maersk tapped into new technology to make it easier to ship around the world",
    linear: `to bottom,
      rgba(0, 0, 255, 0.245),
      rgba(0, 0, 255, 0.468),
      rgba(0, 0, 255, 0.626),
      rgba(0, 0, 255, 0.83)`,
    color: "skyblue",
    img: MaerskLogo,
    grayImg: MaerskGray,
  },
  {
    id: 4,
    head_text: "+5.5%",
    head_para: "Uplift from Stripe's Global Payments Infrastructure",
    body_text: "+1%",
    body_para: "Uplift from Adaptive Acceptance",
    footer_text: "Products used",
    icon1: Payment,
    icon2: Connect,
    icon1_text: "Payments",
    icon2_text: "Connect",
    background: Construct,
    nav_img: TwilioWhite,
    closing_text:
      "See how Twilio increased authorization rates by 10% with Stripe",
    linear: `  to bottom,
      rgba(220, 20, 60, 0.245),
      rgba(220, 20, 60, 0.468),
      rgba(220, 20, 60, 0.626),
      rgba(220, 20, 60, 0.83) `,
    color: "red",
    img: TwilioLogo,
    grayImg: TwiliGray,
  },
];
