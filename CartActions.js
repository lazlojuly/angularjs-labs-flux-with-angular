angular.module('plunker')
.factory("CartActions", function (Dispatcher, Actions) {
  return {
    addItem: function(item) {
      Dispatcher.dispatch({
        type: Actions.CART_ADD_ITEM,
        data: item
      });
    }
    ,removeItem: function(item) {
      Dispatcher.dispatch({
        type: Actions.CART_REMOVE_ITEM,
        data: item
      });
    }
  }
});