import ValidationOfChars from '../lib/ValidationOfChars';

describe('Test if multiple start paths', () =>
{
    test('test if start check is OK', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['', '', '', '@', '-', '-', 'A', '-', '@', '-', '+'],
                ['', '', '', '', '', '', '', '', '', '', '|'],
                ['', '', 'x', '-', 'B', '-', '+', '', '', '', 'C'],
                ['', '', '', '', '', '', '|', '', '', '', '|'],
                ['', '', '', '', '', '', '+', '-', '-', '-', '+'],
            ];

            ValidationOfChars.checkForValidStart(exampleMap);
        }).toThrow(Error);
    });

    test('test if start check is OK', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['', '', '', '@', '-', '-', 'A', '-', '-', '-', '+'],
                ['', '', '', '', '', '', '', '', '', '', '|'],
                ['', '', '', '', '', '', '', '', '', '', 'C'],
                ['', '', '', '', '', '', '', '', '', '', 'x'],
                ['', '', '', '', '', '', '@', '-', 'B', '-', '+'],
            ];

            ValidationOfChars.checkForValidStart(exampleMap);
        }).toThrow(Error);
    });

    test('test if start check is OK', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['', '', '', '@', '-', '-', 'A', '-', '-', 'x'],
                [],
                ['', '', 'x', '-', 'B', '-', '+'],
                ['', '', '', '', '', '', '|'],
                ['', '', '', '', '', '', '@'],
            ];

            ValidationOfChars.checkForValidStart(exampleMap);
        }).toThrow(Error);
    });

    test('test if error is thrown on multiple start paths', () =>
    {
        expect(() =>
        {
            const exampleMap = [['x', '-', 'B', '-', '@', '-', 'A', '-', 'x']];

            ValidationOfChars.initValidation(exampleMap);
        }).toThrow(Error);
    });
});
