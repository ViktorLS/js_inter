let value = "Surprise!";

function f() {
  let value = "the closest value";

  function g() {
    console.log(value);
    debugger; // in console: type alert(value); Surprise!
  }

  return g;
}

let g = f();
g();
