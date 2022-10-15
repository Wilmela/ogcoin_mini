import { FaCheckCircle } from 'react-icons/fa';
import images from '../assets/images';

export const navLinks = [
  { id: '', title: 'Home' },
  { id: 'rates', title: 'Rates' },
  { id: 'about', title: 'About' },
  { id: 'whitePaper', title: 'White-Paper' },
  { id: 'team', title: 'Team' },
];

const icon = 'text-lg text-blue-600';
export const listedAims = [
  {
    id: 1,
    icon: <FaCheckCircle className={icon} />,
    text: (
      <p>
        <b> Spearhead </b>
        the healthcare revolution in Africa with a unique opportunity for the
        advancement of a unified HealthCare System through Cryptocurrency
      </p>
    ),
  },
  {
    id: 2,
    icon: <FaCheckCircle className={icon} />,
    text: (
      <p>
        <b>Create </b>
        a unified payment system worldwide no matter the treatment centre
        for both practitioners and clients alike with no need for international
        currency conversion and eliminating the need for integrated Eftpos
        systems and cash as funds are instantly transferred between payer and
        payee through our systems utilizing OGC.
      </p>
    ),
  },
  {
    id: 3,
    icon: <FaCheckCircle className={icon} />,
    text:
  <p>
    <b>Aid </b>
    in the advancement of a universal Health Care Management System
  </p>,
  },
];

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
