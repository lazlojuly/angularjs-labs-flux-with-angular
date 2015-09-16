angular.module('plunker').factory("CatalogStore", function(Dispatcher, Actions) {
    var event = new EventEmitter(), catalogItems = [], dispatchToken;
    //mutate state API
    dispatchToken = Dispatcher.register(function(action) {
      switch (action.type) {
        case Actions.CATALOG_LOADED:
          catalogItems = action.data;
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
      return catalogItems;
    }
  });
