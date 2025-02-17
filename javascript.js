function LinkedList() {
  const list = [];
  const append = (value) => {
    const node = new Node();
    node.value = value;
    list.push(node);
  };
  const prepend = (value) => {
    const node = new Node();
    node.value = value;
    node.nextNode = list[0];
    list.unshift(node);
  };
  const size = () => {
    return list.length;
  };
  const head = list[0];
  const tail = list[size - 1];
  const at = (index) => {
    list.splice(index, 1);
  };
  const pop = () => {
    list.pop();
  };
  const contains = (value) => {
    return list.includes(value) ? true : false;
  };
  const find = (value) => {
    return list.indexOf(value);
  };
  const toString = () => {
    let string = "";
    for (let i = 0; i < list.length; i++) {
      string += `( ${list[i].value} ) -> `;
    }
    string += "null";
    return string;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
}

function Node() {
  let value = null;
  let nextNode = null;
  return { value, nextNode };
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("owl");

console.log(list.toString());
