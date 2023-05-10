import { exampleMapOne as exampleMap } from './ExampleMaps';
import ValidationOfChars from './lib/ValidationOfChars';
import Positions from './handlers/Positions';
import Paths from './handlers/Paths';

import { ResponsePossitionMapping } from './types/ExampleMapTypes';

(() =>
{
    // const exampleMap = [
    //     ['A', 'B', '+', 'C'],
    //     ['-', '@', '@', '|'],
    // ];

    ValidationOfChars.initValidation(exampleMap);
    const result: ResponsePossitionMapping = Positions.getAllPossiblePositions(exampleMap);

    const paths = new Paths();
    const { charactersInPath, lettersInPath } = paths.init(result);

    console.log(`Letters ${lettersInPath.join('')}`);
    console.log(`Path as characters ${charactersInPath.join('')}`);
})();
