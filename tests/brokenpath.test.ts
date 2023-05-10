import ValidationOfChars from '../lib/ValidationOfChars';
import Positions from '../handlers/Positions';
import Paths from '../handlers/Paths';

describe('Test if path is broken', () =>
{
    test('test if map is valid', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['', '', '', '@', '-', '-', 'A', '-', '+'],
                ['', '', '', '', '', '', '', '', '|'],
                ['', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', 'B', '-', 'x'],
            ];

            ValidationOfChars.initValidation(exampleMap);
        }).not.toThrow(Error);
    });

    test('test if there is a broken path', () =>
    {
        expect(() =>
        {
            const exampleMap = [
                ['', '', '', '@', '-', '-', 'A', '-', '+'],
                ['', '', '', '', '', '', '', '', '|'],
                ['', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', 'B', '-', 'x'],
            ];

            ValidationOfChars.initValidation(exampleMap);
            const result = Positions.getAllPossiblePositions(exampleMap);

            const paths = new Paths();
            paths.init(result);
        }).toThrow(Error);
    });
});
