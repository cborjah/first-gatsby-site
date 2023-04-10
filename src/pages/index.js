import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

/**
 * The filesystem source plugin lets you query data about files, but it doesn’t let you
 * use the data inside the files themselves.
 *
 * To make this possible, Gatsby supports transformer plugins, which take the raw content from
 * source plugins and transform it into something more usable.
 *
 * e.g. gatsby-plugin-mdx
 *
 * This plugin allows use of MDX, a file format that allows Markdown and JSX alongside your text
 * content.
 *
 */

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
