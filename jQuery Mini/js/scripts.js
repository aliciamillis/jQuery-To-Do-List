
//adding new item
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if(inputValue === '') {
  alert("Please add item!");
}else{
  $('#list').append(li);
}

//crossing out item

function crossOut() {
		li.toggleClass("strike");
	}

  li.on("dblclick", function crossOut() {
  		li.toggleClass("strike");
  	});

//delete button
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete")
  }

//sorted deleteListItem
// $('#list').sortable();
