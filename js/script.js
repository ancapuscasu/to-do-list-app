
function newItem(){

//1. Adding a new item to the list of items: 

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert ('You must write a to-do item!');
  } else {
    $('#list').append(li);
  }


 //2. Crossing out an item from the list of items:

  function crossOut() {
 		li.toggleClass("strike");
 	}

  li.on('dblclick', crossOut);


 //3(i). Adding the delete button "X": 

  let deleteButton = $('<button></button');
  deleteButton.addClass('deleteButton');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

  deleteButton.on('click', deleteListItem);
  function deleteListItem(){
    li.addClass('delete')
  }

  $('#list').sortable();
}

