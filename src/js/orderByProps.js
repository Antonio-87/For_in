export default function orderByProps(obj, options = []) {
    const listKeysSort = Object.keys(obj).filter((el) => !options.includes(el)).sort();
    const firstProps = [];
    const endProps = [];
    for (const prop in obj) {
        if (!options.includes(prop)) {
            endProps[listKeysSort.indexOf(prop)] = ({ key: prop, value: obj[prop] });
        } else {
            firstProps[options.indexOf(prop)] = ({ key: prop, value: obj[prop] });
        }
    }

    return firstProps.concat(endProps);
}
