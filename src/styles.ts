import sass from "node-sass";


export function getStyles() {
    return sass.renderSync({
        file: "styles/main.scss"
    });
};