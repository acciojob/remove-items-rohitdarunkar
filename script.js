//your JS code here. If required.
const btn = document.querySelector('input[type="button"]');

btn.addEventListener("click", function () {
  const select = document.getElementById("colorSelect");

  // Remove selected option
  if (select.selectedIndex !== -1) {
    select.remove(select.selectedIndex);
  }
});
