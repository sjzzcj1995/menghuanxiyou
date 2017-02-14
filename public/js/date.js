app.controller('hm7Control',['$scope','$http',function($scope,$http){
	function dj(){
	$scope.dateArr = [];	
	$http({
			url:"http://127.0.0.1:6587/list6",
			method:'get',
		}).success(function(data){
			$scope.dateArr = data.equip_list;
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
}])