import * as React from "react";
import { Layout } from "../components";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import * as styles from "../styles/home.module.css";

const HomePage = ({ data }) => {
  const { fluid } = data.file.childImageSharp;

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={fluid} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
