/*Create DOM with 'content'-element in  'place'-element */

function createHtmlFromTemplate(template, element, parent) {
    let $html = element.html();
    let content = tmpl($html, template);
    parent.append(content);
}
