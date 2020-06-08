import fs from "fs";
import { setup } from "./template"
import { getStyles } from "./styles";

console.time("BUILD")
const n = setup();
const s = getStyles();

const context = {
  name: "Jake",
  age: 31,
  plinks: [
    { label: "Projects", link: "/projects.html" },
    { label: "Blog", link: "/blog.html" },
    { label: "About Me", link: "/about.html" },
  ]
}


const z = n.render("home.njk", context);


fs.writeFileSync("output/index.html", z, "UTF-8");
fs.writeFileSync("output/s.css", s.css.toString(), "UTF-8");
console.timeEnd("BUILD")