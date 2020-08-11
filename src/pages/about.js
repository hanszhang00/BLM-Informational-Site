import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Title from "../components/Title";
import Image from "gatsby-image";
const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { title, info, stack, image } = nodes[0];
  return (
    <Layout>
      <section className='about-page'>
        <div className='section-center about-center'>
          <Image fluid={image.childImageSharp.fluid} className='about-img' />
          <article className='about-text'>
            <Title title={title} />
            <p>{info}</p>
            <div className='about-stack'>
              {stack.map((item) => {
                return <span key={item.id}>{item.stack}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          stack
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default About;
