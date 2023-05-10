import { CharacterObject, ResponsePossitionMapping, RowMapping } from '../types/ExampleMapTypes';

const Paths = class Paths
{
    previousePathPositions: Record<string, string> = {};

    currentCharacter: CharacterObject = {
        value: '',
        positionX: 0,
        positionY: 0,
    };

    previousCharacter: CharacterObject = {
        value: '',
        positionX: 0,
        positionY: 0,
    };

    charMap: RowMapping = {};

    charactersInPath: string[] = [];

    lettersInPath: string[] = [];

    init(result: ResponsePossitionMapping)
    {
        const me = this;

        me.charMap = result.charPositionMapping;
        me.currentCharacter.positionX = result.startCharPositionX;
        me.currentCharacter.positionY = result.startCharPositionY;
        me.currentCharacter.value = me.charMap[me.currentCharacter.positionX][me.currentCharacter.positionY];
        me.charactersInPath.push(me.currentCharacter.value);

        me.getAllCharactersInPaths();

        return {
            charactersInPath: me.charactersInPath,
            lettersInPath: me.lettersInPath,
        };
    }

    getAllCharactersInPaths()
    {
        const me = this;
        try
        {
            const checkForMultiplePaths: string[] = [];
            const fieldValuAndPostion: CharacterObject[] = [];
            const allPossiblePositions = [
                [0, 1],
                [0, -1],
                [-1, 0],
                [1, 0],
            ];

            for (const position of allPossiblePositions)
            {
                const positionX = me.currentCharacter.positionX + position[0];
                const positionY = me.currentCharacter.positionY + position[1];
                if (me.charMap[positionX] && me.charMap[positionX][positionY])
                {
                    const value = me.charMap[positionX][positionY];
                    checkForMultiplePaths.push(me.charMap[positionX][positionY]);
                    fieldValuAndPostion.push({
                        value,
                        positionX,
                        positionY,
                    });
                }
            }

            me.checkIfMultiplePathsExist(checkForMultiplePaths, fieldValuAndPostion);

            if (me.currentCharacter.value === '@')
            {
                me.charactersInPath.push(fieldValuAndPostion[0].value);
                me.setPreviousePathPositions();
                me.previousCharacter = { ...me.currentCharacter };
                me.currentCharacter = { ...fieldValuAndPostion[0] };
            }
            else
            {
                let newFieldValueAndPosition = me.removePreviousStepOrAllSteps(fieldValuAndPostion);
                newFieldValueAndPosition = me.pathRules(newFieldValueAndPosition);

                me.charactersInPath.push(newFieldValueAndPosition[0].value);
                me.setPreviousePathPositions();
                me.previousCharacter = { ...me.currentCharacter };
                me.currentCharacter = { ...newFieldValueAndPosition[0] };
            }
        }
        finally
        {
            if (me.currentCharacter.value !== 'x')
            {
                me.getAllCharactersInPaths();
            }
        }
    }

    setPreviousePathPositions()
    {
        const me = this;
        const x = me.currentCharacter.positionX;
        const y = me.currentCharacter.positionY;

        const validationPattern = /([A-Z])/g;

        if (me.previousePathPositions[`${x}${y}`] == null
            && validationPattern.exec(me.currentCharacter.value) != null)
        {
            me.lettersInPath.push(me.currentCharacter.value);
        }

        me.previousePathPositions[`${x}${y}`] = me.currentCharacter.value;
    }

    checkIfMultiplePathsExist(checkForMultiplePaths: string[], fieldValuAndPostion: CharacterObject[] = [])
    {
        const me = this;
        if (me.currentCharacter.value === '@' && checkForMultiplePaths.length > 1)
        {
            throw new Error('Multiple paths');
        }

        if (me.currentCharacter.value === '+')
        {
            const numberOfNewSteps = me.removePreviousStepOrAllSteps(fieldValuAndPostion);
            if (numberOfNewSteps.length > 1)
            {
                throw new Error('Multiple paths');
            }
        }
    }

    removePreviousStepOrAllSteps(fieldValuAndPostion: CharacterObject[] = [])
    {
        const me = this;
        const nextStepsWithoutPreviousStep = fieldValuAndPostion.filter((item: CharacterObject) =>
        {
            const isPreviouse = (item.positionX === me.previousCharacter.positionX
                && item.positionY === me.previousCharacter.positionY);
            if (!isPreviouse)
            {
                return item;
            }
        });

        // if not in intersection, remove all previous steps
        if (nextStepsWithoutPreviousStep.length > 1)
        {
            const removeAllPrevouseSteps = nextStepsWithoutPreviousStep.filter((item: CharacterObject) =>
            {
                if (me.previousePathPositions[`${item.positionX}${item.positionY}`] == null)
                {
                    return item;
                }
            });

            return removeAllPrevouseSteps;
        }

        return nextStepsWithoutPreviousStep;
    }

    pathRules(newFieldValueAndPosition: CharacterObject[])
    {
        const me = this;

        let filredValuesAndPositionWithRules = newFieldValueAndPosition;
        if (filredValuesAndPositionWithRules.length !== 1)
        {
            const charactersForRuleChecking = ['|', '-', '+'];
            filredValuesAndPositionWithRules = filredValuesAndPositionWithRules.filter((item: CharacterObject) =>
            {
                if (me.currentCharacter.value !== '+'
                    && charactersForRuleChecking.indexOf(me.previousCharacter.value) !== -1)
                {
                    if (me.previousCharacter.value === '|' && item.positionY === me.previousCharacter.positionY)
                    {
                        return item;
                    }

                    if (me.previousCharacter.value === '-' && item.positionX === me.previousCharacter.positionX)
                    {
                        return item;
                    }

                    if (item.value === '+')
                    {
                        return item;
                    }
                }
                else
                {
                    return item;
                }
            });
        }

        if (filredValuesAndPositionWithRules.length === 0)
        {
            throw new Error('Broken path');
        }

        if (me.currentCharacter.value === '+')
        {
            if ((me.previousCharacter.positionX === newFieldValueAndPosition[0].positionX)
            || (me.previousCharacter.positionY === newFieldValueAndPosition[0].positionY))
            {
                throw new Error('Fake turn');
            }
        }

        return filredValuesAndPositionWithRules;
    }
};

export default Paths;
