export function camelCaseToText(str) {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
        .replace(/^./, function (char) { return char.toUpperCase(); });
}

export function titleCase(str) {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

