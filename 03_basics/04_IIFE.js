// Imediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`)
})(); 

( function aurcode() {
    console.log(`DB CONNECTED two`)
})();


( (name) => {
    console.log(`DB CONNECTED three, ${name}`)
})('rohan')


// (declaration of function)(call of function)

// chai()

// here comes the most important thing,
// when we run two function back to back the js dont know when two to stop
// so we have to add a semicolon so that it ca run properly,
// no error will come when we run only single one.