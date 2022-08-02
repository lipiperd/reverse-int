module.exports = function reverse(n) {
    let result = 0;
    while (n) {
        result = result * 10 + Math.abs(n) % 10;
        n = Math.floor(Math.abs(n) / 10);
    }
    return result;
}
