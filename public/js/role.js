app.controller('hm2Control',['$scope','$http',function($scope,$http){
	function men(){
	$scope.manArr = [];	
	$http({
			url:"http://127.0.0.1:6587/list2",
			method:'get',
		}).success(function(data){
			$scope.manlist = data.order_headers;
			$scope.manArr = data.equip_list;
			console.log($scope.manlist);
			console.log($scope.manArr);
		})
	}
	men();
}])
