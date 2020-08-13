import React from "react";
import Title from "./Title";
import services from "../constants/services";
import { Link } from "gatsby";
const Services = () => {
  return (
    <section className='section bg-grey resources'>
      <Title title='resources' />
      <div className='section-center services-center'>
        {services.map((service) => {
          const { id, icon, title, text, to } = service;

          return (
            <Link to={to}>
              <article key={id} className='service'>
                {icon}
                <h4>{title}</h4>
                <div className='underline'></div>
                <p>{text}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
