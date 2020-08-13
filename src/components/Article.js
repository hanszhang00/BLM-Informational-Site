import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import { Link } from "gatsby";

const Article = ({ article }) => {
  // Extracting relevant data from the query
  const {
    title,
    description,
    date,
    slug,
    isRef,
    url,
    website,
    image,
  } = article;

  const component = isRef ? (
    <a href={url} className='blog'>
      <article>
        <Image fluid={image.childImageSharp.fluid} className='blog-img' />
        <div className='blog-card'>
          <h4> {title}</h4>
          <p>{description}</p>
          <div className='blog-footer'>
            <p>{website}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </a>
  ) : (
    <Link to='/' className='blog'>
      <article>
        <Image fluid={image.childImageSharp.fluid} className='blog-img' />
        <div className='blog-card'>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className='blog-footer'>
            <p>{website}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
  return component;
};

export default Article;
