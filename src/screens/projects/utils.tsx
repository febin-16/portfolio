import {BiLogoPostgresql} from 'react-icons/bi';
import {FaGoogle, FaNodeJs, FaReact} from 'react-icons/fa';
import {SiNextdotjs, SiStripe, SiTailwindcss} from 'react-icons/si';

import {
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiDjango,
  SiSolidity ,
  SiFlask,
  SiNetlify 
  // FaAws, 
} from 'react-icons/si';

import btfLofo from 'assets/images/btf-logo.png';
import cfLofo from 'assets/images/cfLogo.png';
import s2eLofo from 'assets/images/s2e-logo.webp';
import viktreLofo from 'assets/images/viktre-logo.jpeg';
import porfolioLogo from '../../../public/logo.jpg';

export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}

export const comerciaProjects: Project[] = [
 
];

export const customProjects: Project[] = [
  {
    name: 'Hestia 2024',
    url: 'https://main.d2oi09vfqsksui.amplifyapp.com/',
    description: `Team size: 5. Part of the frontend team that developed the website for our college’s Techno-Cultural Fest, incorporating features such as
 Google authentication, profile updation, payment gateway integration, and event registration.`,
    img: cfLofo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiNetlify key="netlify" color="#5ED4F4" className="text-[28px]" />,
      <SiDjango key="django" color="#86cf35" className="text-[28px]" />,
      <BiLogoPostgresql key="psql" color="#3A6596" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      // <FaAws  key="serverless" color="#F1941D" className="text-[28px]" />,
    ],
  },
  {
    name: 'P2P Energy Trading System',
    description: `Team size: 4. This project enhances residential energy management by optimizing peak demand and distributed energy resources (DERs). We
 developed a P2P energy trading platform using blockchain and machine learning for fair, predictive energy distribution. Benefits
 include reduced energy costs, efficient resource use, and increased community engagement in energy conservation.`,
    img: btfLofo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiSolidity key="Solidity" color="#86cf35" className="text-[28px]" />,
      <SiFlask key="Flask" color="#86cf35" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
    ],
  },
  {
    name: 'IEI TKMCE',
    url: 'https://www.ieicsetkmce.in/',
    description: `Team size: 2. A website developed to manage the events organised by the club in our college.
    `,
    img: s2eLofo,
    stack: [
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiNetlify key="netlify" color="#5ED4F4" className="text-[28px]" />,

       
    ], 
  },
  {
    name: 'JobMatchu',
    url: 'https://jobmatchu.d3a6uzvzv3vvcl.amplifyapp.com/ ',
    description: `Team size: 4. Helping students find part-time jobs and connecting businesses with eager workers effortlessly.`,
    img: viktreLofo,
    stack: [
      <SiJavascript key="js" color="#E9D54B" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiDjango key="django" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
      <SiNetlify key="netlify" color="#5ED4F4" className="text-[28px]" />,
    ],
  },

  {
    name: 'My Portfolio',
    url: '',
    description: `Welcome to my portfolio! Explore my diverse range of projects,
      showcasing my expertise in building responsive and dynamic web applications.
      Dive into my code, discover my skills,
      and get in touch to discuss exciting opportunities. Let's bring ideas to life through technology!`,
    img: porfolioLogo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind" color="#3FBDCC" className="text-[28px]" />,
    ],
    git: 'https://github.com/febin-16/',
  },
];
