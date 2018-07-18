export function getArrayXYF(command) {
    let properties = command.replace("PLACE ", "");
    return properties.split(",");
}

export function isPositiveInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}