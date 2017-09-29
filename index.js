const sortObjectByKey = (obj) => {
  return Object.keys(obj)
    .sort()
    .map((key) => {
      return [key, obj[key]]
    })
}

const isObject = (value) => {
  return !(isArray(value)) && typeof value === 'object'
}

const isArray = (value) => (value instanceof Array)


const sortObject = (value, key, obj) => {
  if (value) {      
    traverseObject(value);
    if (isObject(value)) {
      obj[key] = sortObjectByKey(value);
    }
    
  }
}

const traverseObject = (obj) => {
  if (isArray(obj)) {
    obj.forEach((value, idx) => {
      sortObject(value, idx, obj);
    })
  }

  if (isObject(obj)) {
    for(var key in obj) {
      sortObject(obj[key], key, obj);
    }
  }

  return obj;
}


export default function (obj) {
  const sortedObject = traverseObject(obj);
  
  if (isObject(obj)) {
    return JSON.stringify(sortObjectByKey(sortedObject));
  }

  return JSON.stringify(sortedObject);
}
