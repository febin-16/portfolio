import {BiLogoPostgresql} from 'react-icons/bi';
import {FaCss3, FaGoogle, FaHtml5, FaNodeJs, FaReact} from 'react-icons/fa';
import {
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const skillset = [
  {
    name: '',
    items: [
      {
        label: 'Javascipt',
        icon: <SiJavascript color="#E9D54B" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'TypeScript',
        icon: <SiTypescript color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
    ],
  },
  {
    name: 'Front-End',
    items: [
      {
        label: 'React',
        icon: <FaReact color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'Next.js',
        icon: <SiNextdotjs className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'HTML5',
        icon: <FaHtml5 color="#DE4B25" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'CSS3',
        icon: <FaCss3 color="#2873BC" className="text-[48px] sm:text-[64px]" />,
        expirience: 3,
      },
      {
        label: 'Tailwind',
        icon: <SiTailwindcss color="#3FBDCC" className="text-[48px] sm:text-[64px]" />,
        expirience: 2,
      },
    ],
  },
  {
    name: 'Back-End',
    items: [
      {
        label: 'Node.js',
        icon: <FaNodeJs color="#86cf35" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'Express',
        icon: <SiExpress color="#818283" className="text-[48px] sm:text-[64px]" />,
        expirience: 1,
      },
      {
        label: 'Postgresql',
        icon: <BiLogoPostgresql color="#3A6596" className="text-[48px] sm:text-[64px]" />,
        expirience: 2,
      },
    ],
  },
  {
    name: 'Others',
    items: [
      {
        label: 'Stripe',
        icon: <SiStripe color="#6058f8" className="text-[48px] sm:text-[64px]" />,
        expirience: null,
      },
      {
        label: 'Google API (Map, Auth ...)',
        icon: <FaGoogle className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        expirience: null,
      }
    ],
  },
];
