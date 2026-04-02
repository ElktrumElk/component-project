/**
 * ## The comp Module
 * The component(comp) module is used to fetch the html template and convert the string to an actual node element.
 * With the given element id only returns that element and it children.
 * 
 * @param {Object} param0 
 * @returns
 * 
 *
 * 
 */
export default async function comp({
    path = "",
    id = "",
    parseFormat = "text/html",
    html = null,
    child = null,
    position_id = null

}) {

    let data;

    if (html !== null) {
        data = html.toString()
    } else {
        const res = await fetch(path);
        data = await res.text();
    }
    const _dom = new DOMParser();
    const _parser = _dom.parseFromString(data, parseFormat);

    if (child !== null) {
        if (child !== "") {
            _parser.getElementById(position_id).before(child);
        }
    }

    const _component = _parser.getElementById(id);

    return _component;
}