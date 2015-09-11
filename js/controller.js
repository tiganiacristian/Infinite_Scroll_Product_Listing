var myApp = angular.module('myApp',[]);



myApp.controller('MainController', ['$scope','$window', '$http','$q', function($scope, $window, $http, $q) {
 	

    var vm = this;
	vm.limit = 0;
	$scope.products = [];
	$scope.fetchData = function(limit){
	  	$http
	  	.get("getDB.php", {params : {showLimit : vm.limit} })
	   	.success(function(data, status, headers, config) {
	   	
			$scope.products.push.apply($scope.products, data);

		})
		.error(function(data, status, headers, config) {
			console.log("_GET error");
		});
	}
	

	$scope.fetchData(vm.limit);
			
		

	angular.element($window).bind("scroll", function() {
	    var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
	    var body = document.body, html = document.documentElement;
	    var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
	    windowBottom = windowHeight + window.pageYOffset;
	    if (windowBottom >= docHeight) {
	        
	        console.log(vm.limit);
	        vm.limit += 16;
	        $scope.fetchData(vm.limit);


	    }
	});


	
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
		var Cart = [];
		for (j = 0; j < $scope.cartProducts.length; j++){
		
			name = $scope.cartProducts[j].name
			count = $scope.cartProducts[j].count
			Cart.push (name, count);

	    };
	    
	    
	    	
	    insertData(Cart.toString())
	}	
	

	insertData = function(clientCart){
		$http.post("pushDB.php",{'clientCart': clientCart })		
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




