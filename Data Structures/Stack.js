/**
 * Stack
 * functions: Push, Pop, Peek, Size
 */

const Stack = function () {
  let count = 0;
  let storage = {};

  this.push = (value) => {
    storage[count] = value;
    count++;
  };

  this.pop = () => {
    if (count === 0) return undefined;
    count--;
    let removedElement = storage[count];
    delete storage[count];
    return removedElement;
  };

  this.size = () => {
    return count;
  };

  this.peek = () => {
    return storage[count - 1];
  };
};

const s1 = new Stack();

//operations
s1.push(1);
s1.push(2);
console.log(s1.peek());
s1.push(3);
console.log(s1.size());
console.log(s1.peek());
s1.pop();
console.log(s1.peek());
