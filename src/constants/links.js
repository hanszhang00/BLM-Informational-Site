import React from "react";
import { Link } from "gatsby";

/**
 * Encoding link data as an array to be used in multiple places
 * Included the key to be mapped
 */
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "org",
    url: "/orgs/",
  },
  {
    id: 4,
    text: "article",
    url: "/articles/",
  },
  {
    id: 4,
    text: "video",
    url: "/videos/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  );
});

// Can also import my customary style here to style the link
// Always apply the default page link style
export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  );
};
