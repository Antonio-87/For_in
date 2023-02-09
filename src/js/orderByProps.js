export default function orderByProps(obj, options=[]) {
    let listKeysSort = Object.keys(obj).filter(el => !options.includes(el)).sort();
    let firstProps = [];
    let andProps = [];
    if (options.length > 0) {
       for (const key in options) {
            Object.entries(obj).forEach(el => {
                if (el[0] == key) {
                    firstProps.push({key: el[0], value: el[1]})
                }
            });
        } 
    }

    for (const key in listKeysSort) {
        Object.entries(obj).forEach(el => {
            if (el[0] == key) {
                firstProps.push({key: el[0], value: el[1]})
            }
        });
    }

    return firstProps.concat(andProps);
}