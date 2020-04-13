const Stack = function() {
  return {
    items: [],
    add(item){
      this.items.push(item)
    },
    remove(){
      return this.items.pop()
    },
    peek(){
      return this.items[this.items.length-1]
    }
  }
}

const Queue = function() {
  return {
    items: [],
    add(item){
      this.items.push(item)
    },
    remove(){
      return this.items.shift()
    },
    peek(){
      return this.items[0]
    }
  }
}

module.exports = {
  Stack,
  Queue,
}