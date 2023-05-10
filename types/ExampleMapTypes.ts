export type ColumnMap = string[];

export type RowMap = ColumnMap[];

export type CellMapping = Record<number, string>;

export type RowMapping = Record<number, CellMapping>;

export interface ResponsePossitionMapping {
    charPositionMapping: RowMapping,
    startCharPositionX: number,
    startCharPositionY: number,
}

export type CharacterObject = {
    value: string,
    positionX: number,
    positionY: number,
};
