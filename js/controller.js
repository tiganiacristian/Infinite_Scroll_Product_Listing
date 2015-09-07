var myApp = angular.module('myApp',[]);



myApp.controller('MainController', ['$scope','$window', function($scope) {
  $scope.greeting = 'Slapi Mike!';
  	var Products = {};
	Products.list = [
	{
		"imageUrl": "images/image1.jpg",
		"name": "Slapi Adibas",
		"price": "15",
		"category": "shoes"
	},
	{
		"imageUrl": "images/image2.jpg",
		"name": "Slapi Mike",
		"price": "22",
		"category": "shoes"

	},
	{
		"imageUrl": "images/shirt.jpg",
		"name": "Tricou Mike",
		"price": "29",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/jeans.jpg",
		"name": "Jeans Puna",
		"price": "56",
		"category": "jeans"
	},
	{
		"imageUrl": "images/image1.jpg",
		"name": "Slapi Puna",
		"price": "21",
		"category": "shoes"
	},
	{
		"imageUrl": "images/shoes.jpg",
		"name": "Adibasi Mike",
		"price": "44",
		"category": "shoes"

	},
	{
		"imageUrl": "images/shirt.jpg",
		"name": "Men Shirt",
		"price": "29",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/jacket.jpg",
		"name": "Geaca Puna",
		"price": "99",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/image1.jpg",
		"name": "Slapi Adibas",
		"price": "15",
		"category": "shoes"
	},
	{
		"imageUrl": "images/image2.jpg",
		"name": "Slapi Mike",
		"price": "22",
		"category": "shoes"

	},
	{
		"imageUrl": "images/shirt.jpg",
		"name": "Tricou Mike",
		"price": "29",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/jeans.jpg",
		"name": "Jeans Puna",
		"price": "56",
		"category": "jeans"
	},
	{
		"imageUrl": "images/image1.jpg",
		"name": "Slapi Puna",
		"price": "21",
		"category": "shoes"
	},
	{
		"imageUrl": "images/shoes.jpg",
		"name": "Adibasi Mike",
		"price": "44",
		"category": "shoes"

	},
	{
		"imageUrl": "images/shirt.jpg",
		"name": "Men Shirt",
		"price": "29",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/jacket.jpg",
		"name": "Geaca Puna",
		"price": "99",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/image1.jpg",
		"name": "Slapi Adibas",
		"price": "15",
		"category": "shoes"
	},
	{
		"imageUrl": "images/image2.jpg",
		"name": "Slapi Mike",
		"price": "22",
		"category": "shoes"

	},
	{
		"imageUrl": "images/shirt.jpg",
		"name": "Tricou Mike",
		"price": "29",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/jeans.jpg",
		"name": "Jeans Puna",
		"price": "56",
		"category": "jeans"
	},
	{
		"imageUrl": "images/image1.jpg",
		"name": "Slapi Puna",
		"price": "21",
		"category": "shoes"
	},
	{
		"imageUrl": "images/shoes.jpg",
		"name": "Adibasi Mike",
		"price": "44",
		"category": "shoes"

	},
	{
		"imageUrl": "images/shirt.jpg",
		"name": "Men Shirt",
		"price": "29",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/jacket.jpg",
		"name": "Geaca Puna",
		"price": "99",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/image1.jpg",
		"name": "Slapi Adibas",
		"price": "15",
		"category": "shoes"
	},
	{
		"imageUrl": "images/image2.jpg",
		"name": "Slapi Mike",
		"price": "22",
		"category": "shoes"

	},
	{
		"imageUrl": "images/shirt.jpg",
		"name": "Tricou Mike",
		"price": "29",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/jeans.jpg",
		"name": "Jeans Puna",
		"price": "56",
		"category": "jeans"
	},
	{
		"imageUrl": "images/image1.jpg",
		"name": "Slapi Puna",
		"price": "21",
		"category": "shoes"
	},
	{
		"imageUrl": "images/shoes.jpg",
		"name": "Adibasi Mike",
		"price": "44",
		"category": "shoes"

	},
	{
		"imageUrl": "images/shirt.jpg",
		"name": "Men Shirt",
		"price": "29",
		"category": "shirts & tops"
	},
	{
		"imageUrl": "images/jacket.jpg",
		"name": "Geaca Puna",
		"price": "99",
		"category": "shirts & tops"
	

	}]
	$scope.products = Products.list

	$scope.cartProducts = [];
	var myCart = $scope.cartProducts;

$scope.addProduct= function (product) {

		myCart.push(product)

 }
	
$scope.myLimit = 15;

$scope.increaseLimit = function () {
	debugger
		$scope.myLimit += 8;
	};

$scope.buyProducts = function () {

		$scope.cartProducts.length = 0;
		window.alert('Succes!!!');
	};
$scope.getTotal = function () {
		var total = 0;
		var i, product;
		for(i = 0; i < $scope.cartProducts.length; i++){

	        product = $scope.cartProducts[i];
	        total += parseInt(product.price);
	    }
	    return total;
	};

}]);



function ProductsCtrl($scope, Products){
	$scope.products = Products;
}

