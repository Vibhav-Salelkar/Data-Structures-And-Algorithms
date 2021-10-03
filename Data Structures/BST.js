/**
 * Binary Search Tree
 * functions: add, findMin, findMax, find, isPresent, remove, print, minHeight, maxHeight, isBalanced
 * Traversal: inOrder, preOrder, postOrder, levelOrder
 */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    console.log(current.data);
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    console.log(current.data);
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return;
      }
    }
    console.log(current);
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (current.data === data) {
        return true;
      }
      if (data === current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    console.log(false);
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }

  print() {
    console.log(this.root);
  }

  minHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.minHeight(node.left);
    let right = this.minHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  maxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }
    let left = this.maxHeight(node.left);
    let right = this.maxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isBalanced() {
    return this.minHeight() >= this.maxHeight() - 1;
  }

  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      function traverseInorder(node) {
        node.left && traverseInorder(node.left);
        result.push(node.data);
        node.right && traverseInorder(node.right);
      }
      traverseInorder(this.root);

      console.log(result);
      return result
    }
  }

  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      function traversePreorder(node) {
        result.push(node.data);
        node.left && traversePreorder(node.left);
        node.right && traversePreorder(node.right);
      }
      traversePreorder(this.root);
      
      console.log(result);
      return result
    }
  }

  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      function traversePostorder(node) {
        node.left && traversePostorder(node.left);
        node.right && traversePostorder(node.right);
        result.push(node.data);
      }
      traversePostorder(this.root);
      
      console.log(result);
      return result
    }
  }

  levelOrder() {
      let result = [];
      let q = [];
      if(this.root !== null){
        q.push(this.root);
        while(q.length > 0){
            let node = q.shift();
            result.push(node.data)
            node.left && q.push(node.left);
            node.right && q.push(node.right)
        }
        console.log(result)
        return result
      }else {
        return null
      }
  }
}

let b = new BST();

b.add(9);
b.add(4);
b.add(17);
b.add(3);
b.add(6);
b.add(10);
b.add(22);
b.add(5);
b.add(7);
b.add(20);

b.print();

