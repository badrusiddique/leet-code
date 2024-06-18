/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class ItemNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.head = new ItemNode(0, 0);
    this.tail = new ItemNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.len = 0;
    this.nodemap = {};
  }
  update_Lastitem_used(key) {
    let capturedNode = this.nodemap[key];
    capturedNode.prev.next = capturedNode.next;
    capturedNode.next.prev = capturedNode.prev;
    capturedNode.next = this.head.next;
    capturedNode.prev = this.head;
    this.head.next.prev = capturedNode;
    this.head.next = capturedNode;
  }
  UpdateHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next = node;
    node.next.prev = node;
  }
  deleteLRU() {
    let lru = this.tail.prev;
    delete this.nodemap[lru.key];
    lru.prev.next = this.tail;
    this.tail.prev = lru.prev;
    lru.next = null;
    lru.prev = null;
  }
  get(key) {
    if (this.nodemap[key] !== undefined) {
      this.update_Lastitem_used(key);
      return this.nodemap[key].val;
    } else return -1;
  }
  put(key, value) {
    if (this.nodemap[key] == undefined) {
      if (this.len == this.capacity) this.deleteLRU();
      else this.len += 1;
      this.nodemap[key] = new ItemNode(key, value);
      this.UpdateHead(this.nodemap[key]);
    } else {
      this.nodemap[key].val = value;
      this.update_Lastitem_used(key)
    }
  }
}

//give input the numbers array only to check your ans and rapid input in your lru cache
//bonus function for ans checking and rapid input
//not the part of code
function LRUprocessor(arr) {
  let cache = null;
  let ans = [null];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (i == 0) cache = new LRUcache(elem[0]);
    else if (elem.length == 2) {
      ans.push(cache.put(elem[0], elem[1]));
    } else {
      ans.push(cache.get(elem[0]));
    }
  }
  return ans;
}
