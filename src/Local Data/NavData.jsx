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
