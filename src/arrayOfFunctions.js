// Recursion meets functional programming
// applyFilters takes an array of functions in this case, myFunctions.
// Each of the functions in myFunctions return a filtered array.
// applyFilters returns the result after the array has been passed by each function in myFunctions

const myArr = [1, 2, 3, 4, 5, 4, 5, 6, 7, 40, 18, 91, 103, 48388, 365472, 0];

// INDIVIDUAL ARRAY FILTERS, YOU CAN ADD AS MANY AS YOU LIKE!
getEvens = arr => {
  return arr.filter(ele => ele % 2 === 0);
};

stripTwos = arr => {
  return arr.filter(ele => ele != 2);
};

stripFours = arr => {
  return arr.filter(ele => ele != 4);
};

// BUILDING THE ARRAY OF FILTERS THAT WILL BE APPLIED
const myFunctions = [getEvens, stripTwos, stripFours];

// RECURSIVELY APPLY ALL FILTERS
applyFilters = activeFilters => {
  if (activeFilters.length == 0) {
    return myArr;
  } else {
    return activeFilters[activeFilters.length - 1](
      applyFilters(activeFilters.slice(0, activeFilters.length - 1))
    );
  }
};

console.log(applyFilters(myFunctions));
