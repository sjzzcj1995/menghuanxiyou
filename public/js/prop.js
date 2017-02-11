app.controller('hm4Control',function($scope,$http){
	function prop(){
	$scope.propArr = [];	
	$http({
			url:"http://127.0.0.1:6587/list4",
			method:'get',
		}).success(function(data){
			$scope.propArr = data.equip_list;
			console.log($scope.propArr);
		})
	}
	prop();
})
