/**
 * Queue
 * functions: print, enqueue, dequeue, front, size, isEmpty
 */

const Queue = function() {
    let collection = [];

    this.print=()=> {
        console.log(collection)
        return collection;
    }

    this.enqueue=(value)=> {
        collection.push(value);
    }

    this.dequeue = () => {
        if(!this.isEmpty()){
            collection.shift();
        }
    }

    this.front = () => {
        return collection[0];
    }

    this.size = () => {
        return collection.length;
    }

    this.isEmpty = () => {
        return this.size() === 0
    }
}

let q1 = new Queue();

q1.enqueue(1)
q1.enqueue(2)

q1.print();

q1.dequeue();

q1.print();
console.log(q1.front())