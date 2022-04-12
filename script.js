let a;
const math = () => {
    var num = Number(document.getElementById("num").value);
    var res = Number(document.getElementById("res").innerHTML);
    console.log(a);
    console.log(num);
    console.log(res);

    const arithmetic = new Map([
        ['AC', () => document.getElementById("res").innerHTML = Number(0)],
        ['plus', (x, y) => x + y],
        ['minus', (x, y) => x - y],
        ['multiply', (x, y) => x * y],
        ['divide', (x, y) => x / y]
    ]);
    document.getElementById("res").innerHTML = arithmetic.get(a)(res, num);
};
