import React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";

const ProjectTemplate = ({
  pageContext: { title },
  data: {
    strapiProject: { description, title: dataTitle, image },
  },
}) => {
  console.log(image.localFile.publicURL);
  return (
    <>
      <Seo
        title={dataTitle.toUpperCase()}
        description={description}
        image={image.localFile.publicURL}
      />
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
    </>
  );
};

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`;

export default ProjectTemplate;
