import fs from "fs";
import { config } from "./config";
import { setup } from "./template"
import { getStyles, getPosterStyles } from "./styles";
import { getLayouts, getMarkdowns, getAssets, readMarkdown } from "./files"


console.time("BUILD")
const n = setup();
const s = getStyles();
const s2 = getPosterStyles();

const context = {
  name: "Jake",
  age: 31,
  plinks: [
    { label: "Artlets", link: "/projects.html" },
    { label: "Projects", link: "/projects.html" },
    { label: "Blog", link: "/blog.html" },
    { label: "About Me", link: "/about.html" },
  ]
}

console.log(n)

const z = n.render("home.njk", context);
fs.writeFileSync("output/index.html", z, "UTF-8");
fs.writeFileSync("output/s.css", s.css.toString(), "UTF-8");


const z2 = n.render("post.njk", context);
fs.writeFileSync("output/post.html", z2, "UTF-8");
fs.writeFileSync("output/post.css", s2.css.toString(), "UTF-8");

console.timeEnd("BUILD")



// console.log(getLayouts());
// console.log(getMarkdowns());
// console.log(getAssets());
const files = getMarkdowns();
const parsed = files.map(readMarkdown);
parsed.forEach(console.log);






console.log(files)




