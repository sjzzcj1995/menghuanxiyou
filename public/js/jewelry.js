app.controller('hm5Control',['$scope','$http',function($scope,$http){
	function dj(){
	$scope.jewelryArr = [];	
	$http({
			url:"http://127.0.0.1:6587/list5",
			method:'get',
		}).success(function(data){
			$scope.jewelryArr = data.equip_list;
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