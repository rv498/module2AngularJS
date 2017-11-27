(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController (ShoppingListCheckOffService) {
    var buyCtrl = this;

    buyCtrl.items = ShoppingListCheckOffService.getToBuyList();

    buyCtrl.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {

    var boughtCtrl = this;
    boughtCtrl.items = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService () {
    var service = this;
    var toBuy = [
      {name: "cookies", quantity: 10},
      {name: "chocolates", quantity: 20},
      {name: "ice-cream", quantity: 1},
      {name: "kachori", quantity: 25},
      {name: "samosa", quantity: 10}
    ];
    var bought = [];

    service.getToBuyList = function() {
      return toBuy;
    };

    service.getBoughtList = function () {
      return bought;
    };

    service.buyItem = function(index) {
      var item = toBuy.splice(index, 1)[0];
      bought.push(item);
    };
  }
})();
