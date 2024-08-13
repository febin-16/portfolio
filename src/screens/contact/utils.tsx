import {BiLogoGmail} from 'react-icons/bi';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const handleOpenSocialNetwork = (url: string) => () => {
  window.open(url, '_blank');
};

const handleOpenGmail = () => {
  window.location.href = `mailto:${'febinparappuram@gmail.com'}`;
};

export const socialNetworks = (size: number = 54, isFooter = false) => [
  <button
    title="linkedin"
    key="linkedin"
    onClick={handleOpenSocialNetwork('https://www.linkedin.com/in/febin-p-biju-804100202/')}
  >
    <FaLinkedin
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button title="github" key="github" onClick={handleOpenSocialNetwork('https://github.com/febin-16/')}>
    <FaGithub
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button title="gmail" key="gmail" onClick={handleOpenGmail}>
    <BiLogoGmail
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
];
