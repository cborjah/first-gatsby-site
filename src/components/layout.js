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

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
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
