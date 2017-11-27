(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController (ShoppingListCheckOffService) {
    var buyC = this;

    buyC.items = ShoppingListCheckOffService.getBuyList();

    buyC.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {

    var boughtC = this;
    boughtC.items = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService () {
    var service = this;
    var buy = [
      {name: "cookies", quantity: 10},
      {name: "croissants", quantity: 8},
      {name: "puffs", quantity: 11},
      {name: "muffins", quantity: 5},
      {name: "cheese danish", quantity: 7}
    ];
    var bought = [];

    service.getBuyList = function() {
      return buy;
    };

    service.getBoughtList = function () {
      return bought;
    };

    service.buyItem = function(index) {
      var item = buy.splice(index, 1)[0];
      bought.push(item);
    };
  }
})();
