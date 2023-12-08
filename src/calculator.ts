export const calculateFn = function (x: number, y: number, op: string) {
    if (op === "+") {
        return x + y;
    } else if (op === "-") {
        return x - y;
    } else if (op === "/") {
        return x / y;
    } else if (op === "*") {
        return x * y;
    } else if (op === "%") {
        return x % y;
    } else {
        return "Error!"
    }
}