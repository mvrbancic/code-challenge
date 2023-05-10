import ValidationOfChars from '../lib/ValidationOfChars';

describe('Test if end char is valid', () =>
{
    test('test if error is throw if two end params are given', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['@', 'B', '+', 'C'],
                ['-', 'x', 'x', '|'],
            ];

            ValidationOfChars.checkForValidEnd(exampleMap);
        }).toThrow('Not a valid end');
    });

    test('test if error is throw if no end is given', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['@', 'B', '+', 'C'],
                ['-', 'D', 'E', '|'],
            ];

            ValidationOfChars.checkForValidEnd(exampleMap);
        }).toThrow('Not a valid end');
    });

    test('test if end check is OK', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['@', 'B', '+', 'C'],
                ['-', 'x', 'D', '|'],
            ];

            ValidationOfChars.checkForValidEnd(exampleMap);
        }).not.toThrow(Error);
    });

    test('test if end check is OK', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['', '', '', '@', '-', '-', 'A', '-', '-', '-', '+'],
                ['', '', '', '', '', '', '', '', '', '', '|'],
                ['', '', '', '', 'B', '-', '+', '', '', '', 'C'],
                ['', '', '', '', '', '', '|', '', '', '', '|'],
                ['', '', '', '', '', '', '+', '-', '-', '-', '+'],
            ];

            ValidationOfChars.checkForValidEnd(exampleMap);
        }).toThrow('Not a valid end');
    });

    test('test if end check is OK', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['', '', '', '', '', '', '', '', 'x', '-', 'B'],
                ['', '', '', '', '', '', '', '', '', '', '|'],
                ['', '', '', '@', '-', '-', 'A', '-', '-', '-', '+'],
                ['', '', '', '', '', '', '', '', '', '', '|'],
                ['', '', '', '', '', 'x', '+', '', '', '', 'C'],
                ['', '', '', '', '', '', '|', '', '', '', '|'],
                ['', '', '', '', '', '', '+', '-', '-', '-', '+'],
            ];

            ValidationOfChars.checkForValidEnd(exampleMap);
        }).toThrow('Not a valid end');
    });
});
