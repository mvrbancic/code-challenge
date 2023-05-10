import ValidationOfChars from '../lib/ValidationOfChars';

describe('Test if it is a valid 2D map', () =>
{
    test('test if it is a valid 2D map', () =>
    {
        const exampleMap = [
            ['A', 'B', '+', 'C'],
            ['-', '@', 'x', '|'],
        ];

        const result = ValidationOfChars.checkIfValidTwoDMap(exampleMap);

        expect(result.error).toBeFalsy();
    });
});
