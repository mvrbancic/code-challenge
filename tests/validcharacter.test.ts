import ValidationOfChars from '../lib/ValidationOfChars';

describe('Test if map has valid carachers', () =>
{
    test('test if A-Z exists in map', () =>
    {
        const exampleMap = [
            ['A', 'B', '+', 'C'],
            ['-', '@', 'x', '|'],
        ];

        const result = ValidationOfChars.checkForCharacters(exampleMap);

        expect(result.error).toBeFalsy();
    });

    test('test if valid char exists in map', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['a', 'v', 'c', 't'],
                ['2', '1', 'y', 'a'],
            ];

            const result = ValidationOfChars.checkForCharacters(exampleMap);

            expect(result.error).toBeTruthy();
        }).toThrow(Error);
    });

    test('test if not valid char exists in map', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['a', 'v', 'c', 't'],
                ['2', '1', 'y', 'a'],
            ];

            const result = ValidationOfChars.checkForCharacters(exampleMap);

            expect(result.error).toBeTruthy();
        }).toThrow('Not valid caracthers found');
    });
});
