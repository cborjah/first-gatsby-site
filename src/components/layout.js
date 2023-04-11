import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
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
 *
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * * useStaticQuery & graphql
 *
 * To pull data into a building-block component, you’ll use a pre-defined function from Gatsby
 * called useStaticQuery.
 *
 * The Gatsby package has a special pre-defined hook that lets you add GraphQL queries to your
 * building-block components: useStaticQuery.
 *
 * useStaticQuery takes one parameter: a templated string of the GraphQL query you want to run.
 * It returns the requested data, which you can store in a variable and then use throughout your
 * component.
 *
 * ! You can only call useStaticQuery once per file. If you need multiple fields, you can add
 * ! them all into a single query.
 */

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query GetMetadata {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
