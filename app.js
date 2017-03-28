var item = $('#shopping-list-entry');
var list = $('.shopping-list');
var id = 0;    

$('#add').click(function() {
    id++;
    list.prepend('<li value="'+ id +'" class="list"><span class="shopping-item">' +
             item.val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');    

$('.shopping-item-toggle').click(function() {
  var currentItem = $(this.closest('li')).find('.shopping-item');        
    currentItem.addClass('shopping-item__checked');
});

$('.shopping-item-delete').click(function() {
    this.closest('li').remove();  
});

event.preventDefault();
});