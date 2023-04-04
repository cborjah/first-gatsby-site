// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </main>
  );
};

/**
 * Adds a page title to this page utilizing the Gatsby Head API.
 *
 * Gatsby includes a built-in Head export that allows you to add elements to the document head of
 * your pages.
 */
export const Head = () => (
  <>
    <title>About Me</title>
    {/**
     * Meta tags, also known as metadata, are HTML snippets used in web development to describe the
     * content on a web page. Meta tags don't appear on the pages but instead exist within the
     * website's source code, also known as the HTML code, located in the website head. These tags
     * provide search engines with descriptions about the page content to help them determine what
     * the page is about and deliver the most relevant pages to search engine users.
     */}
    <meta name="description" content="Your description" />
  </>
);

// Step 3: Export your component
export default AboutPage;
