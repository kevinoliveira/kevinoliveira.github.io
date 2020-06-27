


export interface IPage {
    htmlOutputName: string;
    cssOutputName: string;
    nunjunksTemplate: string;
    sassFile: string;
    context?: Object;
}