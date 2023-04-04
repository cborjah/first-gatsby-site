// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
/**
 * * Link
 *
 * The Gatsby Link component provides a performance feature called preloading. This means that the
 * resources for the linked page are requested when the link scrolls into view or when the mouse
 * hovers on it. That way, when the user actually clicks on the link, the new page can load super
 * quickly.
 *
 * Use the Link component for linking between pages within your site. For external links
 * to pages not created by your Gatsby site, use the regular HTML <a> tag.
 */

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
    </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
