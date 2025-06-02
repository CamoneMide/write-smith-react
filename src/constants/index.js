import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import whyI1 from "../assets/images/stats.png";
import whyI2 from "../assets/images/revision.png";
import whyI3 from "../assets/images/complete.png";
import whyI4 from "../assets/images/reliability.png";
import whyI5 from "../assets/images/on-time.png";

import ousI1 from "../assets/images/suitcase.png";
import ousI2 from "../assets/images/resume.png";
import ousI3 from "../assets/images/graduation-cap.png";
import ousI4 from "../assets/images/resume-1.png";
import ousI5 from "../assets/images/proofreading.png";
import ousI6 from "../assets/images/preparation.png";

import ouPI from "../assets/images/pnk.png";
import ouYI from "../assets/images/yel.png";
import ouGI from "../assets/images/grn.png";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#service", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export const socLinks = [
  { id: 1, to: "", sicon: FaFacebookF },
  { id: 2, to: "", sicon: FaWhatsapp },
  { id: 3, to: "", sicon: FaLinkedinIn },
];

export const whyConts = [
  {
    id: 1,
    img: whyI1,
    whH: "Business Growth",
    whP: "Our editing and review expertise will help your business grow",
  },
  {
    id: 2,
    img: whyI2,
    whH: "Unlimited Revisions",
    whP: "We ensure that your work is painstakingly reviewed until perfection.",
  },
  {
    id: 3,
    img: whyI3,
    whH: "Ultimate Perfection",
    whP: "We deliver more than expectation.",
  },
  {
    id: 4,
    img: whyI4,
    whH: "Smart Experience",
    whP: "Our customer service is unparalleled.",
  },
  {
    id: 5,
    img: whyI5,
    whH: "Strict Deadline",
    whP: "We don’t betray deadlines.",
  },
  {
    id: 6,
    img: whyI4,
    whH: "Reputed Company",
    whP: "We are known for our credibility and dexterity.",
  },
];

export const osConts = [
  {
    id: 1,
    img: ousI1,
    imgat: ouPI,
    osH: "Job Application",
    osP: "Our team of experts will review and improve your written drafts to project your strengths which will ultimately improve the success probability of your applications.",
  },
  {
    id: 2,
    img: ousI2,
    imgat: ouYI,
    osH: "CV/Resume and Cover letter",
    osP: "We review CVs/resumes and project your strengths to your would-be employers.",
  },
  {
    id: 3,
    img: ousI3,
    imgat: ouGI,
    osH: "College Application",
    osP: "Our team of experts will help you search for relevant funding opportunities and provide you all the information required to put in an excellent application.",
  },
  {
    id: 4,
    img: ousI4,
    imgat: ouPI,
    osH: "Personal Statement Review",
    osP: "Our team of experts will review and improve your written drafts to project your strengths which will ultimately improve the success probability of your applications.",
  },
  {
    id: 5,
    img: ousI5,
    imgat: ouYI,
    osH: "Proofreading",
    osP: "Our team of experts will review and improve your written drafts to project your strengths which will ultimately improve the success probability of your applications.",
  },
  {
    id: 6,
    img: ousI6,
    imgat: ouGI,
    osH: "IELTS Writting Module PREP",
    osP: "We prepare students for the writing module by reviewing your practice essays and giving honest and professional feedback.",
  },
];

