import React from "react";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import Seo from "../components/Seo";

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  console.log(projects);
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  );
};

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        featured
        github
        id
        slug
        title
        url
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`;

export default ProjectsPage;
