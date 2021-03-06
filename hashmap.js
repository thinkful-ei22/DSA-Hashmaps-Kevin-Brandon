'use strict';

class HashMap{
  constructor (initialCapacity=8){
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
    this.MAX_LOAD_RATIO = 0.6;
    this.SIZE_RATIO = 3;
  }

  static _hashString(string){
    // console.log(string, 'hashed string');
    let hash = 5381;

    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }


  get(key){
    const index = this._findSlot(key);
    //  console.log(index, 'ind');
    if (this._slots[index] === undefined){
      throw new Error('Key error');
    }
    return this._slots[index].value;
  }

  set (key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > this.MAX_LOAD_RATIO) {
      this._resize(this._capacity * this.SIZE_RATIO);
    }

    const index = this._findSlot(key);
    this._slots[index] = {
      key, 
      value,
      deleted: false
    };
    if (this._slots[index]){
      this.length++;
    }

  }

  remove(key){
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if (slot === undefined){
      throw new Error('Key Error');
    }
    slot.deleted = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key) {
    // console.log(key, 'key');
    const hash = HashMap._hashString(key);
    // console.log(hash, key);
    const start = hash % this._capacity;
    // console.log(start, 'start');

    for (let i = start; i < start + this._capacity; i++){
      const index = i % this._capacity;
      // console.log(index, 'ind of %');
      const slot = this._slots[index];

      if (slot === undefined || (slot.key === key && !slot.deleted)){
        return index;
      }
    }
  }

  _resize(size) {
    const oldSlots = this._slots;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add items back
    this.length = 0;
    this._deleted = 0;
    this._slots = [];

    for (const slot of oldSlots){
      if (slot !== undefined && !slot.deleted){
        this.set(slot.key, slot.value);
      }
    }
  }

}


module.exports = HashMap;

// HashMap.MAX_LOAD_RATIO = 0.9;
// HashMap.SIZE_RATIO = 3;

