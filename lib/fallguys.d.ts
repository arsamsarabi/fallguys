export declare type NamesModifiers = {
    firstnames?: string[];
    middlenames?: string[];
    lastnames?: string[];
};
export declare type FGConfig = {
    numberOfNames?: number;
    mix?: NamesModifiers;
    replace?: NamesModifiers;
};
declare const main: ({ numberOfNames, mix, replace, }: FGConfig) => string | string[];
export default main;
