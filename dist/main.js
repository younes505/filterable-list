// Get input field
let filterInput = document.getElementById("filterInput");
// Add event handler
filterInput.addEventListener("keyup", filterNames);

// Function
function filterNames() {
  // get value
  let filterValue = filterInput.value.toUpperCase();
  let lis = document.querySelectorAll("li.item");
  lis.forEach((li) => {
    let a = li.querySelector("a");
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
}
