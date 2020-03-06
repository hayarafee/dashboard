const addNewOrder = document.getElementById("addOrder");
const closepopUp = document.getElementById("closepop");

eventsList();
function eventsList() {
  addNewOrder.addEventListener("click", openpopup);
    closepopUp.addEventListener("click", closePoup);
  }

  function openpopup(){
    popupBox.style.display = "block";
}
function closePoup(){
    popupBox.style.display = "none";
}

$(window).on('load', function(){
  $("#commonsidebar").load("sidebar.html");

});
