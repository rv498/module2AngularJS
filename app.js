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
	
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var BoughtList = this;
	
	
}
	
function ShoppingListCheckOffService(ItemName, Quantity) {
	
	var service = this;
	
	var Items = [];
	
	service.AddItem = function (ItemName, Quantity) {
		
		var Item = {
			Name: ItemName,
			Quantity: Quantity
		};
		Items.push(Item);
	};
	
	service.RemoveItem = function (ItemIndex) {
		Items.splice(ItemIndex, 1);
		
	};
	
	service.GetItems = function () {
		return Items;
	};
	
}
	
})();
