const input = document.getElementById("user-input");

const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (input.innerText === "NaN") {
        input.innerText = "";
      }
      if (input.innerText === "0") {
        input.innerText = "";
      }
      input.innerText += e.target.innerHTML.trim();
    });
  });

  const calculate = document
  .querySelectorAll(".operations")
  .forEach(function (item) {
    item.addEventListener("click", function (e) {
      console.log(e.target.innerHTML);
      
      let lastValue = input.innerText.substring(input.innerText.length, input.innerText.length-1);
      if (!isNaN(lastValue) && e.target.innerHTML === "=") {
          input.innerText = eval(input.innerText);
      } 
      else if (e.target.innerHTML === "AC") {
          input.innerText = 0;
      } 
      else if (e.target.innerHTML === "DEL") {
          input.innerText = input.innerText.substring(0,input.innerText.length - 1);
          if (input.innerText.length == 0) {
              input.innerText = 0;
          }
      } 
      else {
          if (!isNaN(lastValue)){
              input.innerText += e.target.innerHTML;
          }
      }
      
    });
  });