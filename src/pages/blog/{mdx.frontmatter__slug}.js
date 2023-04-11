import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

/**
 * Gatsby’s File System Route API defines a special syntax for naming the files in your src/pages
 * directory, which lets you dynamically create new pages for your site based on a collection of
 * nodes in the data layer.
 *
 * For example, imagine your site had a bunch of Product nodes in the data layer. You could use the
 * File System Route API to create one product page template component. Then, when you built your
 * site, Gatsby would combine that page template with the data for each Product node and generate a
 * new page for each product. And if you decided you needed to make changes to your product page,
 * you’d only have to edit the template component, and Gatsby would update all your product pages
 * the next time it rebuilt the site.
 *
 * To create a collection route:
 * - Decide what type of node you want to create pages from.
 * - Choose which field on that node to use in the route (the URL) for your pages.
 * - Create a new page component in your src/pages directory using the following naming convention:
 *   {nodeType.field}.js.
 * - Don’t forget to include the curly braces ({}) in your filenames to indicate the dynamic part of
 *   the route!
 * - For example, if you wanted to create a separate page for each Product node, and you wanted to
 *   use the product’s name field in the URL, you’d create a new file at
 *   src/pages/{Product.name}.js. Then Gatsby would create those pages at routes like /water-bottle/
 *   or /sweatshirt/ or /notebook/.
 *
 * When you use Gatsby’s File System Route API, it automatically adds some props into the page
 * template component for each page:
 *
 * - The id for the data layer node used to create the page.
 * - The field you used to create the dynamic part of the route. (In this case, the
 *   frontmatter__slug field.)
 *
 * Under the hood, Gatsby makes both of these values available to use as query variables in your
 * page queries.
 */

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
