export interface IPage {
    htmlOutputName: string;
    cssOutputName: string;
    nunjunksTemplate: string;
    sassFile: string;
    context?: Object;
}

export interface TemplatePost {
    title: string;
    date: string;
    description: string;
    link:  string;
}

export interface ParsedPost {
	headers: Headers;
	content: string;
	parsedHtml: string;
}

export interface Headers {
	date: string;
	key: string;
	title: string;
	tags: string[];
	description: string;
	published: boolean;
}