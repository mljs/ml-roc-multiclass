import { Class } from '../../types/Class';

/**
 * @param {Array<string>} array Array containing category metadata
 * @return {Array<Object>} { class: string, value: number, ids: [] }.
 */
export function getClasses(array: string[]) {
  let nbClasses = 0;
  const classes: Class[] = [{ name: array[0], value: 0, ids: [] }];
  for (let element of array) {
    const currentClass = classes.some((item) => item.name === element);
    if (!currentClass) {
      nbClasses++;
      classes.push({ name: element, value: nbClasses, ids: [] });
    }
  }

  for (let category of classes) {
    let label: string = category.name;
    let indexes: number[] = [];
    for (let j = 0; j < array.length; j++) {
      if (array[j] === label) indexes.push(j);
    }
    category.ids = indexes;
  }
  return classes;
}
