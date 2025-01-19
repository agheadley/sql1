/*
export const unique = (arr: { [key: string]: string|number|boolean }[],props:string[])=>{
    return [...new Map(arr.map(entry => [props.map(k=> String(entry[k])).join('|'), entry])).values()];
};
*/


export const unique = <S extends { [key: string]: unknown }>(arr: S[], props: string[]): S[] => {
    return [...new Map(arr.map(entry => [props.map(k=> String(entry[k])).join('|'), entry])).values()];
};



/* https://stackoverflow.com/questions/38613654/javascript-find-unique-objects-in-array-based-on-multiple-properties */
/* TYPES - https://www.geeksforgeeks.org/how-to-get-an-object-value-by-key-in-typescript/ */
//export const unique = (arr : { [key: string]: string|number|boolean }[],props:string[]) => [...new Map(arr.map(entry => [props.map(k=> String(entry[k])).join('|'), entry])).values()];
