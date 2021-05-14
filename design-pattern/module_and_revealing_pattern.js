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
