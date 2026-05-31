// PBT_07 - Câu A2, A3, A4: Data types, coercion, equality, truthy/falsy

console.log("A2 - Data Types & Coercion");
console.log("typeof null:", typeof null);
console.log("typeof undefined:", typeof undefined);
console.log("typeof NaN:", typeof NaN);
console.log('"5" + 3:', "5" + 3);
console.log('"5" - 3:', "5" - 3);
console.log('"5" * "3":', "5" * "3");
console.log("true + true:", true + true);
console.log("[] + []:", [] + []);
console.log("[] + {}:", [] + {});
console.log("{} + []:", {} + []);

console.log("\nA3 - == vs ===");
console.log('5 == "5":', 5 == "5");
console.log('5 === "5":', 5 === "5");
console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);
console.log("NaN == NaN:", NaN == NaN);
console.log("0 == false:", 0 == false);
console.log("0 === false:", 0 === false);
console.log('"" == false:', "" == false);

console.log("\nA4 - Truthy & Falsy");
if ("0") console.log("A");
if ("") console.log("B");
if ([]) console.log("C");
if ({}) console.log("D");
if (null) console.log("E");
if (0) console.log("F");
if (-1) console.log("G");
if (" ") console.log("H");
