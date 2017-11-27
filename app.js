(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('BuyC', BuyC)
  .controller('BoughtC', BoughtC)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  BuyC.$inject = ['ShoppingListCheckOffService'];

  function BuyC (ShoppingListCheckOffService) {
    var buyCtrl = this;

    buyCtrl.Items = ShoppingListCheckOffService.GetBuyList();

    buyCtrl.BuyItem = function(Index) {
      ShoppingListCheckOffService.BuyItem(Index);
    }
  }

  BoughtC.$inject = ['ShoppingListCheckOffService'];
  function BoughtC(ShoppingListCheckOffService) {

    var boughtCtrl = this;
    boughtCtrl.Items = ShoppingListCheckOffService.GetBoughtList();
  }

  function ShoppingListCheckOffService () {
    var service = this;
    var Buy = [
      {Name: "Cookies", Quantity: 10},
      {Name: "Croissants", Quantity: 4},
      {Name: "Cheese Danishes", Quantity: 5},
      {Name: "Cup Cakes", Quantity: 7},
      {Name: "Donuts", Quantity: 6}
    ];
    var Bought = [];

    service.GetBuyList = function() {
      return Buy;
    };

    service.GetBoughtList = function () {
      return Bought;
    };

    service.BuyItem = function(Index) {
      var Item = Buy.splice(Index, 1)[0];
      Bought.push(Item);
    };
  }
})();
