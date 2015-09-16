var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, CatalogActions, CatalogStore, CartActions, CartStore) {
  var vm = this;
  
  vm.catalogItems = [];
  vm.addItem = addItem;
  vm.removeItem = removeItem;
  
  //triggers the action to load the catalog
  CatalogActions.loadCatalog();
  //registers a callback to respond to catalog updates
  CatalogStore.event.on('change', catalogUpdate);
  
  function catalogUpdate(){
    //update the view with current state
    vm.catalogItems = CatalogStore.getItems();
  }
  
  // register callback
  CartStore.event.on('change', cartUpdated);
  // deregister on $destroy
  $scope.$on('$destroy', function(){
    CartStore.event.removeListener(cartUpdated);
  });
  
function cartUpdated(){
  vm.cartItems = CartStore.getItems();
  vm.total = vm.cartItems.reduce(function(last, item){
    return last + (item.qty*item.data.cost);
  }, 0);
}
  
  // helper functions
  function addItem(item){
    CartActions.addItem(angular.copy(item));
  }
  
  function removeItem(item){
    CartActions.removeItem(item);
  }
});
