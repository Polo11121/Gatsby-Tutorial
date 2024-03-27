import * as React from "react";
import { Layout } from "../../components";
import * as styles from "../../styles/projects.module.css";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const ProjectsPage = ({ data }) => {
  const projects = data.projects.nodes;
  const { contact } = data.contact.siteMetadata;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <ul className={styles.list}>
          {projects.map((project) => (
            <li>
              <Link
                to={`/projects/${project.frontmatter.slug}`}
                key={project.id}
              >
                <div>
                  <h3>{project.frontmatter.title}</h3>
                  <Img
                    fluid={project.frontmatter.thumb.childImageSharp.fluid}
                  />
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;

export default ProjectsPage;
