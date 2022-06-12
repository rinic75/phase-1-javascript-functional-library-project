function makeCollection(collection) {
  if (collection instanceof Array) {
    return collection;
  } else {
    return Object.values(collection)
  }
}

const myEach = function (collection, callback) {
  let newCollection =makeCollection(collection);
  for(let i=0; i<newCollection.length; i++) {
    callback(newCollection[i])
  }
  return collection;
}

const myMap = function (collection, callback) {
  let newCollection =makeCollection(collection);
  let newArr = []
  for(let i=0; i<newCollection.length; i++) {
    newArr.push(callback(newCollection[i]));
  }
  return newArr;
}

const myReduce = function (collection, callback, acc) {
  let newCollection = makeCollection(collection);
  if(!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }
  for(let i=0; i<newCollection.length; i++) {
    acc = callback(acc, newCollection[i], newCollection)
  }
  return acc;  
}

const myFind = function (collection, predicate) {
  let newCollection =makeCollection(collection);
  for (let i=0; i<newCollection.length; i++) {
    if(predicate(newCollection[i])=== true) {
      return newCollection[i];
    }
  }
}

const myFilter = function (collection, predicate) {
  let newCollection =makeCollection(collection);
  let newArr =[];
  for (let i=0; i<newCollection.length; i++) {
    if(predicate(newCollection[i])=== true) {
      newArr.push(newCollection[i]);
    }
  }
  return newArr;
}

const mySize = function (collection) {
  let newCollection =makeCollection(collection);
  return newCollection.length
}

const myFirst = function (array, end) {
  if(!end) {
    return array[0]; 
  } else {
    return array.slice(0, end);
  }
}

const myLast = function (array, start) {
  if(!start) {
    return array[array.length-1];
  } else {
    return array.slice(array.length-start);  
  }
}

const myKeys = function (object) {
  const newArr = [];
  for(let key in object) {
    newArr.push(key);
  }
  return newArr;
}

const myValues = function(object) {
  const newArr = [];
  for (let key in object){
    newArr.push(object[key]);
  }
  return newArr;
}