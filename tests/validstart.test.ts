import ValidationOfChars from '../lib/ValidationOfChars';

describe('Test if start char is valid', () =>
{
    test('test if error is throw if two start params are given', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['A', 'B', '+', 'C'],
                ['-', '@', '@', '|'],
            ];

            ValidationOfChars.checkForValidStart(exampleMap);
        }).toThrow('Not a valid start');
    });

    test('test if error is throw if no start is given', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['A', 'B', '+', 'C'],
                ['-', 'D', 'E', '|'],
            ];

            ValidationOfChars.checkForValidStart(exampleMap);
        }).toThrow('Not a valid start');
    });

    test('test if start check is OK', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['A', 'B', '+', 'C'],
                ['-', '@', 'D', '|'],
            ];

            ValidationOfChars.checkForValidStart(exampleMap);
        }).not.toThrow(Error);
    });

    test('test if start check is OK', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['', '', '', '', '', '-', 'A', '-', '-', '-', '+'],
                ['', '', '', '', '', '', '', '', '', ''],
                ['', '', 'x', '-', 'B', '-', '+', '', '', '', 'C'],
                ['', '', '', '', '', '', '|', '', '', '', '|'],
                ['', '', '', '', '', '', '+', '-', '-', '-', '+'],
            ];

            ValidationOfChars.checkForValidStart(exampleMap);
        }).toThrow('Not a valid start');
    });
});
