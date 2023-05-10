import { RowMap } from '../types/ExampleMapTypes';
import { SuccessResponse } from '../types/Response';

const ValidationOfChars = class ValidationOfChars
{
    static initValidation(exampleMap: RowMap)
    {
        ValidationOfChars.checkIfValidTwoDMap(exampleMap);
        ValidationOfChars.checkForCharacters(exampleMap);
        ValidationOfChars.checkForValidStart(exampleMap);
        ValidationOfChars.checkForValidEnd(exampleMap);
    }

    static checkIfValidTwoDMap(exampleMap: RowMap): SuccessResponse
    {
        if (!Array.isArray(exampleMap))
        {
            throw new Error('Not a valid array');
        }

        exampleMap.forEach((item) =>
        {
            if (!Array.isArray(item))
            {
                throw new Error('Not a valid array');
            }
        });

        return {
            error: false,
            notice: 'success',
        };
    }

    static checkForCharacters(exampleMap: RowMap): SuccessResponse
    {
        const rowMapString: string[] = [];
        exampleMap.forEach((cell) => rowMapString.push(cell.join(',')));
        const exampleMapString = rowMapString.join(',');

        const validationPattern = /([^A-Z,@,|,x,+,-])/g;

        if (validationPattern.exec(exampleMapString) != null)
        {
            throw new Error('Not valid caracthers found');
        }

        return {
            error: false,
            notice: 'success',
        };
    }

    static checkForValidStart(exampleMap: RowMap)
    {
        let count = 0;

        exampleMap.forEach((cell) =>
        {
            cell.forEach((cellValue) =>
            {
                if (cellValue === '@')
                {
                    count += 1;
                }
            });
        });

        if (count < 1 || count > 1)
        {
            throw new Error('Not a valid start');
        }
    }

    static checkForValidEnd(exampleMap: RowMap)
    {
        let count = 0;

        exampleMap.forEach((cell) =>
        {
            cell.forEach((cellValue) =>
            {
                if (cellValue === 'x')
                {
                    count += 1;
                }
            });
        });

        if (count < 1 || count > 1)
        {
            throw new Error('Not a valid end');
        }
    }
};

export default ValidationOfChars;
