import * as $ from 'jquery';


export function View(model) {
    let self = this;

    function init() {
        let wrapper = tmpl( $('#wrapper-template').html() ) ;
        $('body').append(wrapper);

        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            editBtn: $('.item-edit'),
            listContainer: $('.item-list'),
        }

        self.renderList(model.data);
    }

    self.renderList = function (data) {
        let list = tmpl( $('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);
    }

    init();

}


