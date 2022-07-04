

export function Model(data) {
    let self = this;
    self.data = data;

    self.addItem = function (item) {
        if (item.length === 0) {
            return;
        }

        self.data.push(item);

        return self.data;
    };


    self.removeItem = function (index) {
        self.data.splice(index, 1);

        return self.data;
    };


    self.editItem = function (editedItem, index) {
        if (editedItem.length === 0) {
            return;
        }

        self.data.splice(index, 1, editedItem);
    }
}