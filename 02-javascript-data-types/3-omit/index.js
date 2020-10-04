/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let resultObj = obj.assign({}, obj );
  let tempArray = Object.entries(obj);
  for (let i= 0; i < tempArray.length;  i++) {

    for (field of fields) {
      if (tempArray[i][field]) {
        delete resultObj[field];
      }
    }

    return resultObj;
};
