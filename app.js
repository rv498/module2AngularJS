(function () {
	
'use strict';
	
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	
function ToBuyController(ShoppingListCheckOffService) {
	var ItemToBuy = this;
	
	ItemToBuy.ItemName = "";
	ItemToBuy.ItemQuantity = "";
	
	ItemToBuy.addItem = function () {
		ShoppingListCheckOffService.addItem(ItemToBuy.ItemName, ItemToBuy.ItemQuantity);
	};
	
}
	
function ShoppingListCheckOffService(ItemName, Quantity) {
	
	var service = this;
	
	var Items = [];
	
	service.addItem = function (ItemName, Quantity) {
		
		var Item = {
			Name: ItemName,
			Quantity: Quantity
		};
		Items.push(Item);
	};
	
	service.GetItems = function () {
		return Items;
	};
	
}
	
})();
