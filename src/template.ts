import nunjucks from "nunjucks";

export function setup() {
    return nunjucks.configure(["layouts"], {
        autoescape: true,
        noCache: true
    });
}