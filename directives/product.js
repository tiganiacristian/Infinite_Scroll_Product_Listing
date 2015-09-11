myApp.directive('myItem', function(){
	debugger
	return  {
		restrict :'E',
		scope: {
			info: '='
		},
		templateUrl: 'item.html', 
		link: function(scope,el,attr,cntr) {
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
}
	};
});