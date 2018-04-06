/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let _head = null;
  let _tail = null;

  // let _linkedList = null;

  // let _pointer = null;

  function getHead() {
    return _head;
  }

  function getTail() {
    return _tail;
  }

  function add(val) {
    let newNode = { value: val, next: null };
    if (_head === null) {
      _head = newNode;
      _tail = newNode;
    } else {
      _tail.next = newNode;
      _tail = newNode;
    }
    return newNode;
  }

  function get(num) {
    let curr = _head;
    if (num < 0 || curr === null) {
      return false;
    }
    for (let i = 0; i < num; i++) {
      curr = curr.next;
      if (curr === null) {
        return false;
      }
    }
    return curr;
  }

  function remove(num) {
    let prev = get(num - 1);
    let target = get(num);
    if (num === 0) {
      _head = _head.next;
    } else if (target === _tail) {
      prev.next = null;
      _tail = prev;
    } else if (prev && target) {
      prev.next = target.next;
    }

    // get(num) will set target to false if num is beyond the length of the linked list
    return target;
  }

  function insert(val, num) {
    let prev = get(num - 1);
    let target = get(num);
    let newNode = { value: val, next: null };
    if (!target) {
      return false;
    }
    if (num === 0) {
      newNode.next = _head;
      _head = newNode;
    } else {
      newNode.next = target;
      prev.next = newNode;
    }
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}
