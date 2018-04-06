/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let _head = null;
  let _tail = null;

  function getHead() {
    return _head;
  }
  function getTail() {
    return _tail;
  }
  function add(val) {
    let newNode = {
      value: val,
      next: null,
      prev: null
    };
    if (_head === null) {
      _head = newNode;
      _tail = newNode;
    } else {
      _tail.next = newNode;
      newNode.prev = _tail;
      _tail = newNode;
    }
    return newNode;
  }
  function get(num) {
    let curr = _head;
    if (num < 0) {
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
    let curr = get(num);
    let prev = get(num - 1);
    if (num === 0) {
      if (_tail === _head) {
        _head = null;
        _tail = null;
      } else {
        _head = _head.next;
        _head.prev = null;
      }
    } else if (curr === _tail) {
      prev.next = null;
      curr.prev = null;
      _tail = prev;
    } else if (curr) {
      prev.next = curr.next;
      curr.next.prev = prev;
      curr.prev = null;
    }
    return curr;
  }
  function insert(val, num) {
    let curr = get(num);
    let prev = get(num - 1);
    let newNode = {
      value: val,
      next: null,
      prev: null
    };
    if (num === 0) {
      newNode.next = _head;
      _head.prev = newNode;
      _head = newNode;
    } else if (curr) {
      newNode.next = curr;
      newNode.prev = prev;
      prev.next = newNode;
      curr.prev = newNode;
    }
    return false;
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
