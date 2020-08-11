import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import Title from "../components/Title";

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className='projects-page'>
        <Projects
          projects={projects}
          title='organizations'
          customStyle='white'
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          stack
        }
      }
    }
  }
`;

export default ProjectsPage;
