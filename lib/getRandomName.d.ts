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
declare const getRandomName: (fn: string[], mn: string[], ln: string[]) => string;
export default getRandomName;
