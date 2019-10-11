class Node {

	constructor(key,val) {
		this.key = key
		this.value = val

		this.prev = null
		this.next = null
	}
}

class Cache {

	constructor() {
		this.limit = 10

		this.head = null
		this.tail = null

		this.length = 0

		this.cache = {}
	}

	setItem(key, val) {

		if(this.getItem(key)) return false
		this.checkLimit()

		let node = new Node(key, val)
		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			let temp = this.head
			this.head = node
			node.next = temp
			temp.prev = node
		}

	    this.cache[key] = this.head;
		this.length++
		return true
	}

	getItem(key) {

		if(this.cache[key]){

      		let value = this.cache[key].value;
      		this.removeItem(key)
      		this.setItem(key, value);

      		return value;
    	}
    	return false
	}

	checkLimit(){
    	if(this.length === this.limit){
      		this.removeItem(this.tail.key)
    	}
  	}

  	removeItem(key) {

  		let node = this.cache[key];

	    if(node.prev !== null){
	      node.prev.next = node.next;
	    } else {
	      this.head = node.next;
	    }

	    if(node.next !== null){
	      node.next.prev = node.prev;
	    } else {
	      this.tail = node.prev
	    }

	    delete this.cache[key];
	    this.length--;
	}

	getList() {
		let arr = []
		let current = this.head
		let counter = 0

		while(counter < this.length) {
			arr.push(current.key)
			current = current.next
			counter++ 
		}
		return arr
	}

	reset() {
    	this.head = null;
    	this.tail = null;
    	this.length = 0;
    	this.cache = {};
  }
}

let MyCache = new Cache;