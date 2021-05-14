//IIFE Immediate invoked function expressions

// Module pattern

const headingChanger = (function () {
  const newHeading = "This is the new Heading!";
  function changeHeading() {
    const heading = document.querySelector("h1");
    heading.innerText = newHeading;
  }
  return {
    changeHeading,
  };
})();
headingChanger.changeHeading();

const itemController = (function () {
  const items = [];
  function add(item) {
    items.push(item);
    console.log("Item added!!", items);
  }
  function get(id) {
    return items.find((ele) => ele.id === id);
  }
  return {
    add,
    get,
  };
})();

itemController.add({ id: 1, name: "Hemant" });
itemController.add({ id: 2, name: "Ravi" });

const getUser = itemController.get(1);
console.log(getUser);
