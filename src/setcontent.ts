export type classSetContentType<T extends { new(...args: any[]): {} }> = (constructor: T) => any

/** Add/override a method or a property to a class
 * example 
 * @classSetContent("value", 1)
 * class MyClass { 
 *   constructor() { 
 *     console.log(this.value); 
 *   } 
 * }
 * 
 * @param key - method/property to set
 * @param value - value of the method/property to set
 */
export function classSetContent<V, T extends { new(...args: any[]): {} }>(key: string, value: V): classSetContentType<T> {
  return function <T extends { new(...args: any[]): {} }>(constructor: T) {
    Object.defineProperty(constructor.prototype, key, { value });
    return constructor
  }
}
