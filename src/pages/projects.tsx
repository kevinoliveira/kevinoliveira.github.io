import * as React from "react";
import Title from "../components/title";
import Links from "../components/links";
// import Link from "gatsby-link";

const SecondPage = () => (
  <div>
    <Title notHome />
    <Links />
    <hr />
    <h1>Hi from the projects page</h1>
    <p>Welcome to nowhere</p>
    <a href="/">Go back to the homepage</a>
  </div>
);

export default SecondPage;
