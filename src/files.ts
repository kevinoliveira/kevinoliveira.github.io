import { find, read } from "fs-jetpack";
import frontmatter from "frontmatter";
import marked from "marked";

export function getLayouts() {
    return find("nunjunks", { matching: "**/*.njk" })
}

export function getMarkdowns() {
    return find("markdown", { matching: "**/*.md" })
}

export function getAssets() {
    return find("assets", { matching: "**/*.*" })
}


export function readMarkdown(path: string) {
    const fileContent = read(path, "utf8");
    if (!fileContent) throw Error(`can't read file "${path}"`);

    const FM = frontmatter(fileContent);

    return {
        headers: FM.data,
        content: FM.content,
        parsedHtml: marked(FM.content)
    }
}