(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('BuyController', BuyController)
  .controller('BoughtController', BoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  BuyC.$inject = ['ShoppingListCheckOffService'];

  function BuyController (ShoppingListCheckOffService) {
    var buyCtrl = this;

    buyCtrl.items = ShoppingListCheckOffService.GetBuyList();

    buyCtrl.BuyItem = function(index) {
      ShoppingListCheckOffService.BuyItem(index);
    }
  }

  BoughtC.$inject = ['ShoppingListCheckOffService'];
  function BoughtController(ShoppingListCheckOffService) {

    var boughtCtrl = this;
    boughtCtrl.items = ShoppingListCheckOffService.GetBoughtList();
  }

  function ShoppingListCheckOffService () {
    var service = this;
    var Buy = [
      {name: "Cookies", quantity: 10},
      {name: "Croissants", quantity: 4},
      {name: "Cheese Danishes", quantity: 5},
      {name: "Cup Cakes", quantity: 7},
      {name: "Donuts", quantity: 6}
    ];
    var Bought = [];

    service.GetBuyList = function() {
      return Buy;
    };

    service.GetBoughtList = function () {
      return Bought;
    };

    service.BuyItem = function(index) {
      var item = Buy.splice(index, 1)[0];
      Bought.push(item);
    };
  }
})();
