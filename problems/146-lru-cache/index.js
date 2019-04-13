// Title  : lru-cache
// Date   : 2019-03-27
// Author : Daguo
/*****************************************
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例:

LRUCache cache = new LRUCache( 2 /* 缓存容量  );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
*****************************************/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity || 2;
  this.size = 0;
  this.store = {};
  this.freshStack = [];
  this.setStack = key => {
    for (let i = 0; i < this.freshStack.length; i++) {
      if (this.freshStack[i] === key) {
        this.freshStack.splice(i, 1);
        break;
      }
    }
    // 性能差
    // this.freshStack = this.freshStack.filter(v => v !== key);
    this.freshStack.unshift(key);
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // key不存在
  if (this.store[key] === undefined) return -1;
  // 将key置于栈底
  this.setStack(key);
  return this.store[key];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // 存储新的键值对时，先判断容量是否足够
  if (!this.store[key]) {
    if (this.size >= this.capacity) {
      // 容量不够，取freshStack栈顶元素
      const delKey = this.freshStack.pop();
      // 清除该key存储内容
      delete this.store[delKey];
    }
    this.size++;
  }
  // 存储新的键值对
  this.store[key] = value;
  // 将key置于栈底
  this.setStack(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = [null];
