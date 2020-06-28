console.clear();
console.log(new Date().toString())

import fs from "fs";
import path from "path";

import { IPage } from "./types";
import nunjucks from "nunjucks";
import sass from "node-sass";



// 1. define files to compiple
const pagesToCreate: IPage[] = [
  {
    htmlOutputName: "index.html",
    cssOutputName: "index.css",
    nunjunksTemplate: "pages/home/home.njk",
    sassFile: "pages/home/main.scss",
    context: {
      hideHome: true,
      // name: "Jake",
      // age: 31,
    }
  },{
    cssOutputName:"404.css",
    htmlOutputName: "404.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {message:"Sorry, can't find anything"}
  },{
    cssOutputName:"artlets.css",
    htmlOutputName: "artlets.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {message:"Artlets"}
  },{
    cssOutputName:"projects.css",
    htmlOutputName: "projects.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {message:"Projects"}
  },{
    cssOutputName:"blog.css",
    htmlOutputName: "blog.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {message:"Blog"}
  },{
    cssOutputName:"about.css",
    htmlOutputName: "about.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {message:"About Me"}
  },{
    cssOutputName:"secret.css",
    htmlOutputName: "secret.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {message:"Secret"}
  }
]

// 2. compile html

const n = nunjucks.configure(["src"], {
  autoescape: true,
  noCache: true
});

pagesToCreate.forEach(p => {
  const html = n.render(p.nunjunksTemplate, p.context);
  fs.writeFileSync(path.join("output/", p.htmlOutputName), html, "UTF-8");
})


// 3. complie scss

pagesToCreate.forEach(p => {
  const css = sass.renderSync({ file: path.join("src/", p.sassFile) }).css.toString();
  fs.writeFileSync(path.join("output/", p.cssOutputName), css, "UTF-8");
})



// console.time("BUILD")
// const n = setup();
// const s = getStyles();
// const s2 = getPosterStyles();

// const context = {
//   name: "Jake",
//   age: 31,
//   plinks: [
//     { label: "Artlets", link: "/projects.html" },
//     { label: "Projects", link: "/projects.html" },
//     { label: "Blog", link: "/blog.html" },
//     { label: "About Me", link: "/about.html" },
//   ]
// }

// console.log(n)

// const z = n.render("home.njk", context);
// fs.writeFileSync("output/index.html", z, "UTF-8");
// fs.writeFileSync("output/s.css", s.css.toString(), "UTF-8");


// const z2 = n.render("post.njk", context);
// fs.writeFileSync("output/post.html", z2, "UTF-8");
// fs.writeFileSync("output/post.css", s2.css.toString(), "UTF-8");

// console.timeEnd("BUILD")



// // console.log(getLayouts());
// // console.log(getMarkdowns());
// // console.log(getAssets());
// const files = getMarkdowns();
// const parsed = files.map(readMarkdown);
// parsed.forEach(console.log);






// console.log(files)




