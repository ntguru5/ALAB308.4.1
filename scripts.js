/**
 * ================== Part 1 (continuation of Feeling Loopy)
 */

// ================== PART 3 Feeling Loopy
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

// Example CSV string
// let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Split CSV data into rows based on newline
// let rows = csvData.split('\n');

// Loop through each row and split by commas to get cells
// for (let row of rows) {
//     let cells = row.split(','); // Split each row into an array of cells
//     console.log(...cells); // Use Spread operator, log each cell
// }

/**
 * ================== Part 2 Expanding Functionality
 */

// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row,
// expand your code to accept any number of columns.
// This should be calculated dynamically based on the first row of data.

// determine number of columns from step 1 dynamically
// Dynamically determine the number of columns from the first row
// let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
// let rows = csvData.split('\n');

// let header = rows[0].split(','); // Split the first row (header) by commas
// let numColumns = header.length;  // Get the number of columns
// console.log(`Number of columns: ${numColumns}`); // log the number of columns

// Create a parent array to store all rows (two-dimensional array)
// let tableData = [];

// Loop through each row and split by commas to get cells, then store the result
// for (let row of rows) {
//     let cells = row.split(','); // Split each row into an array of cells
//     tableData.push(cells);      // Push the row array into the parent array
// }

// console.log(tableData);

/**
 * ================== Part 3 Transforming Data
 * For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
 */
// let csvData = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// // // Split CSV data into rows based on newline
let rows = csvData.split('\n');

// // // Split the first row by comma, convert them to lowercase
let headers = rows[0].split(',').map(header => header.toLowerCase());

// // // initialize an array to store the results
let newArray = [];

// // // loop through remaining rows, create objects using headers, and store them
for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].split(',');
    let rowObject = {}; // initialize empty object for the current row

// //     // map each header to its corresponding cell value
    for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = cells[j];
    }
    newArray.push(rowObject);
}

console.log(newArray);

/**
* ================== Part 4: Sorting and Manipulating Data
Remove the last element from the sorted array.
Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
 */

// Remove last element (Bill)
newArray.pop();

// Insert the new object (Barry) at index 1
let barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
newArray.splice(1, 0, barry);

// Add the new object (Bilbo) to the end of the array
let bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
newArray.push(bilbo);

// Calculate the average age of the group
let totalAge = 0;
for (let person of newArray) {
  totalAge += parseInt(person.age); // Sum all ages
}

let averageAge = totalAge / newArray.length; // Calculate the average

// log updated array and average age
console.log(newArray);
console.log(`Average age: ${averageAge}`);
