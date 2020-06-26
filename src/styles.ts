import sass from "node-sass";


export function getStyles() {
    return sass.renderSync({
        file: "sass/page/main.scss"
    });
};

export function getPosterStyles() {
    return sass.renderSync({
        file: "sass/page/post.scss"
    });
};

