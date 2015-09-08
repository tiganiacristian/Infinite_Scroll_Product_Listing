var myApp = angular.module('myApp',[]);



myApp.controller('MainController', ['$scope','$window', '$http', function($scope, $window, $http) {
  	$http.get("getData.php")
    .success(function (response) {$scope.products = response.records;});

  	var Products = {};
	// Products.list = [
	// 	{
	// 		"id": "1",
	// 		"imageUrl": "images/image1.jpg",
	// 		"name": "Slapi Adibas",
	// 		"price": "15",
	// 		"category": "shoes"
	// 	},
	// 	{
	// 		"id": "2",
	// 		"imageUrl": "images/image2.jpg",
	// 		"name": "Slapi Mike",
	// 		"price": "22",
	// 		"category": "shoes"

	// 	},
	// 	{
	// 		"id": "3",
	// 		"imageUrl": "images/shirt.jpg",
	// 		"name": "Tricou Mike",
	// 		"price": "29",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "4",
	// 		"imageUrl": "images/jeans.jpg",
	// 		"name": "Jeans Puna",
	// 		"price": "56",
	// 		"category": "jeans"
	// 	},
	// 	{
	// 		"id": "5",
	// 		"imageUrl": "images/image1.jpg",
	// 		"name": "Slapi Puna",
	// 		"price": "21",
	// 		"category": "shoes"
	// 	},
	// 	{
	// 		"id": "6",
	// 		"imageUrl": "images/shoes.jpg",
	// 		"name": "Adibasi Mike",
	// 		"price": "44",
	// 		"category": "shoes"

	// 	},
	// 	{
	// 		"id": "7",
	// 		"imageUrl": "images/shirt.jpg",
	// 		"name": "Men Shirt",
	// 		"price": "29",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "8",
	// 		"imageUrl": "images/jacket.jpg",
	// 		"name": "Geaca Puna",
	// 		"price": "99",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "9",
	// 		"imageUrl": "images/image1.jpg",
	// 		"name": "Slapi Adibas",
	// 		"price": "15",
	// 		"category": "shoes"
	// 	},
	// 	{
	// 		"id": "10",
	// 		"imageUrl": "images/image2.jpg",
	// 		"name": "Slapi Mike",
	// 		"price": "22",
	// 		"category": "shoes"

	// 	},
	// 	{
	// 		"id": "11",
	// 		"imageUrl": "images/shirt.jpg",
	// 		"name": "Tricou Mike",
	// 		"price": "29",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "12",
	// 		"imageUrl": "images/jeans.jpg",
	// 		"name": "Jeans Puna",
	// 		"price": "56",
	// 		"category": "jeans"
	// 	},
	// 	{
	// 		"id": "13",
	// 		"imageUrl": "images/image1.jpg",
	// 		"name": "Slapi Puna",
	// 		"price": "21",
	// 		"category": "shoes"
	// 	},
	// 	{
	// 		"id": "14",
	// 		"imageUrl": "images/shoes.jpg",
	// 		"name": "Adibasi Mike",
	// 		"price": "44",
	// 		"category": "shoes"

	// 	},
	// 	{
	// 		"id": "15",
	// 		"imageUrl": "images/shirt.jpg",
	// 		"name": "Men Shirt",
	// 		"price": "29",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "16",
	// 		"imageUrl": "images/jacket.jpg",
	// 		"name": "Geaca Puna",
	// 		"price": "99",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "17",
	// 		"imageUrl": "images/image1.jpg",
	// 		"name": "Slapi Adibas",
	// 		"price": "15",
	// 		"category": "shoes"
	// 	},
	// 	{
	// 		"id": "18",
	// 		"imageUrl": "images/image2.jpg",
	// 		"name": "Slapi Mike",
	// 		"price": "22",
	// 		"category": "shoes"

	// 	},
	// 	{
	// 		"id": "19",
	// 		"imageUrl": "images/shirt.jpg",
	// 		"name": "Tricou Mike",
	// 		"price": "29",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "20",
	// 		"imageUrl": "images/jeans.jpg",
	// 		"name": "Jeans Puna",
	// 		"price": "56",
	// 		"category": "jeans"
	// 	},
	// 	{
	// 		"id": "21",
	// 		"imageUrl": "images/image1.jpg",
	// 		"name": "Slapi Puna",
	// 		"price": "21",
	// 		"category": "shoes"
	// 	},
	// 	{
	// 		"id": "22",
	// 		"imageUrl": "images/shoes.jpg",
	// 		"name": "Adibasi Mike",
	// 		"price": "44",
	// 		"category": "shoes"

	// 	},
	// 	{
	// 		"id": "23",
	// 		"imageUrl": "images/shirt.jpg",
	// 		"name": "Men Shirt",
	// 		"price": "29",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "24",
	// 		"imageUrl": "images/jacket.jpg",
	// 		"name": "Geaca Puna",
	// 		"price": "99",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "25",
	// 		"imageUrl": "images/image1.jpg",
	// 		"name": "Slapi Adibas",
	// 		"price": "15",
	// 		"category": "shoes"
	// 	},
	// 	{
	// 		"id": "26",
	// 		"imageUrl": "images/image2.jpg",
	// 		"name": "Slapi Mike",
	// 		"price": "22",
	// 		"category": "shoes"

	// 	},
	// 	{
	// 		"id": "27",
	// 		"imageUrl": "images/shirt.jpg",
	// 		"name": "Tricou Mike",
	// 		"price": "29",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "28",
	// 		"imageUrl": "images/jeans.jpg",
	// 		"name": "Jeans Puna",
	// 		"price": "56",
	// 		"category": "jeans"
	// 	},
	// 	{
	// 		"id": "29",
	// 		"imageUrl": "images/image1.jpg",
	// 		"name": "Slapi Puna",
	// 		"price": "21",
	// 		"category": "shoes"
	// 	},
	// 	{
	// 		"id": "30",
	// 		"imageUrl": "images/shoes.jpg",
	// 		"name": "Adibasi Mike",
	// 		"price": "44",
	// 		"category": "shoes"

	// 	},
	// 	{
	// 		"id": "31",
	// 		"imageUrl": "images/shirt.jpg",
	// 		"name": "Men Shirt",
	// 		"price": "29",
	// 		"category": "shirts & tops"
	// 	},
	// 	{
	// 		"id": "32",
	// 		"imageUrl": "images/jacket.jpg",
	// 		"name": "Geaca Puna",
	// 		"price": "99",
	// 		"category": "shirts & tops"
		

	// 	}]
	// $scope.products = Products.list


	$scope.myLimit = 20;
	// $window = angular.element(window)
	// $window.on('scroll', function () {   
	// 	console.log('SCROLL')      
	//    	$scope.myLimit +=3;
	// });

	angular.element($window).bind("scroll", function() {
	    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
	    var body = document.body, html = document.documentElement;
	    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
	    windowBottom = windowHeight + window.pageYOffset;
	    if (windowBottom >= docHeight) {
	        $scope.increaseLimit();
	        $scope.$apply();
	        console.log($scope.myLimit);
	    }
	});
	

	$scope.increaseLimit = function(){
		$scope.myLimit +=8;
	}
	

	$scope.cartProducts = [];
	var myCart = $scope.cartProducts;
	$scope.addProduct= function (product) {
		var i;
		var myCart = $scope.cartProducts;

		for(i = 0; i < myCart.length; i++) {
			if(myCart[i].id === product.id) {
				myCart[i].count += 1;
				return;
			}
		}


		product.count = 1
		myCart.push(product)

 	}

	
	$scope.filterMinValue = 0;
	$scope.filterMaxValue = 99;
	$scope.priceRange = function(product) {
		return (parseInt(product['price']) >= $scope.filterMinValue && parseInt(product['price']) <= $scope.filterMaxValue);
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
	        total += (parseInt(product.price*product.count));
	    }
	    return total;
	};

}]);


	// function ProductsCtrl($scope, Products){
	// 	$scope.products = Products;
	// }


