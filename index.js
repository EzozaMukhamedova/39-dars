// while1
// let a = +prompt("Iltimos, a sonini kiriting (a > b): ");
// let b = +prompt("Iltimos, b sonini kiriting (a > b): ");

// while (a >= b) {
//   a -= b;
// }

// console.log("Bo'sh qism: " + a);

// while2
// let a = +prompt("Iltimos, a sonini kiriting (a > b): ");
// let b = +prompt("Iltimos, b sonini kiriting (a > b): ");
// let ej = 0;
// let s = 0;

// while (ej + b <= a) {
//   ej += b;
//   s += 1;
// }

// console.log("Bo'sh qolgan joy: ", a - ej);
// console.log("A kesmada B kesmadan ", s, "ta joylashtirish mumkin");

// while3
// let n = +prompt("Iltimos, n sonini kiriting (musbat): ");
// let k = +prompt("Iltimos, k sonini kiriting (musbat): ");

// let q = 0;

// while (n >= k) {
//   n -= k;
//   q += 1;
// }

// console.log("Qoldiq: " + n);
// console.log("Butun qismi: " + q);

// while4
// let n = prompt("Iltimos, n sonini kiriting (n > 0):");
// n = parseInt(n);
// let i = 1;

// while (i < n) {
//   i *= 3;
// }

// if (i === n) {
//   console.log("3 ning darajasi");
// } else {
//   console.log("3 ning darajasi emas");
// }

// while5
// let n = prompt("Iltimos, n sonini kiriting (n > 0):");
// n = parseInt(n);

// let k = 0;
// while (n > 1) {
//   n = n / 2;
//   k++;
// }

// console.log("K ning qiymati: " + k);

// while17
// let n = +prompt("N sonini kiriting(n > m): ");
// let m = +prompt("M sonini kiriting: ");
// let b = 0;
// let q = n;

// while (q >= m) {
//   q -= m;
//   b += 1;
// }

// console.log("Bo'linma: " + b);
// console.log("Qoldiq: " + q);

// while18
// let n = +prompt("N sonini kiriting(n > 0): ");
// let q = 0;

// while (n > 0) {
//   q = q * 10 + (n % 10);
//   n = Math.floor(n / 10);
// }
// console.log("Sonning teskari raqamlari: " + q);

// while19
// let n = +prompt("N sonini kiriting (n > 0): ");
// let ry = 0;
// let rs = 0;
// let r = 0;

// while (n > 0) {
//   r = n % 10;
//   ry += r;
//   rs += 1;
//   n = Math.floor(n / 10);
// }

// console.log("Raqam yegindisi: " + ry);
// console.log("Raqam soni: " + rs);

// while20
// let n = +prompt("N sonini kiriting(n > 0): ");
// let j = 0;
// let ik = false;

// while (n > 0) {
//   if (n % 10 == 2) {
//     ik = true;
//   }
//   j = j * 10 + (n % 10);
//   n = Math.floor(n / 10);
// }

// if (ik) {
//   console.log("2 bor");
// } else {
//   console.log("2 yo'q");
// }

// while 21
// let n = +prompt("N sonini kiriting(n > 0):");
// let tr = false;
// let j = 0;

// while (n > 0) {
//   if (n % 2 == 1) {
//     tr = true;
//   }
//   j = j * 10 + (n % 10);
//   n = n / 10;
// }
// if (tr) {
//   console.log("Toq bor");
// } else {
//   console.log("Toq yo'q");
// }

// while 22
// let n = +prompt("N sonini kiriting(n > 0):");
// let i = 1;
// let r = 0;

// while (n >= i) {
//   if (n % i == 0) {
//     r += 1;
//   }
//   i += 1;
// }
// if (r < 3) {
//   console.log("Tub son");
// } else {
//   console.log("Tub son emas");
// }

// FOR

// For1:
// let k = +prompt("k sonini kiriting: ");
// let n = +prompt("n sonini kiriting(n > 0): ");

// if (n > 0) {
//   for (let i = 0; i < n; i++) {
//     console.log(k);
//   }
// } else {
//   console.log("n soni musbat bo'lishi kerak.");
// }

// for2
// let a = parseInt(prompt("a sonini kiriting (a < b): "));
// let b = parseInt(prompt("b sonini kiriting: "));
// let count = 0;

// for (let i = a; i >= b; i--) {
//   console.log(i);
//   count++;
// }
// console.log("Jami sonlar: " + count);

// for3
// let a = parseInt(prompt("a sonini kiriting (a < b): "));
// let b = parseInt(prompt("b sonini kiriting: "));
// let count = 0;

// for (let i = a - 1; i >= b + 1; i--) {
//   console.log(i);
//   count++;
// }
// console.log("Jami sonlar: " + count);

// for4
// let price = parseFloat(prompt("1 kg konfet narxini kiriting: "));

// for (let i = 1; i <= 10; i++) {
//   console.log("1 kg konfet narxi: " + i * price, " kg bo'ladi.");
// }

// for5
// let price = parseFloat(prompt("1 kg konfet narxini kiriting: "));

// for (let i = 1; i <= 10; i++) {
//   let w = i / 10;
//   let cost = w * price;
//   console.log(w + " kg konfet narxi: " + cost);
// }

// for6
// let price = parseFloat(prompt("1 kg konfet narxini kiriting: "));

