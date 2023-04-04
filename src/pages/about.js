// Step 1: Import React
import * as React from "react";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </main>
  );
};

/**
 * Adds a page title to this page utilizing the Gatsby Head API.
 *
 * Gatsby includes a built-in Head export that allows you to add elements to the document head of
 * your pages.
 */
export const Head = () => <title>About Me</title>;

// Step 3: Export your component
export default AboutPage;
