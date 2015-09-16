angular.module('plunker')
  .factory("CartStore", function(Dispatcher, Actions) {
    var event = new EventEmitter(),
      cartItems = [],
      dispatchToken;

    //mutate state API
    dispatchToken = Dispatcher.register(function(action) {
      switch (action.type) {
        case Actions.CART_ADD_ITEM:
          addItem(action.data);
          break;
        case Actions.CART_REMOVE_ITEM:
          removeItem(action.data);
          break;
      }
      //notify change
      event.emit('change');
    });

    //Read only API
    return {
      getItems: getItems,
      event: event,
      dispatchToken: dispatchToken
    };

    //helper functions
    function getItems() {
      return cartItems;
    }
    
    function addItem(item){
      var items = cartItems.filter(function(i){
        return (item.id == i.data.id);
      })
      if (items.length===0){
        cartItems.push({
          qty: 1,
          data: item
        })
      } else {
        items[0].qty += 1;
      }
    }
    
    function removeItem(item){
      var index = cartItems.indexOf(item);
      if (index>=0){
        cartItems.splice(index, 1);
      }
    }
  });