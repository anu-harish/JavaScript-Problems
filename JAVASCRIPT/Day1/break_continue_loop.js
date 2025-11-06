/*break  → exits loop immediately
continue → skips current iteration, moves to next
===================================================== */

console.log("\n---- BREAK & CONTINUE ----");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Breaking at 3");
    break; // exits loop fully
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue; // skips only this iteration
  }
  console.log(i);
}