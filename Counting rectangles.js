function a(m) {
    return m * (m + 1) / 2;
}

function main() {
    var d = 2000000;
    var m = 1;
    var m0 = 0;
    var n0 = 0;
    for (;;) {
        var n = Math.ceil(Math.sqrt((2000000 / a(m)) * 2));
        if (m > n) break;
        for (;;) {
            var v = a(m) * a(n);
            var e = Math.abs(v - 2000000);
            if (d > e) {
                d = e;
                m0 = m;
                n0 = n;
            }
            if (v < 2000000 - d) {
                break;
            }
            n = n - 1;
        }
        m = m + 1;
    }
    return m0 * n0;
}

console.log('ANS: ' + main());