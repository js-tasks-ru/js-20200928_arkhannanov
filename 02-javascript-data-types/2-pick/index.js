/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

  let resultObj = {};
  let tempArray = Object.entries(obj);
  for (let i= 0; i < tempArray.length;  i++) {

    for (field of fields) {
      if (tempArray[i][field]) resultObj[field]=obj[filed];
  }

  return resultObj;
};
