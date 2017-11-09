import { compile } from 'handlebars';
import { readFile } from 'mz/fs';

export const TEMPLATE_STATIC_PATH = 'dist/templates';
export const WEBPACK_STATIC_PATH = '/webpack';

export function loadTemplate(filePath, context) {
    return readFile(filePath)
        .then((htmlContent) => {
            const template = compile(htmlContent.toString());
            return template(context);
        });
}
