
app.controller('hm1Control',function($scope,$http){
	console.log("1");
	function dj(){
	$scope.moneyArr = [];	
	$http({
			url:"http://127.0.0.1:6587/list1",
			method:'get',
		}).success(function(data){
			$scope.moneyArr = data.equip_list;
			console.log($scope.moneyArr)
			
		})
	}
	dj();
	$scope.low = function(){
		dj();
	}
	$scope.jg = function(){
		dj();
	}
})