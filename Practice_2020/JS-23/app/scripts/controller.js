import * as $ from 'jquery';

export function Controller (model, view)  {
    let self = this;

    view.elements.addBtn.on ('click',  addItem);
    view.elements.editBtn.on('click', editItem);
    view.elements.listContainer.on('click', '.item-remove',  removeItem)
        .on('click', '.item-content', showItem);

    function addItem() {
        let newItem = view.elements.input.val();

        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
        view.elements.editBtn.prop('disabled',  true);
    }

    function removeItem(event) {
        event.stopPropagation();

        let index = $(this).attr('data-index');

        model.removeItem(index);
        view.renderList(model.data);
    }

    function showItem() {
        let item  = $(this).children().attr('data-value');
        let index = $(this).children().attr('data-index');

        view.elements.input.val(item);
        view.elements.editBtn.attr('data-index', index);
        view.elements.editBtn.prop('disabled',  false);
    }

    function editItem() {
        let index = $(this).attr('data-index');
        let editedItem = view.elements.input.val();

        model.editItem(editedItem, index);
        view.renderList(model.data);
        view.elements.input.val('');
        view.elements.editBtn.prop('disabled',  true);
    }
}