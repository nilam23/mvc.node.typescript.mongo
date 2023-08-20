/**
 * @description this method checks if the value specified is empty
 * @param {string | number | object} value the value to be checked if it's empty
 * @returns a boolean confirming the check
 */
export const _isEmpty = (value: string | number | object): boolean => {
  if (value === null) return true;
  else if (typeof value !== 'number' && value === '') return true;
  else if (typeof value === 'undefined' || value === undefined) return true;
  else if (value !== null && typeof value === 'object' && !Object.keys(value).length) return true;
  else return false;
};
