import React from "react";
import { FaBuilding, FaBook, FaPlay } from "react-icons/fa";
export default [
  {
    id: 1,
    icon: <FaBuilding className='service-icon' />,
    title: "Organizations",
    to: "/orgs/",
    text: `Organizations that support the BLM movement for you to browse through and donate to`,
  },
  {
    id: 2,
    icon: <FaBook className='service-icon' />,
    title: "Articles",
    to: "/articles/",
    text: `BLM related articles to help you become more educated in the movement and its history`,
  },
  {
    id: 3,
    icon: <FaPlay className='service-icon' />,
    title: "Videos",
    to: "/videos/",
    text: `Relevant talks and videos that you can watch to help yourself become more educated in the movement `,
  },
];
