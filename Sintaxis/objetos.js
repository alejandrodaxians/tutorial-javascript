let user = {
    name: "Java",
    surname: "Script",
    "is easy": true,
}

// alert(user["is easy"]);

user["is easy"] = false;

// alert(user["is easy"]);

let key = prompt("¿Qué necesitas saber?", "name, surname, o is easy");
//  alert(user[key]);


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum = 0;
for (let key in salaries) {
    sum += salaries [key];
}

// alert(sum);


let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
        if(typeof obj[key] == "number") {
            obj[key] *= 2;
           // alert(obj[key]);
        }
    }
}

multiplyNumeric(menu);


let calculator = {
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
  };
  
  calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        // this.value += +prompt("Agregar valor al acumulador", 0);
    };
}

let accumulator = new Accumulator(1);

accumulator.read();
