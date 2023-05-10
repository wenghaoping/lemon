export const root = process.cwd();

/**
 * key=val & key=val => { key: val, key: val }
 * @param str 
 * @returns 
 */
export const parsePair = <T>(str: string) => str
    .split('&')
    .filter(i => i.indexOf('='))
    .map(i => i.trim().split('='))
    .reduce((res, [k, v]) => {
        res[k] = v;
        return res;
    }, {} as T);