// for (let i = 12; i <= 20; i += 2) {
//   let w = i / 10;
//   let cost = w * price;
//   console.log(w + " kg konfet narxi: ", +cost, "so'm bo'ladi");
// }

// for7
// let a = parseInt(prompt("a sonini kiriting (a < b): "));
// let b = parseInt(prompt("b sonini kiriting: "));

// let s = 0;
// for (let i = a; i <= b; i++) {
//   s += i;
// }
// console.log("Yeg'indisi: " + s);

// for8
// let a = parseInt(prompt("a sonini kiriting (a < b): "));
// let b = parseInt(prompt("b sonini kiriting: "));

// let s = 1;
// for (let i = a; i <= b; i++) {
//   s *= i;
// }
// console.log("Yeg'indisi: " + s);

// for9
// let a = parseInt(prompt("a sonini kiriting (a < b): "));
// let b = parseInt(prompt("b sonini kiriting: "));

// if (a < b) {
//   let sum = 0;
//   for (let i = a; i <= b; i++) {
//     sum += i * i;
//   }
//   console.log("Kvadratlar yig'indisi: " + sum);
// }

// for10
// let n = +prompt("N raqamini kiriting");
// let S = 0;
// for (i = 1; i <= n; i++) {
//   S += 1 / i;
// }
// console.log("S = " + S);

// for11
// let n = +prompt("N sonini kiriting");
// let S = 0;
// for (let i = n; i <= 2 * n; i++) {
//   S += i ** 2;
// }
// console.log("S = " + S);

// for12
// let n = +prompt("n sonini kiriting (n > 0):");
// let s = 1;

// for (let i = 1; i <= n; i++) {
//   s *= 1 + i / 10;
// }
// console.log("S = " + s);

// TYPE SCRIPT
// Numeric string used with + gives string type
// let result;

// result = '3' + 2;
// console.log(result); // "32"

// result = '3' + true;
// console.log(result); // "3true"

// result = '3' + undefined;
// console.log(result); // "3undefined"

// result = '3' + null;
// console.log(result); // "3null"

// Numeric string used with -, /, * results in number type
// result = '4' - '2';
// console.log(result); // 2

// result = '4' - 2;
// console.log(result); // 2

// result = '4' * 2;
// console.log(result); // 8

// Non-numeric string used with -, /, * results in NaN
// let result;

// result = 'hello' - 'world';
// console.log(result); // NaN

// result = '4' - 'hello';
// console.log(result); // NaN

// // Division of numeric strings results in a number
// result = '4' / 2;
// console.log(result); // 2

// // If boolean is used, true is 1, false is 0
// result = '4' - true;
// console.log(result); // 3

// result = 4 + true;
// console.log(result); // 5

// result = 4 + false;
// console.log(result); // 4

// null is 0 when used with number
// let result;

// result = 4 + null;
// console.log(result); // 4

// result = 4 - null;
// console.log(result); // 4

// // Arithmetic operation of undefined with number, boolean or null gives NaN
// result = 4 + undefined;
// console.log(result); // NaN

// result = 4 - undefined;
// console.log(result); // NaN

// result = true + undefined;
// console.log(result); // NaN

// result = null + undefined;
// console.log(result); // NaN

// let result;

// // Converting strings to numbers
// result = Number('324');
// console.log(result); // 324

// result = Number('324e-1');
// console.log(result); // 32.4

// // Converting booleans to numbers
// result = Number(true);
// console.log(result); // 1

// result = Number(false);
// console.log(result); // 0

// // Converting null and empty string to numbers
// result = Number(null);
// console.log(result); // 0

// result = Number(' ');
// console.log(result); // 0

// let result;

// // Converting non-numeric string, undefined, and NaN to numbers
// result = Number('hello');
// console.log(result); // NaN

// result = Number(undefined);
// console.log(result); // NaN

// result = Number(NaN);
// console.log(result); // NaN

// let result;

// // Converting string to integer
// result = parseInt('20.01');
// console.log(result); // 20

// // Converting string to float
// result = parseFloat('20.01');
// console.log(result); // 20.01

// // Using unary plus to convert string to number
// result = +'20.01';
// console.log(result); // 20.01

// // Using Math.floor to convert string to integer
// result = Math.floor('20.01');
// console.log(result); // 20

// let result;

// // Converting numbers to strings
// result = String(324);
// console.log(result); // "324"

// result = String(2 + 4);
// console.log(result); // "6"

// // Converting other data types to strings
// result = String(null);
// console.log(result); // "null"

// result = String(undefined);
// console.log(result); // "undefined"

// result = String(NaN);
// console.log(result); // "NaN"

// result = String(true);
// console.log(result); // "true"

// result = String(false);
// console.log(result); // "false"

// // Using toString() method
// result = (324).toString();
// console.log(result); // "324"

// result = true.toString();
// console.log(result); // "true"

// let result;

// // Converting empty string to boolean
// result = Boolean('');
// console.log(result); // false

// // Converting zero to boolean
// result = Boolean(0);
// console.log(result); // false

// // Converting undefined to boolean
// result = Boolean(undefined);
// console.log(result); // false

// // Converting null to boolean
// result = Boolean(null);
// console.log(result); // false

// // Converting NaN to boolean
// result = Boolean(NaN);
// console.log(result); // false
