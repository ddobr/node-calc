const calculate = function (x, y, op) {
    if (op === "+") {
        var result = x + y;
    } else if (op === "-") {
        var result = x - y;
    } else if (op === "/") {
        var result = x / y;
    } else if (op === "*") {
        var result = x * y;
    } else if (op === "%") {
        var result = x % y;
    } else {
        var result = "Error!"
    }

    return result;
}

module.exports = calculate;