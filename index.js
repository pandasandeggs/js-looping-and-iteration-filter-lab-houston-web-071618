// Code your solution in this file
function findMatching(array,name){
  return array.filter(function(driver){
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(array,name){
  let nameLength = name.length;
  return array.filter(function(driver){
    return driver.slice(0,nameLength) === name;
  });
}

function matchName(array,name){
  return array.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
