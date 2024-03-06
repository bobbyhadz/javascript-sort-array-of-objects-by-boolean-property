// EXAMPLE 1 - Sort an Array of Objects by Boolean property in JavaScript

const arr = [
  {bool: true},
  {bool: false},
  {bool: false},
  {bool: true},
];

// ✅ true values first
const trueFirst = arr.sort(
  (a, b) => Number(b.bool) - Number(a.bool),
);

// 👇️ [{bool: true}, {bool: true}, {bool: false}, {bool: false}]
console.log(trueFirst);

// // ------------------------------------------------------

// // ✅ false values first
// const falseFirst = arr.sort(
//   (a, b) => Number(a.bool) - Number(b.bool),
// );

// // 👇️ [{bool: false}, {bool: false}, {bool: true}, {bool: true}]
// console.log(falseFirst);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Sort an Array of Objects by Boolean property without mutation

// const arr = [
//   {bool: true},
//   {bool: false},
//   {bool: false},
//   {bool: true},
// ];

// // ✅ true values first
// const trueFirst = [...arr].sort(
//   (a, b) => Number(b.bool) - Number(a.bool),
// );

// // 👇️ [ { bool: true }, { bool: true }, { bool: false }, { bool: false } ]
// console.log(trueFirst);

// // ✅ false values first
// const falseFirst = [...arr].sort(
//   (a, b) => Number(a.bool) - Number(b.bool),
// );

// // 👇️ [ { bool: false }, { bool: false }, { bool: true }, { bool: true } ]
// console.log(falseFirst);

// // 👇️ [ { bool: true }, { bool: false }, { bool: false }, { bool: true } ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Sort an Array of Booleans in JavaScript

// const arr = [true, false, true, false, false];

// // ✅ true values first
// const trueFirst = arr.sort((a, b) => Number(b) - Number(a));

// // 👇️ [true, true, false, false, false]
// console.log(trueFirst);

// // ✅ false values first
// const falseFirst = arr.sort((a, b) => Number(a) - Number(b));

// // 👇️ [false, false, false, true, true]
// console.log(falseFirst);
