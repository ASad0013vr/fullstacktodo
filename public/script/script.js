function printKeyword() {
  let q = document.querySelector("input").value;
  window.location.href = `http://localhost:5000/viewTodo?kwd=${encodeURIComponent(
    q
  )}`;
}
let i = 0;
function markImp(btn) {
  const parentNode = btn.parentNode;
  const isMarked = parentNode.getAttribute("marked") === "true";

  if (!isMarked) {
    parentNode.style.backgroundColor = "red";
    btn.innerText = "Unmark";
    parentNode.setAttribute("marked", "true");
  } else {
    parentNode.style.backgroundColor = "";
    btn.innerText = "Mark Important";
    parentNode.setAttribute("marked", "false");
  }
}
