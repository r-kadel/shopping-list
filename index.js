init();

function init() {
    $(deleteItem());
    $(checkItem());
    $(addItem());
}

function addItem() {
    $('#js-shopping-list-form').on('submit', function(){
        event.preventDefault();
        let listItem = $('#shopping-list-entry').val();
        $('ul').append(`<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    })
}

function checkItem() {
    $('ul').on('click', '.shopping-item-toggle', function(e){
        $(this).closest('.shopping-item-controls').siblings('.shopping-item')
        .toggleClass('shopping-item__checked');
    });
}

function deleteItem() {
    $('ul').on('click', '.shopping-item-delete', function(e){
        $(this).closest('li').remove();
    });
}
