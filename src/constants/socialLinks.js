import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
  FaSafari,
  FaGithub,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className='social-icon'></FaFacebookSquare>,
    url: "https://www.facebook.com/BlackLivesMatter/",
  },
  {
    id: 2,
    icon: <FaTwitterSquare className='social-icon'></FaTwitterSquare>,
    url: "https://twitter.com/blklivesmatter?lang=en",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className='social-icon'></FaInstagramSquare>,
    url: "https://www.instagram.com/blklivesmatter/?hl=en",
  },
  {
    id: 4,
    icon: <FaSafari className='social-icon'></FaSafari>,
    url: "https://blacklivesmatter.com/",
  },
  {
    id: 5,
    icon: <FaYoutube className='social-icon'></FaYoutube>,
    url: "https://www.youtube.com/results?search_query=%23blacklivesmatter",
  },
  {
    id: 6,
    icon: <FaGithub className='social-icon'></FaGithub>,
    url: "#",
  },
];
const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className='social-link'>
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  );
};
