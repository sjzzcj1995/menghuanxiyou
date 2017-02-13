app.controller('auctionControl',function ($scope,$http) {
    $scope.arr = [];
    $scope.arr2 = [];
    $scope.num1 = 0;
    $scope.num2 = 0;
    $scope.num3 = 0; 
    //综合排序
            $scope.orderByNormal = function(){
                $scope.num1 = 0;
                $scope.num2 = 0;
                $scope.num3 = 0;
                $http({
                    url:'http://127.0.0.1:6587/first1',
                    method:'get'
                }).success(function (data) {
                      // console.log(data)
                      $scope.arr = data.equip_list;
                })
                $scope.aucChangeIcon0 = {
                    "color" : "rgb(250,0,10)",
                }
                $scope.aucChangeIcon1 = {
                    "color" : "rgb(70,70,70)"
                }
                $scope.aucChangeIcon2 = {
                    "color" : "rgb(70,70,70)"
                }
                $scope.aucChangeIcon3 = {
                    "color" : "rgb(70,70,70)"
                }
            }
            //进入页面加载数据
            $scope.orderByNormal();

            //时间排序
            $scope.orderByTime = function(){
                //初始化其他两个li的num
                $scope.num1++;
                $scope.num2 = 0;
                $scope.num3 = 0;
                $http({
                    url:'http://127.0.0.1:6587/first1',
                    method:'get'
                }).success(function (data) {
                      // console.log(data)
                      $scope.arr = data.equip_list;

                        if($scope.num1 == 1){//初始化第一次点击li的状态
                            console.log(1)
                                    $scope.aucChangeIcon0 = {
                                        "color" : "rgb(70,70,70)"
                                    }
                                    $scope.aucChangeIcon1 = {
                                        "color" : "rgb(250,0,10)"
                                    }
                                    $scope.aucChangeIcon2 = {
                                        "color" : "rgb(70,70,70)"
                                    }
                                    $scope.aucChangeIcon3 = {
                                        "color" : "rgb(70,70,70)"
                                    }   
                                    $scope.arr.sort(function(a,b){
                                        return a.time_list-b.time_list;
                                    })
                        
                       } else{
                         console.log(2)
                            if($scope.num1%2 == 1){
                            
                                        $scope.aucChangeIcon1 = {
                                            "color" : "rgb(250,0,10)",
                                           
                                        }
                                        $scope.arr.sort(function(a,b){
                                            return a.time_list-b.time_list;
                                        })
                            
                        }else{
                            
                                $scope.aucChangeIcon1 = {
                                            "color" : "rgb(250,0,10)",
                                            
                                }
                                $scope.arr.sort(function(a,b){
                                       return b.time_list-a.time_list;
                                 })
                            
                        }

                    }
                    
                   
                })
                    
            } 

            //竞拍和抢付切换
            $scope.aucTab = false;
        //     $scope.aucRob = true;
            $scope.aucing = function(){
                $scope.aucTab = false;
                $scope.chooseLeft = {
                    "color" : "rgb(250,0,10)",
                    "border-bottom" : "2px solid rgb(250,0,10)"
                }
                $scope.chooseRight = {
                    "color" : "rgb(70,70,70)",
                    "border-bottom" : "none"
                }
            }
            $scope.auced = function(){
                $scope.aucTab = true;
                $scope.chooseRight = {
                    "color" : "rgb(250,0,10)",
                    "border-bottom" : "2px solid rgb(250,0,10)"
                }
                $scope.chooseLeft = {
                    "color" : "rgb(70,70,70)",
                    "border-bottom" : "none"
                }
            }
            $http({
                    url:'http://127.0.0.1:6587/first1',
                    method:'get'
                }).success(function (data) {
                      // console.log(data)
                      $scope.arr = data.equip_list;
                })
})
    

