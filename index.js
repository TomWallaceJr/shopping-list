'use strict';

//when add item form submitted
$('#js-shopping-list-form').submit(function (e) {
  e.preventDefault();
  const item = $(this).find('input').val();
  const listItem = $('.shopping-list');

  listItem.append(`<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
});

$('.shopping-list').on('click', '.shopping-item-toggle', function () {
  $(this).parent().siblings().toggleClass('shopping-item__checked');
  console.log($(this).parent().siblings('span'));
});

//on delete button click --- .on click funct () { clear everything   }

$('.shopping-list').on('click', '.shopping-item-delete', (e) => {
  $(e.currentTarget).parent().parent().remove();
  console.log($(e.currentTarget).parent().closest());
});