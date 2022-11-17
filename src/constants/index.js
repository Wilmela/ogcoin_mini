import { FaCheckCircle } from 'react-icons/fa';
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineContacts,
} from 'react-icons/ai';
// import { IoPricetagOutline } from 'react-icons/io5';
import { BsInfoCircle } from 'react-icons/bs';
import { GoReport } from 'react-icons/go';

import images from '../assets/images';

// Navigation links
export const navLinks = [
  { id: '', title: 'Home', icon: <AiOutlineHome /> },
  // { id: 'rates', title: 'Rates', icon: <IoPricetagOutline /> },
  {
    id: 'about',
    title: 'About',
    icon: <BsInfoCircle />,
    subMenus: [
      {
        id: 'values',
        title: 'Values',
      },
      {
        id: 'roadMap',
        title: 'Roadmap',
      },
      {
        id: 'faq',
        title: 'Faq',
      },
    ],
  },
  { id: 'whitePaper', title: 'White-Paper', icon: <GoReport /> },
  { id: 'team', title: 'Team', icon: <AiOutlineTeam /> },
  { id: 'contact', title: 'Contact', icon: <AiOutlineContacts /> },
];

// About page
const icon = 'text-lg text-blue-600';
export const listedAims = [
  {
    id: 1,
    icon: <FaCheckCircle className={icon} />,
    text: (
      <p>
        Spearhead the healthcare revolution
        in Africa with a unique opportunity for
        the advancement of a unified HealthCare System through Cryptocurrency
      </p>
    ),
  },
  {
    id: 2,
    icon: <FaCheckCircle className={icon} />,
    text: (
      <p>
        Create a unified payment system worldwide no matter the treatment centre
        for both practitioners and clients alike with no need for international
        currency conversion and eliminating the need for
        integrated Eftpos systems and cash as funds are
        instantly transferred between payer and payee through our systems utilizing OGC.
      </p>
    ),
  },
  {
    id: 3,
    icon: <FaCheckCircle className={icon} />,
    text:
  <p>
    Aid in the advancement of a universal Health Care Management System
  </p>,
  },
];

// Exchanges
export const exchanges = [
  {
    url: 'https://www.mintme.com/token/OGCoin-E-health-Africa/trade',
    logo: images.mintMe,
    name: 'MINT ME',
    symbol: 'MINTME',
    available: true,
  },
  {
    url: 'https://tarmex.io/trade/OGC_ETH',
    logo: images.tarmax,
    name: 'TARMEX EXCHANGE',
    symbol: 'TAR',
    available: true,
  },
  {
    url: '#exchanges',
    logo: images.uniswap,
    name: 'UNISWAP',
    symbol: 'UNI',
    available: false,
  },
];

// Values
export const values = [
  {
    icon: images.figure1,
    title: 'Saftey',
    desc: 'We believe saving must be at the forefront of decision making.',
  },
  {
    icon: images.figure3,
    title: 'Respect',
    desc: 'We believe respect to each other will guide us in all our decisions. ',
  },
  {
    icon: images.figure4,
    title: 'Honesty',
    desc: 'We believe that honesty is an integral for working relationships. ',
  },
  {
    icon: images.figure5,
    title: 'Integrity',
    desc: 'We believe that integrity is at the heart of our individual and cooperate actions. ',
  },
  {
    icon: images.figure6,
    title: 'Team Work',
    desc: 'We believe team empires our individual strength. ',
  },
];

// Team page
export const teamMembers = [
  {
    id: 1,
    image: images.ogom,
    name: 'OGOMEGBUNEME ADIGWE',
    position:
			'CHIEF EXECUTIVE OFFICER (CEO), BLOCKCHAIN DEVELOPER - OGSOFT SOLUTIONS LTD.',
    fb: '//www.facebook.com/ogsoftsolutions',
    linkedIn: 'https://www.linkedin.com/in/ogom-adigwe-55a0a41b8/',
  },
  {
    id: 2,
    image: images.enoch,
    name: 'ENOCH KAPAPIRO',
    position: 'CHIEF OPERATING OFFICER (COO), OGSOFT SOLUTIONS LTD',
    fb: 'https://mobile.facebook.com/profile.php?id=531338572&_rdc=1&_rdr',
    linkedIn: 'https://www.linkedin.com/in/enoch-kapapiro-44b57b2b/',
  },
  {
    id: 3,
    image: images.carl,
    name: 'CARL KAPAPIRO',
    position: 'DIRECTOR - MARKETING AND SALES, - OGSOFT SOLUTIONS LTD',
    fb: 'https://mobile.facebook.com/profile.php?id=1013978709&_rdc=1&_rdr',
    linkedIn: 'https://www.linkedin.com/in/carl-kapapiro-9100251a/',
  },
  {
    id: 4,
    image: images.katrina,
    name: 'KATRINA KANARD',
    position: 'DIRECTOR - BUSINESS STRATEGY - OGSOFT SOLUTIONS LTD.',
    fb: '/https://mobile.facebook.com/profile.php?id=100024869401436&_rdc=1&_rdr',
    linkedIn: 'https://www.linkedin.com/in/katrina-kynard-66b86150/',
  },
  {
    id: 5,
    image: images.tamara,
    name: 'TAMARA-EBI NELSON EYEKOROGHA',
    position: 'LEGAL ADVISER - OGSOFT SOLUTIONS LTD.',
    fb: 'https://mobile.facebook.com/profile.php?id=100079800851936&_rdc=1&_rdr',
    linkedIn: 'https://www.linkedin.com/in/tamara-ebi-eyekorogha-a98147102/',
  },
];

// FAQ
export const faqs = [
  {
    question: 'What is OGCoin e-Health Africa?',
    answer:
			'OGCoin e-health Africa is an ERC20-compliant token on the Ethereum Blockchain..',
  },
  {
    question: 'Is there an OGCoin e-Health Africa wallet?',
    answer:
			'No. Any wallet that supports Ethereum can store OGCoin E-health Africa. The recommended wallet is the MetaMask browser extension, Trust Wallet for mobile devices.',
  },
  {
    question:
			'Can i invest in OGCoin e-Health Africa if am not based in Africa?',
    answer:
			'Yes. You can invest from anywhere in the world as long as you have a computer or mobile device with internet connection.',
  },
  {
    question: 'Is OGCoin e-Health Africa transparent?',
    answer:
			'Yes, it is. It is on the Ethereum Blockchain public ledger system.',
  },

  {
    question:
			'Is OGCoin e-health Africa a Ponzi, Pyramid Scheme, MLM, Scam, ICO or security?',
    answer: 'No.',
  },
  {
    question: 'Can OGCoin e-health Africa be used as a day-day currency?',
    answer:
			'Yes. OGCoin e-health Africa was designed to be a Store of Value and also a Medium of Exchange which will allow users to use OGCoin as a day-to-day currency because it follows the ERC20 standard.',
  },
  {
    question: 'What is OGCoin e-health Africa long-term goal?',
    answer:
			'To make OGCoin e-health Africa the number 1 used currency in Africa and ensure that the healthcare continues to participate in the benefit from blockchain technologies. ',
  },
  {
    question: 'How do i know OGCoin e-health Africa is secure?',
    answer:
			'OGCoin is built on top of the revolutionary and cryptographically secure open blockchain technologies and adheres to strict security and global government laws and regulations.',
  },
];
