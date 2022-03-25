/*function fib(n){
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}*/

//alert ( fib(77) );

/*let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
    let tmp = list;
  
    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
  
  }
  
  printList(list);*/

 /*function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b; 
  };
 }

 function inArrary([]) {
  return function(x) {
    return arr.includes(x);
  };
 }

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); 
  
alert( arr.filter(inArray([1, 2, 10])) );*/

/*function sayHi() {
  alert('Han pasado cinco segundos');
}

setTimeout(sayHi, 5000);*/