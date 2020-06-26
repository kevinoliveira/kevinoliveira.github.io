import nunjucks from "nunjucks";

export function setup() {
    return nunjucks.configure(["nunjunks"], {
        autoescape: true,
        noCache: true
    });
}