import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaShareSquare,
  FaMailBulk,
} from "react-icons/fa";

const Project = ({ index, org }) => {
  // Extracting relevant data from the query
  const {
    title,
    description,
    website,
    facebook,
    twitter,
    instagram,
    email,
    image,
    category,
  } = org;

  return (
    <article className='project'>
      <Image fluid={image.childImageSharp.fluid} className='project-img' />
      <div className='project-info'>
        <span className='project-number'>0{index + 1}.</span>
        <a href={website}>
          <h3>{title}</h3>
        </a>
        <div className='project-stack'>
          <p className='project-desc'>{description}</p>
          {category.map((item) => {
            return <span id={item.id}>{item.stack}</span>;
          })}
        </div>
        <div className='project-links'>
          {facebook ? (
            <a href={facebook}>
              <FaFacebookSquare className='project-icon' />
            </a>
          ) : null}
          {twitter ? (
            <a href={twitter}>
              <FaTwitterSquare className='project-icon' />
            </a>
          ) : null}
          {instagram ? (
            <a href={instagram}>
              <FaInstagram className='project-icon' />
            </a>
          ) : null}
          {email ? (
            <a href={email}>
              <FaMailBulk className='project-icon' />
            </a>
          ) : null}
          <a href={website}>
            <FaShareSquare className='project-icon' />
          </a>
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {};

export default Project;
