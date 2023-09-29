// write a js program that uses closures to store private data


function count() {
    var counter = 0;
    function increase() {
        counter++;
        console.log("Access of counter from " + "inside the function as it forms" + " a closure", counter);
    }
    return increase;
}

count()();  // first set of parenthisis call count function and second set will call returned function increase imidietly

  
// Data Privacy is there is
// it will throw error
console.log("Accessed from outside also no" + " data privacy", counter);