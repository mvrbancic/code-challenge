import { type RowMap } from './types/ExampleMapTypes';

/** A basic example */
export const exampleMapOne: RowMap = [
    ['@', '-', '-', '-', 'A', '-', '-', '-', '+'],
    ['', '', '', '', '', '', '', '', '|'],
    ['x', '-', 'B', '-', '+', '', '', '', 'C'],
    ['', '', '', '', '|', '', '', '', '|'],
    ['', '', '', '', '+', '-', '-', '-', '+'],
];

/** Go straight through intersections */
export const exampleMapTwo: RowMap = [
    ['@'],
    ['|', '', '+', '-', 'C', '-', '-', '+'],
    ['A', '', '|', '', '', '', '', '|'],
    ['+', '-', '-', '-', 'B', '-', '-', '+'],
    ['', '', '|', '', '', '', '', '', '', 'x'],
    ['', '', '|', '', '', '', '', '', '', '|'],
    ['', '', '+', '-', '-', '-', 'D', '-', '-', '+'],
];

/** Letters may be found on turns */
export const exampleMapThree: RowMap = [
    ['', '', '@', '-', '-', '-', 'A', '-', '-', '-', '+'],
    ['', '', '', '', '', '', '', '', '', '', '|'],
    ['', '', 'x', '-', 'B', '-', '+', '', '', '', '|'],
    ['', '', '', '', '', '', '|', '', '', '', '|'],
    ['', '', '', '', '', '', '+', '-', '-', '-', 'C'],
];

/** Ignore stuff after end of path */
export const exampleMapFour: RowMap = [
    ['', '', '@', '-', 'A', '-', '-', '+'],
    ['', '', '', '', '', '', '', '|'],
    ['', '', '', '', '', '', '', '+', '-', 'B', '-', '-', 'x', '-', 'C', '-', '-', 'D'],
];

/** Do not collect a letter from the same location twice */
export const exampleMapFive: RowMap = [
    ['', '', '', '', '', '+', '-', 'O', '-', 'N', '-', '+'],
    ['', '', '', '', '', '|', '', '', '', '', '', '|'],
    ['', '', '', '', '', '|', '', '', '', '+', '-', 'I', '-', '+'],
    ['', '@', '-', 'G', '-', 'O', '-', '+', '', '|', '', '|', '', '|'],
    ['', '', '', '', '', '|', '', '|', '', '+', '-', '+', '', 'E'],
    ['', '', '', '', '', '+', '-', '+', '', '', '', '', '', 'S'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '|'],
    ['', '', '', '', '', '', '', '', '', '', '', '', '', 'x'],
];

/** Keep direction, even in a compact space */
export const exampleMapSix: RowMap = [
    ['', '+', '-', 'L', '-', '+'],
    ['', '|', '', '', '+', 'A', '-', '+'],
    ['@', 'B', '+', '', '+', '+', '', 'H'],
    ['', '+', '+', '', '', '', '', 'x'],
];

export const exampleMapSeven: RowMap = [
    ['@', '-', '-', 'A', '-', '+'],
    ['', 'x', '-', 'B', '-', '+'],
];

export const exampleMapEight: RowMap = [
    ['+', '-', '-', 'A', '-', '@'],
    ['+', '-', 'B', 'x'],
];

export const exampleMapNine: RowMap = [
    ['', '', '', '@', '-', '-', 'A', '-', '-', '-', '+'],
    ['', '', '', '', '', '', '', '', '', '', '|'],
    ['', '', '', '', '', 'x', '+', '', '', '', 'C'],
    ['', '', '', '', '', '', '|', '', '', '', '|'],
    ['', '', '', '', '', '', '+', '-', '-', '-', '+'],
];

export const exampleMapTen: RowMap = [
    ['', '', '', '', '', '', '', '', 'x', '-', 'B'],
    ['', '', '', '', '', '', '', '', '', '', '|'],
    ['', '', '', '@', '-', '-', 'A', '-', '-', '-', '+'],
];
