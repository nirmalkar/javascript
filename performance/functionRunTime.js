
/**
 * To measure the execution time of a function in JavaScript, you can use the console.time() and console.timeEnd() methods or
 * the performance.now() method. Here’s a quick look at both methods:
 */
// Using console.time() and console.timeEnd()
function functionWithDotTime() {
    console.time("Execution Time");
    for (let i = 0; i < 1000000000; i++) { }
    console.timeEnd("Execution Time");
}

functionWithDotTime();


// The performance.now() method provides a high-resolution timestamp in milliseconds, which is ideal for measuring small intervals.

function functionWithDotNow() {
    const start = performance.now();
    for (let i = 0; i < 1000000000; i++) { }
    const end = performance.now();
    console.log(`Execution Time: ${end - start} milliseconds`);
}

functionWithDotNow();
