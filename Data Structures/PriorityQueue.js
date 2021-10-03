/**
 * Priority Queue
 * functions: print, enqueue, dequeue, front, size, isEmpty
 */

const PriorityQueue = function () {
  let collection = [];

  this.print = () => {
    console.log(...collection);
    return collection;
  };

  this.enqueue = (value) => {
    if (this.isEmpty()) {
      collection.push(value);
    } else {
      let added = false;
      for (let i = 0; i < this.size(); i++) {
        if (value[1] < collection[i][1]) {
          collection.splice(i, 0, value);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(value);
      }
    }
  };

  this.dequeue = () => {
    if (!this.isEmpty()) {
      collection.shift();
    }
  };

  this.front = () => {
    return collection[0];
  };

  this.size = () => {
    return collection.length;
  };

  this.isEmpty = () => {
    return this.size() === 0;
  };
};

let pq1 = new PriorityQueue();

pq1.enqueue(["d", 10]);
pq1.enqueue(["a", 2]);
pq1.enqueue(["b", 3]);
pq1.enqueue(["d", 0]);
pq1.enqueue(["c", 1]);

pq1.print();
