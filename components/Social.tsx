//@ts-nocheck
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Danindu-Seniya" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/danindu-nawarathna/" },
  { icon: <FaTwitter />, path: "https://twitter.com/Danindu_Seniya" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/danindu.nawarathna" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link legacyBehavior key={index} href={item.path} passHref>
            <a className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
