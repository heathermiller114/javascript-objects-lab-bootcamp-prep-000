var recipes = {
  eggs: '3',
  chocolate: '1 cup',
  oil: '3 tsp',
  flour: '2 cups'
};
function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign( {}, )
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
