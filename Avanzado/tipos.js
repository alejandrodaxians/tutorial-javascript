// let a = +prompt("Primer numero a sumar");
// let b = +prompt("Segundo numero a sumar");
// alert(a + b);

function random(min, max) {
    return min + Math.random() * (max - min);
}


function readNumber() {
    let num;

    do {
        // num = prompt("Ingrese un numero", 0);
    }while (!isFinite(num));

    if (num === null || num === '') return null;

    return num;
}

// alert ("Read: " + readNumber());


function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// alert(ucFirst("john"));


function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
  }

// alert(checkSpam("XXX"));


function truncate(str, maxLenght) {
    return (str.length > maxLenght) ?
        str.slice(0, maxLenght - 1) + "..." : str;
}

// alert( truncate("Lo que me gustaría contar sobre este tema es.", 20));


function extractCurrencyValue(str) {
    return +str.slice(1);
}

// alert(extractCurrencyValue("$25067"));


let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";

// alert(styles.shift());
// alert(styles);

styles.unshift("Rap", "Reggae");

// alert(styles);


function sumInput() {

    let numbers = [];

    while(true) {
        // let value = prompt("Un numero: ", 0);

        if (value === '' || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0
     for (let number of numbers) {
         sum +- number;
     }
     return sum;
}

// alert(sumInput());


let lotr = [ 1, 17, 15 ];
lotr.sort(function(a, b) { return a - b; });
// alert(lotr);

let nombres = 'Bilbo, Gandalf, Nazgul';

let arr = nombres.split(', ');

for (let name of arr) {
//   alert( `Un mensaje para ${name}.` );
}


let array = [5, 2,1, -10, 8];

arr.reverse();

// alert(arr);

function copySorted(arr) {
   return arr.slice().sort(); 
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

// alert(names);


function sumSalaries() {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
};

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

// alert( sumSalaries(salaries) ); // 650*/


function count() {
    return Object.keys(obj).length;
}


let guy = {
    name: 'John',
    age: 30
  };
  
//  alert( count(guy) );


let lang = ["C#", "Go", "Elixir", "Python"];

let [primero, , tercero] = "C# Go Elixir".split(' ');
// alert(primero);
// alert(segundo);
// alert(tercero);


let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];

// alert(guest + " " + admin);*/


let man = {
    name: "John",
    years: 30
};


let {name, years: age, isAdmin = false} = man;

// alert(name);
// alert(isAdmin);


let Jan01_1970 = new Date(0);
let newDate = new Date(24 * 3600 * 1000);

// alert(newDate);


let tarea = new Date('February 20, 2012, 03:12:00');
//alert(tarea);


function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

let date = new Date(2014, 0, 3); 
//alert( getWeekDay(date) );


//alert( JSON.stringify([1, 2, 3]) ); 


let js = {
    name: "John Smith",
    age: 35,
};

let js2 = JSON.parse(JSON.stringify(js));

// alert(js2.name);
