import * as React from "react";
import Travolta from "../components/travolta";
// import Link from "gatsby-link";

const NotFoundPage = () => (
	<div>
		<h1>HTTP 404</h1>
		<p>
			<b>Are you sure about this link?</b>
		</p>
		<a href="/">go to home page</a>
		<br />
		<Travolta />
	</div>
);

export default NotFoundPage;
