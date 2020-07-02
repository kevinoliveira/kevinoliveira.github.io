console.clear();
console.log(new Date().toString())

import { 
  IPage, 
  TemplatePost, 
  ParsedPost 
} from "./types";
import fs from "fs";
import path from "path";
import { find, read, dir } from "fs-jetpack";
import frontmatter from "frontmatter";
import marked from "marked";
import nunjucks from "nunjucks";
import sass from "node-sass";

// 1. SETUP

// nunjunks setup
const n = nunjucks.configure(["src"], {
  autoescape: true,
  noCache: true
});
 
// parsing posts
const postsFilePaths = find("posts",{matching: "**/*.md"})
const postsParsedData:ParsedPost[] = postsFilePaths.map(path => {
  const fileContent = read(path, "utf8");
  const FM = frontmatter(fileContent);

  return {
      headers: FM.data,
      content: FM.content,
      parsedHtml: marked(FM.content)
  }
});

// define files to compiple
const pagesToCreate: IPage[] = [
  {
    htmlOutputName: "index.html",
    cssOutputName: "index.css",
    nunjunksTemplate: "pages/home/home.njk",
    sassFile: "pages/home/main.scss",
    context: {
      hideHome: true,
      posts: postsParsedToTemplate(postsParsedData)
      // name: "Jake",
      // age: 31,
    }
  },
  {
    cssOutputName:"404.css",
    htmlOutputName: "404.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {title: "404",message:"Sorry, can't find anything"}
  },
  {
    cssOutputName:"artlets.css",
    htmlOutputName: "artlets.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {title: "Artlets",message:"Artlets"}
  },
  {
    cssOutputName:"projects.css",
    htmlOutputName: "projects.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {title: "Projects",message:"Projects"}
  },
  {
    cssOutputName:"blog.css",
    htmlOutputName: "blog.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {title: "Blog",message:"Blog"}
  },
  {
    cssOutputName:"about.css",
    htmlOutputName: "about.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {title: "About Me",message:"About Me"}
  },
  {
    cssOutputName:"secret.css",
    htmlOutputName: "secret.html",
    nunjunksTemplate: "pages/404/404.njk",
    sassFile: "pages/404/404.scss",
    context: {title: "Secret",message:"Secret page"}
  }
]


// 2. compile posts

// create dir
dir("output/posts")

// html
postsParsedData.forEach(post => {
  const html = n.render("pages/post/post.njk", {rawHtml: post.parsedHtml, title: post.headers.title});
  fs.writeFileSync(path.join("output/posts/",post.headers.key+".html",),html, "UTF-8");
});

// styles
const css = sass.renderSync({ file: "src/pages/post/post.scss"}).css.toString();
fs.writeFileSync(path.join("output/", "post.css"), css, "UTF-8");


// 3. compile other pages

// html
pagesToCreate.forEach(p => {
  const html = n.render(p.nunjunksTemplate, p.context);
  fs.writeFileSync(path.join("output/", p.htmlOutputName), html, "UTF-8");
})
// styles
pagesToCreate.forEach(p => {
  const css = sass.renderSync({ file: path.join("src/", p.sassFile) }).css.toString();
  fs.writeFileSync(path.join("output/", p.cssOutputName), css, "UTF-8");
})






// HELPERS


function postsParsedToTemplate(parsed: ParsedPost[] ):TemplatePost[]{
  return parsed.map(p => ({
    title: p.headers.title,
    date: p.headers.date,
    description: p.headers.description,
    link:  "/sorry"
  }))
}
