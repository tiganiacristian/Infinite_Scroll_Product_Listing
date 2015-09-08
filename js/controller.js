var myApp = angular.module('myApp',[]);



myApp.controller('MainController', ['$scope','$window', '$http', function($scope, $window, $http) {
  	$http.get("getDB.php")
   //  .success(function (response) {$scope.products = $productsaa;});
   .success(function(data, status, headers, config) {
			$scope.products = data;

		})
		.error(function(data, status, headers, config) {
			console.log("_GET error");
		});

	
	$scope.myLimit = 20;

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
		// window.alert('Succes!!!');
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


	$scope.playSound = function (){
		var audio = new Audio('images/kaching.mp3');
		audio.play();
	};

}]);




