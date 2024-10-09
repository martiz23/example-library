/**
 * Returns a key in a enum given a value.
 * @param value
 * @param enum
 * @returns key
 */
export function getKeyInEnum(value: string, enu: any): string | undefined {
  return Object.keys(enu).find((k) => enu[k] === value);
}