export const opricOld = [
  {
    id: 1,
    htext: "CV & Cover Letter Review",
    ptext1: "CV/Resume review",
    price1: 20.0,
    ptext2: "Cover letter review",
    price2: 15.0,
    ptext3: "Cover letter + CV review",
    price3: 30.0,
    ptext4: "Cover letter/CV writing from scratch",
    price4: 50.0,
  },
  {
    id: 2,
    htext: "Proofreading",
    ptext1: "5000 words or below",
    price1: 20.0,
    ptext2: "5000 U+2013 10000 words",
    price2: 25.0,
    ptext3: "10000 U+2013 20000 words",
    price3: 50.0,
    ptext4: "Over 20000 words",
    price4: 100.0,
  },
  {
    id: 3,
    htext: "Job Application",
    ptext1: "Review of application",
    price1: 40.0,
    ptext2: "Preparing from scratch",
    price2: 85.0,
  },
  {
    id: 4,
    htext: "Personal Statement",
    ptext1: "500 words or below",
    price1: 10.0,
    ptext2: "Above 500 words",
    price2: 20.0,
  },
  {
    id: 5,
    htext: "College Application",
    ptext1: "Review of application",
    price1: 50.0,
    ptext2: "Preparing from scratch",
    price2: 100.0,
  },
  {
    id: 6,
    htext: "IELTS Writing PREP",
    ptext1:
      "One month’s review of practice essays (up to 12 essays and letters)",
    price1: 75.0,
  },
];
export const oprics = [
  {
    id: 1,
    htext: "CV & Cover Letter Review",
    items: [
      {
        id: 1.1,
        itHtext: "CV & Cover Letter Review",
        ptext: "CV/Resume review",
        price: 20.0,
        isAddedToCart: false,
      },
      {
        id: 1.2,
        itHtext: "CV & Cover Letter Review",
        ptext: "Cover letter review",
        price: 15.0,
        isAddedToCart: false,
      },
      {
        id: 1.3,
        itHtext: "CV & Cover Letter Review",
        ptext: "Cover letter + CV review",
        price: 30.0,
        isAddedToCart: false,
      },
      {
        id: 1.4,
        itHtext: "CV & Cover Letter Review",
        ptext: "Cover letter/CV writing from scratch",
        price: 50.0,
        isAddedToCart: false,
      },
    ],
  },
  {
    id: 2,
    htext: "Proofreading",
    items: [
      {
        id: 2.1,
        itHtext: "Proofreading",
        ptext: "5000 words or below",
        price: 20.0,
        isAddedToCart: false,
      },
      {
        id: 2.2,
        itHtext: "Proofreading",
        ptext: "5000 U+2013 10000 words",
        price: 25.0,
        isAddedToCart: false,
      },
      {
        id: 2.3,
        itHtext: "Proofreading",
        ptext: "10000 U+2013 20000 words",
        price: 50.0,
        isAddedToCart: false,
      },
      {
        id: 2.4,
        itHtext: "Proofreading",
        ptext: "Over 20000 words",
        price: 100.0,
        isAddedToCart: false,
      },
    ],
  },
  {
    id: 3,
    htext: "Job Application",
    items: [
      {
        id: 3.1,
        itHtext: "Job Application",
        ptext: "Review of application",
        price: 40.0,
        isAddedToCart: false,
      },
      {
        id: 3.2,
        itHtext: "Job Application",
        ptext: "Preparing from scratch",
        price: 85.0,
        isAddedToCart: false,
      },
    ],
  },
  {
    id: 4,
    htext: "Personal Statement",
    items: [
      {
        id: 4.1,
        itHtext: "Personal Statement",
        ptext: "500 words or below",
        price: 10.0,
        isAddedToCart: false,
      },
      {
        id: 4.2,
        itHtext: "Personal Statement",
        ptext: "Above 500 words",
        price: 20.0,
        isAddedToCart: false,
      },
    ],
  },
  {
    id: 5,
    htext: "College Application",
    items: [
      {
        id: 5.1,
        itHtext: "College Application",
        ptext: "Review of application",
        price: 50.0,
        isAddedToCart: false,
      },
      {
        id: 5.2,
        itHtext: "College Application",
        ptext: "Preparing from scratch",
        price: 100.0,
        isAddedToCart: false,
      },
    ],
  },
  {
    id: 6,
    htext: "IELTS Writing PREP",
    items: [
      {
        id: 6.1,
        itHtext: "IELTS Writing PREP",
        ptext:
          "One month’s review of practice essays (up to 12 essays and letters)",
        price: 75.0,
        isAddedToCart: false,
      },
    ],
  },
];

export const cmyaccordion = [
  {
    id: 1,
    accH: "Which license do I need?",
    accP: "Uniquely leverage other&apos;s distinctive infomediaries rather than leveraged supply chains. Continually seize distributed collaboration and idea-sharing whereas user.",
  },
  {
    id: 2,
    accH: "How do I get access to a theme?",
    accP: "Rapidiously incentivize virtual e-commerce and exceptional e-tailers. Progressively network focused catalysts for change without orthogonal benefits. Dramatically empower.",
  },
  {
    id: 3,
    accH: "How do I see previous order?",
    accP: "Proactively monetize long-term high-impact innovation and scalable relationships. Dynamically mesh principle-centered functionalities before next-generation best practices. Distinctively empower.",
  },
  {
    id: 4,
    accH: "How can set notification?",
    accP: "Proactively monetize long-term high-impact innovation and scalable relationships. Dynamically mesh principle-centered functionalities before next-generation best practices. Distinctively empower.",
  },
];
