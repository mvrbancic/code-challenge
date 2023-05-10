import { RowMap, RowMapping, ResponsePossitionMapping } from '../types/ExampleMapTypes';

const Positions = class Positions
{
    pathOfCharacters: string[] = [];

    letters: string[] = [];

    static getAllPossiblePositions(exampleMap: RowMap): ResponsePossitionMapping
    {
        // char A postiotion [x][y] = 'A'
        const charPositionMapping: RowMapping = {};
        let startCharPositionX: number = 0;
        let startCharPositionY: number = 0;

        exampleMap.forEach((value, x) =>
        {
            value.forEach((char, y) =>
            {
                if (char !== '')
                {
                    if (charPositionMapping[x] == null)
                    {
                        charPositionMapping[x] = {};
                    }

                    charPositionMapping[x][y] = char;

                    if (char === '@')
                    {
                        startCharPositionX = x;
                        startCharPositionY = y;
                    }
                }
            });
        });

        return {
            charPositionMapping,
            startCharPositionX,
            startCharPositionY,
        };
    }
};

export default Positions;
