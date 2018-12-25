declare const graphql: (query: TemplateStringsArray) => void;
declare module "react-helmet";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    allMarkdownRemark: {
      totalCount: number;
      edges: {
        node: {
          id: string;
          frontmatter: {
            path: string;
            title: string;
            date: string;
            category: string;
          };
        };
      }[];
    };
  };
}

export type language = "en" | "pt";
