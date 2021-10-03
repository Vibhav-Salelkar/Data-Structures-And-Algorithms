/**
 * Sets
 * functions: has, values, add, remove, size, union, intersection, difference, subset
 */

const CustomSet = function () {
  let collection = [];

  this.has = (value) => {
    return collection.indexOf(value) !== -1;
  };

  this.values = () => {
    return collection;
  };

  this.add = (value) => {
    if (!this.has(value)) {
      collection.push(value);
    } else {
      return;
    }
  };

  this.remove = (value) => {
    if (this.has(value)) {
      let index = collection.indexOf(value);
      collection.splice(index, 1);
    } else {
      return;
    }
  };

  this.size = () => {
    return collection.length;
  };

  this.union = (newSet) => {
    let unionSet = new CustomSet();
    let firstSet = this.values();
    let secondSet = newSet.values();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet.values();
  };

  this.intersection = (newSet) => {
    let intersectionSet = new CustomSet();
    let firstSet = this.values();
    firstSet.forEach((e) => {
      if (newSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet.values();
  };

  this.difference = (newSet) => {
    let differenceSet = new CustomSet();
    let firstSet = this.values();
    firstSet.forEach((e) => {
      if (!newSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet.values();
  };

  this.subset = (newSet) => {
    let firstSet = this.values();
    return firstSet.every((value) => {
      return newSet.has(value);
    });
  };
};

const cs1 = new CustomSet();

cs1.add(3);
cs1.add(4);
cs1.add(1);
console.log(cs1.has(3));
console.log(cs1.values());
console.log(cs1.size());

const cs2 = new CustomSet();
cs2.add(3);
cs2.add(4);
cs2.add(5);

console.log(cs1.union(cs2));
console.log(cs1.intersection(cs2));
console.log(cs1.difference(cs2));
console.log(cs1.subset(cs2));
