import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import Typical from "react-typical";

const query = graphql`
  {
    file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <header className='hero'>
      <div className='hero-center'>
        <h1>Black Lives Matter</h1>
        {/* <h4>the relevant resources to be more educated in the movement</h4> */}
        <Typical
          steps={[
            "become more educated about the history of BLM",
            2000,
            "take action to support the movement TODAY",
            1500,
            "help us contribute if you can!",
            1000,
          ]}
          loop={Infinity}
          wrapper='h4'
        />
      </div>
    </header>
  );
};

export default Hero;
