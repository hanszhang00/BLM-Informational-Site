import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import Typical from "react-typical";

const Error = () => {
  return (
    <Layout>
      <main className='error-page'>
        <div className='error-container'>
          <Typical
            steps={["Oops, it's a dead end...", 10000, "", 2000]}
            loop={Infinity}
            wrapper='h1'
          />
          <Link to='/' className='btn'>
            back home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
