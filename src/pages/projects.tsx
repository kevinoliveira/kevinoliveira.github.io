import * as React from "react";
import Title from "../components/title";
import Links from "../components/links";
// import Link from "gatsby-link";

interface Notes {
	[key: string]: React.ReactNode;
}

export default class extends React.Component<{}, {}> {
	// note link
	nl = (id: string | number) => (
		<sup id={`fnref-${String(id)}`}>
			<a href={`#fn-${String(id)}`} className="footnote-ref">
				{id}
			</a>
		</sup>
	);

	footNotes = (notes: Notes) => {
		const noteList = Object.keys(notes).map(id => (
			<li id={`fn-${id}`} key={`#fn-${id}`}>
				<p>{notes[id]}</p>
				<a href={`#fnref-${id}`} className="footnote-backref">
					↩
				</a>
			</li>
		));

		return (
			<div className="footnotes">
				<hr />
				<ol>{noteList}</ol>
			</div>
		);
	};

	// custom note description
	cnd = (name: string, description: string, link?: string) => (
		<div>
			{name}: {description}. &nbsp;
			<a href={link} target="blank">
				link
			</a>
		</div>
	);

	// custom title
	ct = (title: string, ghLink?: string, extra?: { label: string; link: string }) => {
		return (
			<h3>
				{title} &nbsp;
				{ghLink ? (
					<a href={ghLink} target="blank">
						Repository
					</a>
				) : null}
				{ghLink && extra ? " | " : null}
				{extra ? (
					<a href={extra.link} target="blank">
						{extra.label}
					</a>
				) : null}
			</h3>
		);
	};

	public render() {
		const { nl, cnd, ct, footNotes } = this;

		const notes: Notes = {
			"1": cnd(
				"GastbyJS",
				"Gatsby lets you build blazing fast sites with your data, whatever the source. Liberate your sites from legacy CMSs and fly into the future",
				"https://www.gatsbyjs.org/",
			),
			"2": cnd(
				"Typescript",
				"JavaScript that scales, TypeScript is a typed superset of JavaScript that compiles to plain JavaScript",
				"http://www.typescriptlang.org",
			),
			"3": cnd(
				"Markdown",
				"a lightweight markup language with plain text formatting syntax",
				"https://en.wikipedia.org/wiki/Markdown",
			),
			"4": cnd(
				"ReactJS",
				"A JavaScript library for building user interfaces",
				"https://reactjs.org",
			),
			"5": cnd(
				"Server Side Rendering",
				" is the process of taking a client-side JavaScript Framework website and rendering it to static HTML and CSS on the server",
				"https://medium.com/@baphemot/whats-server-side-rendering-and-do-i-need-it-cb42dc059b38",
			),
			"6": cnd(
				"Visual Studio Code",
				"Code editing. Redefined",
				"https://code.visualstudio.com/",
			),
			"7": cnd(
				"URI Online Judge",
				"Problems & Contests",
				"https://www.urionlinejudge.com.br/",
			),
			"8": cnd(
				"Node Package Manager",
				"is the package manager for JavaScript and the world’s largest software registry",
				"https://www.npmjs.com/",
			),
			"9": cnd(
				"Command-line interface",
				"is a means of interacting with a computer program where the user (or client) issues commands to the program in the form of successive lines of text (command lines)",
				"https://en.wikipedia.org/wiki/Command-line_interface",
			),
		};

		return (
			<div>
				<Title notHome />
				<Links />
				<h1>My Projects</h1>

				{ct(
					"kevinoliveira.github.io",
					"https://github.com/kevinoliveira/kevinoliveira.github.io/tree/edit",
				)}
				<p>
					This website, i have used GastbyJS
					{nl(1)} and Typescript
					{nl(2)}, i write posts in Markdown
					{nl(3)} and special pages like this are actually React
					{nl(4)} components. to deploy the whole thing Gastby uses SSR
					{nl(5)} to create static html pages.
				</p>

				{ct(
					"URI online judge code",
					"https://github.com/kevinoliveira/uri-online-judge-code",
					{
						label: "Extension",
						link:
							"https://marketplace.visualstudio.com/items?itemName=kevinoliveira.uri-online-judge-code",
					},
				)}
				<p>
					This is a VScode
					{nl(6)} extension to interact with Uri Online Judge
					{nl(7)}, allowing you to discover problems, solve and submit without leaving
					VScode.
				</p>

				{ct("Markgen", undefined, {
					label: "NPM",
					link: "https://www.npmjs.com/package/markgen",
				})}
				<p>
					Is a Npm Package
					{nl(8)} that provides a CLI
					{nl(9)} for transpiling Markdown into a custom stylized html file, allowing you
					to create very easily a single page with some information.
				</p>

				{ct(
					"File Watcher For Contest",
					"https://github.com/kevinoliveira/FileWatcherForContest",
				)}
				<p>
					Very simple Shell script to compile, input entry and run C++ contest solutions.
					saves up a lot of time.
				</p>

				{ct("Final", "https://github.com/kevinoliveira/final", {
					label: "Web",
					link: "https://kevinoliveira.github.io/final/",
				})}
				<p>
					A very simple SPA
					{nl(10)}
					-ish solution to calculate how much you need to score in the final test, this is
					made specific to UNEB
					{nl(11)}
					(with is my university btw), this project was make when e knew nothing about web
					development but is actually very useful and people have using it for years, so i
					will not shutdown it.
				</p>

				{ct("Say It!", "https://github.com/kevinoliveira/sayit", {
					label: "Web",
					link: "https://kevinoliveira.github.io/sayit/",
				})}
				<p>
					Another SPA-ish, this is one is very simple, you write a message, click the
					button to copy a shareable link, send it to some one, and this person will only
					see the message when she opens the link, kinda like a envelope, but digital.
					Please don't be mean.
				</p>

				{ct("Dot Files", "https://github.com/kevinoliveira/dotFiles")}
				<p>
					Very straight forward, my config files to configure I3WM
					{nl(11)}
					&nbsp;I3Status
					{nl(11)}
					&nbsp; NeoVim
					{nl(11)}
					&nbsp; Rofi
					{nl(11)}
					&nbsp; Aplications Menu
					{nl(11)}
					&nbsp; VScode
					{nl(11)}
					&nbsp; Bash
					{nl(11)}
					&nbsp; and other stuff
				</p>

				{ct("Other Projects")}
				<p>I do have other projects, but they are either abandoned or private.</p>

				{footNotes(notes)}
			</div>
		);
	}
}
