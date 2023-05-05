var a;
a = 5;
console.info("a = " + a, typeof a); // number
a = 'Hello, world!';
console.log("a = ", a, typeof a); // string
a = 'c';
console.log("a = ", a, typeof a); // string
console.log(typeof c); // undefined
var c;
console.log(typeof c); // ??
c = false;
console.log(typeof c);
c = [9, 2, 3];
console.log(c, typeof c);
c = [9, "hello", true];
console.log(c, typeof c);
c = [9, "hello", true, [7, 'hi', false]];
console.log(c, typeof c);
console.log(c[1], typeof(c[1]));
console.log(c[3], typeof(c[3]));
console.log(c[4], typeof(c[4]));
console.log(typeof(undefined)); // 'undefined'
var myObj = {
    nume: 'Vasile',
    nota: 7,
};
console.log(myObj, typeof(myObj));
console.log(myObj, typeof myObj);
myObj = undefined;
console.log(myObj, typeof(myObj));

var x = 1;
for (i = 0; i < 3; i++) {
    var x;
    x++;
}
console.log("x = " + x);

let y = 1;
for (i = 0; i < 3; i++) {
    let y;
    y++;
}
console.log("y = " + y);

const z = 1;
for (i = 0; i < 3; i++) {
    let z;
    console.log(z, typeof z);
    z++;
    console.log("z intern = " + z); // ?
    console.log(z, typeof z);
}
console.log("z = " + z);

// const t = 1;
// for (i = 0; i < 3; i++) {
//     var t = 9; // has already been declared
//     t++;
// }
// console.log("t = " + t);

let a1 = 8;
let b1 = '8';
console.log(a1 == b1); // true
console.log(a1 === b1); // false

console.log(typeof a1, typeof b1, typeof a1 == typeof b1); // false
let c1;
console.log(c1, typeof c1); // undefined, 'undefined'
console.log(c1 == typeof c1); // undefined == 'undefined' sau nimic == 'ceva' => false
console.log(c1 === typeof c1); // false
let d1 = 'undefined';
console.log(d1 == undefined); // false
let e1;
console.log(typeof e1 == 'undefined'); // true
console.log(e1 == undefined); // true

console.log(e1 == undefined ? 'nu e definita' : 'e definita'); // 'nu e definita'

let t = 0;
// scurtcircuitare &&
if ((true == false) && (t = 1)) { // t = 1 nu se mai executa
    console.log('am intrat in if-ul cu &&')
}
console.log("t = " + t); // t = 0

// scurtcircuitare ||
if ((true == true) || (t = 1)) { // t = 1 nu se mai executa
    console.log('am intrat in if-ul cu ||')
}
console.log("t = " + t); // t = 0

let z1 = true;
console.log(!z1);
z1 = 9;
console.log(z1, typeof(z1));
console.log(!z1);
console.log(!z1, typeof(!z1));
z1 = {hello: 'test'};
console.log(!z1, typeof(!z1));

let student = {
    name: 'Vasilica',
    nota: 9.8,
    passed: true, // trailing comma
};
console.log('name' in student); // verificare de chei
// let name = 'nota';
// console.log(name1 in student); // Uncaught ReferenceError: 
console.log(name in student); // false, but not error // TODO: verify this
console.log('Vasilica' in student);
// console.log(nota in student); // Uncaught ReferenceError: 

console.log(student.name, student['name'], student["name"]);
delete student.nota;
console.log(student.nota);
console.log(1 in student);
let students = ['Vasilica', student, false];
console.log(1 in students);
console.log(students[1]);

for (cheie in student) { // iterez prin toate cheile
    console.log(cheie, student[cheie]);
    console.log(cheie, student.cheie); // student['cheie'] sau student["cheie"]; cheia "cheie" nu exista
    // student['cheie'] != student[cheie]
}

// for (valoare of student) { // iterez prin toate valorile; nu pot fac asta pe obiect
//     console.log(valoare);
// }

var arr = [8, 2, 3];
for (cheie in arr) {
    console.log(cheie, arr[cheie]);
} 
var arr = [8, 2, 3];
for (valoare of arr) {
    console.log(valoare);
} 

function test1(param) {
    return "test message " + param;
}
let xFunc = test1("Vasilica");
console.log(xFunc);
console.log(typeof test1)

test2 = function(param) {
    return "test message " + param;
}
let xFunc2 = test2("Vasilica");
console.log(xFunc2);
console.log(typeof test2)

function test3(functionToCall) {
    let x = functionToCall;
    console.log(x);
}
test3(test2("Vasile"));

hello = (a, b) => {
    console.log('Received ', a , b);
    return a + b;
};
console.log(hello(5, 9));
