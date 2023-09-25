export const localStorageKeys = {
   dataTrackActiveTab: 'dataTrackActiveTab',
};

const parse = (value: any) => {
   try {
      return JSON.parse(value);
   } catch {
      return value;
   }
};

const stringify = (value: any) =>
   typeof value === 'object' ? JSON.stringify(value) : value;

/**
 * A utility function for persisting data to browser storage.
 *
 * @param {object} data
 * @param {boolean} [permanent] - Indicates persistance kind.
 * @example
 * persist({
 *    iaAuthorized: true,
 *    user: { name: 'Erfan', age: 24 }
 * })
 */
const persist = (data: any, permanent = true) => {
   const storage = permanent ? localStorage : sessionStorage;

   Object.keys(data).forEach(key => {
      storage.setItem(key, stringify(data[key]));
   });
};

/**
 * A utility function for restoring data that has
 * been saved on browser storage already.
 *
 * @param {string|string[]} keys - Name of properties to restore.
 * @param {boolean} [permanent] - Indicates persistance kind.
 * @returns Data corresponding to keys.
 * @example
 * // Restore a single property.
 * const isAuthorized = restore('isAuthorized')
 *
 * // Restore several properties.
 * const [isAuthorized, user] = restore(['isAuthorized', 'user'])
 */
const restore = (keys: string[] | string, permanent = true) => {
   const storage = permanent ? localStorage : sessionStorage;

   return Array.isArray(keys)
      ? keys.map(key => parse(storage.getItem(key)))
      : parse(storage.getItem(parse(keys)));
};

export { persist, restore };
