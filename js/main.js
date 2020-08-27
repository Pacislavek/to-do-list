var createCard = document.getElementById("create-card");

function showCreate() {
  createCard.style.display = "block";
}

function closeCreate() {
  createCard.style.display = "none";
}

//to-do-list dodawanie i usuwanie

let todoList = null;
let todoForm = null;

todoList = document.querySelector("#todoList");
todoForm = document.querySelector("#todoForm");


//addTask
function addTask() {

  var noteTitle = document.getElementById("noteTitle");
  var noteDesc = document.getElementById("noteDesc");

  console.log("Dodaję zadanie do listy")

  //element container bootstrap
  const bootstrapCont = document.createElement("div");
  bootstrapCont.classList.add("col-lg-4");
  bootstrapCont.classList.add("col-md-6");
  bootstrapCont.classList.add("col-sm-12");

  //card
  const card = document.createElement("div");
  card.classList.add("card");

  //deletecard
  const deleteCard = document.createElement("button");
  deleteCard.classList.add("card-close");
  deleteCard.id = "deleteCard";
  deleteCard.innerText = "×";

  //cardtitle
  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = noteTitle.value;

  //cardDesc
  const cardDesc = document.createElement("div");
  cardDesc.classList.add("card-desc");
  cardDesc.innerText = noteDesc.value;

  //cardFooter
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");
  cardFooter.classList.add("d-flex");
  cardFooter.classList.add("justify-content-between");

  //cardStatus undone
  const cardStatus = document.createElement("button");
  cardStatus.classList.add("card-icon");
  cardStatus.classList.add("undone");

  //data
  const date = new Date();
  const dateText = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;

  const cardDate = document.createElement("div");
  cardDate.classList.add("card-date");
  cardDate.id = "cardDate";
  cardDate.innerText = dateText;

  //child & parents
  bootstrapCont.appendChild(card);
  card.appendChild(deleteCard);
  card.appendChild(cardTitle);
  card.appendChild(cardDesc);
  card.appendChild(cardFooter);
  cardFooter.appendChild(cardStatus);
  cardFooter.appendChild(cardDate);

  //join in all
  todoList.appendChild(bootstrapCont);

  //reset
  noteDesc.value = "";
  noteTitle.value = "";
}

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  addTask();

  //deleteTaskRefresh
  deleteTask = document.querySelectorAll(".card-close");
  deleteTask.forEach(obj => {
    obj.addEventListener("click", () => {
      obj.parentNode.parentNode.remove()
    })
  });

  //cardStatusRefresh
  cardStatus = document.querySelectorAll(".card-icon");
  cardStatus.forEach(obj => {
    obj.addEventListener("click", () => {

      if (obj.classList.contains("undone")) {
        obj.classList.remove("undone");
        obj.classList.add("done");

        obj.parentNode.parentNode.classList.add("finished");
      } else {
        obj.classList.remove("done");
        obj.classList.add("undone");
        obj.parentNode.parentNode.classList.remove("finished");
      }
    })
  });
});

//deleteTask
var deleteTask = document.querySelectorAll(".card-close");
deleteTask.forEach(obj => {
  obj.addEventListener("click", () => {
    obj.parentNode.parentNode.remove()
  })
});

//changeStatus
var cardStatus = document.querySelectorAll(".card-icon");

cardStatus.forEach(obj => {
  obj.addEventListener("click", () => {

    if (obj.classList.contains("undone")) {
      obj.classList.remove("undone");
      obj.classList.add("done");

      obj.parentNode.parentNode.classList.add("finished");
    } else {
      obj.classList.remove("done");
      obj.classList.add("undone");

      obj.parentNode.parentNode.classList.remove("finished");
    }
  })
});

//click outside div create-card
$(document).mouseup(function(e) {
    var container = $("#noteCreate");

    if (!container.is(e.target) && container.has(e.target).length === 0 && container.is(':visible')) {
        $("#create-card").hide();
    }
});
