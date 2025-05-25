// At the top of the file create a triple slash directive that includes all the dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />
// Import everything from crud.js as CRUD

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create an object called row with the type RowElement with the fields set to these values:

// firstName: Guillaume
// lastName: Salva

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
const newRowId: RowID = CRUD.insertRow(row);
// Log the value of newRowId to the console.
console.log(newRowId);

// Next, create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
const updatedRow: RowElement = {
    ...row,
    age: 23,
};

console.log(updatedRow);

// Finally, call the updateRow and deleteRow commands.
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId); // Uncomment this line to delete the row
// console.log(`Row with ID ${newRowID} has been updated.`);

