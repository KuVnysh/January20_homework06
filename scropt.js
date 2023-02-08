// let myDeleter = document.getElementById('deleter')
// myDeleter.onclick = function () {
//     document.getElementById('text').remove()
// }
// myDeleter.addEventListener("click", () => document.getElementById('text').remove())


// let myDeleter = document.getElementById('deleter')
// myDeleter.addEventListener("click", () => alert("1"));
// myDeleter.removeEventListener("click", () => alert("1"));
// myDeleter.onclick = () => alert(2);
// Оба обработчика сработают и будет выведены алерт 1 и алерт 2 по очереди


let panes = document.querySelectorAll('.pane')
for(let pane of panes) {
    pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    pane.firstChild.onclick = () => pane.remove();
  }