import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Org from "../components/Org";
import Title from "../components/Title";

const OrgsPage = ({
  data: {
    allStrapiOrgs: { nodes: orgs },
  },
}) => {
  return (
    <Layout>
      <section className='section projects'>
        <Title title='orgs'> </Title>
        <div className='section-center projects-center'>
          {orgs.map((org, idx) => {
            return <Org key={org.id} index={idx} org={org} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiOrgs {
      nodes {
        id
        title
        description
        website
        facebook
        twitter
        instagram
        email
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category {
          id
          stack
        }
      }
    }
  }
`;

export default OrgsPage;
