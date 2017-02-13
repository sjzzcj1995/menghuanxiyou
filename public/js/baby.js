app.controller('hm3Control',function($scope,$http){
	function dj(){
	$scope.babyArr = [];	
	$http({
			url:"http://127.0.0.1:6587/list3",
			method:'get',
		}).success(function(data){
			$scope.babyArr = data.equip_list;
			// console.log($scope.moneyArr)
			
		})
	}
	dj();
	$scope.one = function(){
		dj();
	}
	$scope.two = function(){
		dj();
	}
	$scope.three = function(){
		dj();
	}
	$scope.fore = function(){
		dj();
	}
})