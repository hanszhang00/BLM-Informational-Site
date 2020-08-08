import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        position
        date
        description {
          id
          name
        }
      }
    }
  }
`;

const Jobs = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query);

  const [idx, setIdx] = React.useState(0);

  const { company, position, date, description } = jobs[idx];

  return (
    <section className='section jobs'>
      <Title title='experience' />
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                key={job.strapiId}
                className={`job-btn ${index === idx && "active-btn"}`}
                onClick={() => setIdx(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{date}</p>
          {description.map((item) => {
            return (
              <div key={item.id} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'> </FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Link to='/about' className='btn center-btn'>
        More Info
      </Link>
    </section>
  );
};

export default Jobs;
