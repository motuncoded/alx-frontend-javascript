// import RowID and RowElement from interface.ts
import { RowID, RowElement } from "./interface.js";

export function insertRow(row: RowElement): RowID;
export function updateRow(rowId: RowID, row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
