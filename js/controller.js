var myApp = angular.module('myApp',[]);



myApp.controller('MainController', ['$scope','$window', '$http', function($scope, $window, $http) {
  	$http.get("getDB.php")
   .success(function(data, status, headers, config) {
		
		$scope.products = data;

	})
	.error(function(data, status, headers, config) {
		console.log("_GET error");
	});

	
	$scope.showLimit = 16;

	angular.element($window).bind("scroll", function() {
	    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
	    var body = document.body, html = document.documentElement;
	    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
	    windowBottom = windowHeight + window.pageYOffset;
	    if (windowBottom >= docHeight) {
	        $scope.increaseLimit();
	        $scope.$apply();
	        console.log($scope.showLimit);
	    }
	});
	

	$scope.increaseLimit = function(){
		$scope.showLimit +=8;
	}
	

	

	
	$scope.filterMinValue = 0;
	$scope.filterMaxValue = 99;
	$scope.priceRange = function(product) {
		return (parseInt(product['price']) >= $scope.filterMinValue && parseInt(product['price']) <= $scope.filterMaxValue);
	};
	

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


	$scope.getTotal = function () {
		var total = 0;
		var i, product;

		for(i = 0; i < $scope.cartProducts.length; i++){

	        product = $scope.cartProducts[i];
	        total += (parseInt(product.price*product.count));
	      
	    }
	    return total;
	};

	$scope.pushDB = function(){
		var j;
		// var productlistdb = [];
		for (j = 0; j < $scope.cartProducts.length; j++){
			// product = [];
			// product.push($scope.cartProducts[j].name)
			// product.push($scope.cartProducts[j].count)
			// produse.push(product)
			name = $scope.cartProducts[j].name
			count = $scope.cartProducts[j].count
			insertData(name, count)
			// console.log(produse)
	    };
	    	

	}	
	insertData = function(name,  count){
		$http.post("pushDB.php",{'name': name , 'count': count})		
        	.success(function(data, status, headers, config){
	            console.log("inserted Successfully");
        	});
	}

	$scope.emptyCart = function () {

		$scope.cartProducts.length = 0;
		// window.alert('Succes!!!');
	};





	$scope.playSound = function (){
		var audio = new Audio('images/kaching.mp3');
		audio.play();
	};

}]);




