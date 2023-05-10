import {
    exampleMapOne,
    exampleMapTwo,
    exampleMapThree,
    exampleMapFour,
    exampleMapFive,
    exampleMapSix,
    exampleMapSeven,
    exampleMapEight,
    exampleMapNine,
    exampleMapTen,
} from '../ExampleMaps';
import ValidationOfChars from '../lib/ValidationOfChars';
import Positions from '../handlers/Positions';
import Paths from '../handlers/Paths';

describe('Test if correct value is returned', () =>
{
    test('test for exampleMapOne', () =>
    {
        ValidationOfChars.initValidation(exampleMapOne);
        const result = Positions.getAllPossiblePositions(exampleMapOne);

        const paths = new Paths();
        const { charactersInPath, lettersInPath } = paths.init(result);

        expect(charactersInPath.join('')).toMatch('@---A---+|C|+---+|+-B-x');
        expect(lettersInPath.join('')).toMatch('ACB');
    });

    test('test for exampleMapTwo', () =>
    {
        ValidationOfChars.initValidation(exampleMapTwo);
        const result = Positions.getAllPossiblePositions(exampleMapTwo);

        const paths = new Paths();
        const { charactersInPath, lettersInPath } = paths.init(result);

        expect(charactersInPath.join('')).toMatch('@|A+---B--+|+--C-+|-||+---D--+|x');
        expect(lettersInPath.join('')).toMatch('ABCD');
    });

    test('test for exampleMapThree', () =>
    {
        ValidationOfChars.initValidation(exampleMapThree);
        const result = Positions.getAllPossiblePositions(exampleMapThree);

        const paths = new Paths();
        const { charactersInPath, lettersInPath } = paths.init(result);

        expect(charactersInPath.join('')).toMatch('@---A---+|||C---+|+-B-x');
        expect(lettersInPath.join('')).toMatch('ACB');
    });

    test('test for exampleMapFour', () =>
    {
        ValidationOfChars.initValidation(exampleMapFour);
        const result = Positions.getAllPossiblePositions(exampleMapFour);

        const paths = new Paths();
        const { charactersInPath, lettersInPath } = paths.init(result);

        expect(charactersInPath.join('')).toMatch('@-A--+|+-B--x');
        expect(lettersInPath.join('')).toMatch('AB');
    });

    test('test for exampleMapFive', () =>
    {
        ValidationOfChars.initValidation(exampleMapFive);
        const result = Positions.getAllPossiblePositions(exampleMapFive);

        const paths = new Paths();
        const { charactersInPath, lettersInPath } = paths.init(result);

        expect(charactersInPath.join('')).toMatch('@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x');
        expect(lettersInPath.join('')).toMatch('GOONIES');
    });

    test('test for exampleMapSix', () =>
    {
        ValidationOfChars.initValidation(exampleMapSix);
        const result = Positions.getAllPossiblePositions(exampleMapSix);

        const paths = new Paths();
        const { charactersInPath, lettersInPath } = paths.init(result);

        expect(charactersInPath.join('')).toMatch('@B+++B|+-L-+A+++A-+Hx');
        expect(lettersInPath.join('')).toMatch('BLAH');
    });

    test('test for exampleMapSeven', () =>
    {
        ValidationOfChars.initValidation(exampleMapSeven);
        const result = Positions.getAllPossiblePositions(exampleMapSeven);

        const paths = new Paths();
        const { charactersInPath, lettersInPath } = paths.init(result);

        expect(charactersInPath.join('')).toMatch('@--A-++-B-x');
        expect(lettersInPath.join('')).toMatch('AB');
    });

    test('test for exampleMapEight', () =>
    {
        ValidationOfChars.initValidation(exampleMapEight);
        const result = Positions.getAllPossiblePositions(exampleMapEight);

        const paths = new Paths();
        const { charactersInPath, lettersInPath } = paths.init(result);

        expect(charactersInPath.join('')).toMatch('@-A--++-Bx');
        expect(lettersInPath.join('')).toMatch('AB');
    });

    test('test for exampleMapNine', () =>
    {
        ValidationOfChars.initValidation(exampleMapNine);
        const result = Positions.getAllPossiblePositions(exampleMapNine);

        const paths = new Paths();
        const { charactersInPath, lettersInPath } = paths.init(result);

        expect(charactersInPath.join('')).toMatch('@--A---+|C|+---+|+x');
        expect(lettersInPath.join('')).toMatch('AC');
    });

    test('test for exampleMapTen', () =>
    {
        ValidationOfChars.initValidation(exampleMapTen);
        const result = Positions.getAllPossiblePositions(exampleMapTen);

        const paths = new Paths();
        const { charactersInPath, lettersInPath } = paths.init(result);

        expect(charactersInPath.join('')).toMatch('@--A---+|B-x');
        expect(lettersInPath.join('')).toMatch('AB');
    });
});
