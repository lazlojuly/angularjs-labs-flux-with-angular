angular.module('plunker')
.factory("Actions", function () {
  var options = {
    CATALOG_LOADED: "CATALOG_LOADED"
    ,CART_ADD_ITEM: "CART_ADD_ITEM"
    ,CART_REMOVE_ITEM: "CART_REMOVE_ITEM"
  };
  return options;
});